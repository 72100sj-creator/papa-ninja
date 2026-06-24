// Papa Ninja 🥷 — Service Worker v2.2
// Stratégie : network-first pour HTML (mise à jour immédiate), cache-first pour assets

const CACHE_NAME = 'papa-ninja-v2.4';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon.png'
];

// Installation : mise en cache initiale
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => {
        // NE PAS appeler skipWaiting ici : on laisse le client décider du bon moment
      })
  );
});

// Activation : suppression de tous les anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Message depuis le client (bouton "Mettre à jour maintenant")
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch : network-first pour HTML, cache-first pour le reste
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isHTML = url.pathname.endsWith('.html')
    || url.pathname === '/'
    || url.pathname.endsWith('/papa-ninja/')
    || url.pathname.endsWith('/papa-ninja');

  if (isHTML) {
    // Network-first : toujours essayer le réseau pour avoir la dernière version
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request)) // hors-ligne : fallback cache
    );
  } else {
    // Cache-first : assets statiques (icônes, manifest)
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200 && url.origin === self.location.origin) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => null);
      })
    );
  }
});
