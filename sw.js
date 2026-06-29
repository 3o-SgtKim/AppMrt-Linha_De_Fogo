self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pelotao-store').then((cache) => cache.addAll([
      '/index.html',
      '/style.css', // Se você tiver um arquivo de CSS separado
      '/script.js'  // Se você tiver um arquivo de JS separado
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
