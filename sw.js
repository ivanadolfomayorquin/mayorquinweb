const CACHE_NAME = "mayorquinweb-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./servicios.html",
  "./css/styles.css",
  "./css/servicios.css",
  "./js/app.js",
  "./manifest.json",
  "./img/logo-mayorquinweb.png",
  "./video/mayorquinweb-portada.mp4",
  "./icons/logo-192.png",
  "./icons/logo-512.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, clone));

        return response;
      })
      .catch(() => caches.match(event.request))
  );
});