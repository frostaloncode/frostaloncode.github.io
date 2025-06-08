'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa6ff8b47c8d2f6ab511926ba9c75482",
"assets/AssetManifest.bin.json": "f2c6757ad98971bea1c7576fd5d0b3e7",
"assets/AssetManifest.json": "ee328be7026e75978bd4b2da02f33e3a",
"assets/assets/doc/en_cv.pdf": "7bb27311499c6021e6b9ba1893c84313",
"assets/assets/doc/tr_cv.pdf": "fa3583c5e6fe3b529886ea64655fbbbc",
"assets/assets/font/dansingscripts.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/font/tinos-bold.ttf": "78608e0544ac6285956a5cc050d4143f",
"assets/assets/font/tinos.ttf": "5d50b7efd868452d058b828cf13dd1ac",
"assets/assets/icon/bluesky.png": "2c6e9574d5309655570f5116994d028f",
"assets/assets/icon/c.png": "b82bfb42e8d19f98160a3232c21dbad8",
"assets/assets/icon/csharp.png": "b8b7a4e6c37dea27cfed4cccf8fcbe6f",
"assets/assets/icon/de.png": "85ca59c60c9179d7b3e9b6ab03b407c7",
"assets/assets/icon/en.png": "aac0dfefc080856931658ea9c760534e",
"assets/assets/icon/es.png": "4fdef62ff5f46fb121623767854e93ed",
"assets/assets/icon/firebase.png": "608e6b633d038ac60a8da9e973555b0f",
"assets/assets/icon/flutter.png": "7098f5a6055773de47cb30b1e8bfae6d",
"assets/assets/icon/fr.png": "a7d33e1998b1eee77ff4bf6a742be232",
"assets/assets/icon/git.png": "251081c1f41acec8112c0524f2f8b6f8",
"assets/assets/icon/github.png": "63de5479e8eb4676570c49e2579cab01",
"assets/assets/icon/gitlab.png": "5644f83aac4caac6e1af6dc30e79c43f",
"assets/assets/icon/gmail.png": "b42d13d9123bfb6242b05307872b3a56",
"assets/assets/icon/instagram.png": "ad9fd5eae8ebb678c71f64c89759561a",
"assets/assets/icon/it.png": "6f6d09685eb03af0d9a6973b574fbbde",
"assets/assets/icon/java.png": "28f5218434672d7bacb86adf798f2b57",
"assets/assets/icon/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/icon/mail.png": "3e09b2af310137f01f28615c0bdeb7da",
"assets/assets/icon/orcid.png": "1d0211168573b1ab60a3f8ba81a6e95f",
"assets/assets/icon/python.png": "de172ce4f8c7caa1826b4bef7e9050e0",
"assets/assets/icon/tr.png": "22c8f3a5e804ce244e4d6764dcbdae72",
"assets/assets/icon/youtube.png": "c0069d2eae4aca08b2c4f4dc5210016b",
"assets/assets/image/background/about-bg.png": "8fc3213ea1f1518e659ec9601de89c69",
"assets/assets/image/background/contact-bg.png": "3942c5b0020ba6cafa6c1e15b6dba91d",
"assets/assets/image/background/experience-bg.png": "92c1429268cc9702eed586e3e3f7d2e1",
"assets/assets/image/background/home-bg.png": "636a3b5c1a18a8a0eef0922aa49652d7",
"assets/assets/image/background/logo.png": "63da8fdbe161be1d5aa57ea0799ac9a4",
"assets/assets/image/background/portre.png": "d0fcb1bca19acf7311560980d6846ae4",
"assets/assets/image/background/projects-bg.png": "fc8d00697ef2133df89672405538c6f5",
"assets/assets/image/icon/logo.png": "93220ecf37ec6bcf78bc1dbd2049815a",
"assets/assets/image/icon/logo_bg.png": "32ecf503903cd411cebd48faceab19f1",
"assets/assets/image/portre.jpg": "9e57c004c5403ac43ca43e44b571456e",
"assets/assets/image/svg/logo.svg": "3dd30c6dbfef12f6f491f2b800bee46b",
"assets/assets/image/svg/logo_bg.svg": "b67bb28f5ddc41f5fa149ef060c588a1",
"assets/assets/project/frostcolor.png": "0ecdaf73b1fc5651e82eab677a96a51e",
"assets/assets/project/frostrouter.png": "e3a621e9de127eca318b73ea345d32ff",
"assets/FontManifest.json": "b6172112f4c02c41439e5c27293ee8cc",
"assets/fonts/MaterialIcons-Regular.otf": "cefdcd8b7733e5ee7e3d3b5288bd7ead",
"assets/NOTICES": "c54f81d84f82718a228f5d035834f815",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "32ecf503903cd411cebd48faceab19f1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "97412e57980a1d93f93c638e24b15e37",
"icons/Icon-192.png": "4ecd75771b6171294b6c4ed3cdf12843",
"icons/Icon-512.png": "10b7e2104d5818bdd46d168a2c45cfdf",
"icons/Icon-maskable-192.png": "1f5640085f6b3235770cf24b8112af94",
"icons/Icon-maskable-512.png": "67768b368e4199ee43c6c158a41972c8",
"index.html": "907214726fcd24b018883c823fd98243",
"/": "907214726fcd24b018883c823fd98243",
"main.dart.js": "43ce43a616b03fde5145f8c873db4602",
"manifest.json": "0de7b60d552bda2f502925a40efa403d",
"version.json": "abb07c81000cfc47da58f09719c84779"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
