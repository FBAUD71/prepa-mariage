const CACHE_NAME = 'prepa-mariage-install-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icone-180x180.png',
  'icone-192x192.png',
  'icone-512x512.png'
];

// Rediriger vers Google Apps Script si l'utilisateur ouvre la PWA
self.addEventListener('fetch', event => {
  if (event.request.url.includes('github.io')) {
    event.respondWith(
      Response.redirect('https://script.google.com/macros/s/AKfycbx8H4Za1sw2o9cwFCxjzU6uf20N45YhDrJpNHuS_sVk/dev', 301)
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});
