'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/image1.jpg": "9f710a2478533a982d181288556ed586",
"/assets/assets/images/logo.png": "6ea7e946028663ed71566caf90f443bd",
"/assets/assets/images/image3.jpg": "6c3ed6b0443031ce118bb5f9596d0f31",
"/assets/assets/images/image2.jpg": "908e7a814b699d01f989245c5f306659",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "95abb06f32b4ac6b95b31eb2befea30a",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "c93cd019f927356d43221ee9b65463b3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
