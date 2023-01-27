'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "fbc0bf85176635eb133abceab6855d5d",
"index.html": "1c8055ef5f38894201ba2c231a81ccce",
"/": "1c8055ef5f38894201ba2c231a81ccce",
"manifest.json": "2275329b64887991f094d8fc6a1d5fac",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-maskable-512.png": "452d7f85a495c31dadd4f0389f9a66d5",
"icons/Icon-maskable-192.png": "14cd095d4b45376c662b08078853883a",
"icons/Icon-192.png": "14cd095d4b45376c662b08078853883a",
"icons/Icon-512.png": "452d7f85a495c31dadd4f0389f9a66d5",
"version.json": "d09c08839fb4c51e89eb39d4c8a45f15",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"main.dart.js": "251814ed9d515a41af4641591beead41",
"assets/AssetManifest.json": "975f67eb94d27036e57f655ad9c4e6ba",
"assets/shaders/ink_sparkle.frag": "9218f435d48f471cf8c9468e8e64ceb6",
"assets/FontManifest.json": "3333722faca7a9a6e694318cc827aa6c",
"assets/NOTICES": "77047dca754e0142ae9ae1676cccdf0a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/avatar.jpg": "99fa63722800809486dd754f1d33a066",
"assets/assets/activity_icons/guitar.png": "dd1d41471d49c7afe460e5322d29e232",
"assets/assets/activity_icons/badminton.png": "759ece945ff66f373e6318dbe5a5cb42",
"assets/assets/activity_icons/cleats.png": "4ba066b06e7f85d2a6bb040e52fd7132",
"assets/assets/activity_icons/pc.png": "2f023f0058fe7ba2639849f4e01fadee",
"assets/assets/activity_icons/cycling.png": "df770919c6bbdb4e6cdd9b35c4bb314b",
"assets/assets/activity_icons/dumbbell.png": "b01c2d98603b20c78ebfe1fe37490a2b",
"assets/assets/activity_icons/shopping-cart.png": "2bfb752106320b2ddd94901fc417e9b2",
"assets/assets/activity_icons/basketball.png": "e2e1eec575bf28579c2163255850c20c",
"assets/assets/activity_icons/tennis.png": "3c81cdaeb4613af62b4b509768d6f06a",
"assets/assets/activity_icons/programming.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/activity_icons/keyboard.png": "59de5756c44bf6c4baf6878de90718be",
"assets/assets/activity_icons/chess.png": "7373dcd486265ea39cc4c2043b6e40ea",
"assets/assets/activity_icons/table-tennis.png": "916a41ff60cd02009ced2734a6c39f93",
"assets/assets/activity_icons/martial-arts.png": "9c9b71dfb89a443dfabedf1a501a78be",
"assets/assets/activity_icons/clapperboard.png": "e15f5fb8133af8df9766064a5dec2f68",
"assets/assets/activity_icons/hockey.png": "345105671bee8c9a4fdca7d7981b77d6",
"assets/assets/activity_icons/chat-box.png": "bf0fe7c55afcff8599a4678d6a52af21",
"assets/assets/activity_icons/football.png": "2d8999a9a470499208d83220fc2770ed",
"assets/assets/activity_icons/hot-coffee.png": "1203196db5771ad2be94661d26c38db5",
"assets/assets/activity_icons/suitcase.png": "900935df28274180a56754497168f459",
"assets/assets/activity_icons/microphone.png": "289a962cce5e121b623e663971594004",
"assets/assets/icons/facebook.svg": "d8d0749cb51b779bebc0b93dd1166f27",
"assets/assets/icons/pointer.png": "80b39272bcc9351853879b2c6bee3519",
"assets/assets/icons/chart.svg": "1fdf99961410b38512b5dd087984045a",
"assets/assets/icons/energy.svg": "3852cbed766f8e11a23af141c0c7902f",
"assets/assets/icons/more.svg": "4cf2989d986af3f1c882880daa250329",
"assets/assets/icons/holder.svg": "1b91c88c147758c160528d23fd5e9168",
"assets/assets/icons/friends.png": "3211f276342c5755d0d6c9dd5a490f49",
"assets/assets/icons/settings.svg": "a3d7096f3fb332e4e63416c84bb24167",
"assets/assets/icons/battery.png": "725f52152d7d134213389d946bc8f70d",
"assets/assets/icons/back.svg": "868cd5aa40c24ea236b89023e2292507",
"assets/assets/background/home.png": "3bab19cca3f9b571552f2806a4a17d50",
"assets/assets/background/statistics.png": "15d8b2ee454d69759806cdca446628bf",
"assets/assets/background/friends.png": "b59f5e46dfcd00ced8ce557dcd77b414",
"assets/assets/background/battery.png": "27131a5e2a55e1cc210dfff2e14907b0",
"assets/assets/fonts/Poppins-Bold.ttf": "53f5bf25fd339d41aded7b8a6181196e",
"assets/assets/fonts/Poppins-Medium.ttf": "b1f91231be5d2704de64eb59f32c9213"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
