const CACHE_NAME = 'prepa-mariage-v1';
const urlsToCache = [
  '/',
  'https://script.google.com/macros/s/AKfycbx8H4Za1sw2o9cwFCxjzU6uf20N45YhDrJpNHuS_sVk/dev', // Remplacez par l'URL de votre Web App
  'https://github.com/FBAUD71/prepa-mariage/raw/main/web-app-manifest-192x192.png',
  'https://github.com/FBAUD71/prepa-mariage/raw/main/web-app-manifest-512x512.png',
  'https://github.com/FBAUD71/prepa-mariage/raw/main/apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
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
