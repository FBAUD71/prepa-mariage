const CACHE_NAME = 'prepa-mariage-install-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icone-180x180.png',
  'icone-192x192.png',
  'icone-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
