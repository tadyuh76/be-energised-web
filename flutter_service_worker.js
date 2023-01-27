'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "fbc0bf85176635eb133abceab6855d5d",
"index.html": "683b8cd714401402df8196a52e407c75",
"/": "683b8cd714401402df8196a52e407c75",
"manifest.json": "2275329b64887991f094d8fc6a1d5fac",
".git/logs/HEAD": "783cc0e5281f8b6be6ab91cc803c06a6",
".git/logs/refs/remotes/origin/main": "b2d644db4796b10830c4c7c9a6304a86",
".git/logs/refs/heads/main": "4a3b8ad49d0025bb4dde58efc2030a90",
".git/index": "9b34a9af5aaaa09f840e7f02778caeaf",
".git/config": "6e874ee7bc8a4028d86661223d5b217a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/b9/19b8cd53ed5c98eaf6fac60ac0a695b672a197": "ded12996c5e7fa09d64a68452c36706e",
".git/objects/1c/aba8bb3f310babe23ee107a05df6f0d739c819": "9a2acb63a8737ffdc036ac223afb480b",
".git/objects/8e/e552502abb146f25451b2eccbcfb4f80bb5425": "66c5e448d6fd97f2ea4e11e94ecd5643",
".git/objects/2f/0e5e20a13de917c2cb13b8c5da7e132c6814c8": "beb0c9e0f6d52fb276ae6fd477f9ff96",
".git/objects/2f/7dbb954e5f434b687e0f37050c847ee97de6f3": "d0384be56afc4c998654da2b6526b105",
".git/objects/2f/b43cff7a5e72543e197c52654174a12642aa76": "c731bf0d77f68a9a6c25379858e845a1",
".git/objects/47/3d59ced161852b7ca1205296b854eff65ac330": "a96688a8fa33e947536f5fc865c98b35",
".git/objects/b0/e4e812eff56924c004297e3e57d194aaa064b3": "84eb12fd4b5dcdaf2363bc6bc0b3dd43",
".git/objects/7d/7b75cb8a73d9b7a0c7e3cbdbd7db296cca627f": "178bfcdaaf8522ab148ea24b344d79b8",
".git/objects/7d/5d8f3f55bf0fd7d09cbb41e5008e2b861884d0": "8b3be21c176ae313ab3b217a89c5bb99",
".git/objects/74/5b19325e562f24c531cb8ec902c4b616d51690": "c0c464e3919d3b089c3eb4b5648bb8c7",
".git/objects/74/66244872e9a0b8b904d698125c6fc0a99f951b": "2263e39bb2c29f1ee356145d549e429b",
".git/objects/c6/13223d695bd0c70377f03c7eb4cf1d82cef53f": "7fe772db15a1fcdd801d4758613ffa27",
".git/objects/07/ca9f1471334cbdabdc3481750947e1b017efd2": "1678052f7fbe1ba942d06dd9cf45cf86",
".git/objects/ea/14d134238c6a4356b6e5c152a8c3f859c95b12": "86a364cb2d58c4ab846f2f96cdbe6828",
".git/objects/ea/8baa8e472eb83ff371b68eafe75372c9fefad9": "08d98e9a5fb64efbb130a7c679aad71c",
".git/objects/04/ec0b9b7dc566014d29d037cd459206bf61ebe3": "cf2aab6ef3413d51421b7e2c9b600c2c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/06/5968d3c183d83a9ee01fff0ff80f24ab8d8540": "d4f230d069dcd74ead48848671b8df9b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/a5/f439555715d8e146fc45c47d817a05ec7ea967": "a2e3a017481ee174bd8a2c1f66bb9b9d",
".git/objects/42/ceee7eae54577097e09d428890f5f5d0535b38": "a5f3945c1654c93c1766eb3cea78c97b",
".git/objects/c0/976405dfd7ca4672f1b06c10524bb118deec02": "193f90f1d4c0e2cb68bf995c62f0397c",
".git/objects/9b/73f7bb7b9c387865ffed7d74597d1fe4ad851f": "940ef84dbf6e16d67871dba058a61c4d",
".git/objects/4f/6bdc2800f2a55b444c32185cf8e3ad9b0223f6": "14e9293a625d060e472cd2796c4fbc01",
".git/objects/a0/f3f7b903d4864cda1deb1acf714ff568631d93": "87da0f69db148b2fc994063cfc56726c",
".git/objects/a0/78ebb88451ae4563976899062652f0661c5d76": "43ea43b9c732ac85201397a3affcadfa",
".git/objects/99/7efd688fb08ac21ca3ff2bc97289a51d1f9c10": "17193e59417881678a36864267e11c00",
".git/objects/16/2d784f64f987e2d90c257d3436d463cb917fa0": "25c8f0b7220bef03cbbabc98df6a6f8a",
".git/objects/d5/5744275530cb10e958b937e2f01c6429a8066b": "b04a787748cfbc70f414039f7d2f1ce2",
".git/objects/d8/828b509f536bff333653b4b78b72ad2a91f057": "e0182ec2b6713c22309a458f3ed2c1c0",
".git/objects/68/12429ae1be6d4269384cde5f4a445fd31953ba": "636981504a4fcc08cd87f9212a0f6c15",
".git/objects/20/f0a3b9efc007866e5c75710f05083e34d68b91": "49e5aef4b3e1f7ad46d1f833869a407a",
".git/objects/92/18940b51650c1402bd10080f652b5492df83b9": "b6aabd03cd3b273a5a270ecb637e8488",
".git/objects/92/550fae085285ad2e1fd6e36afd6391f30f0169": "64218e65f24b8668208058e7b9b3b2ab",
".git/objects/92/39a2bc7d70f9365c9e8d3f2101a8122acb7ad9": "33a2dd5733fd162dfe9fe60abad99f9c",
".git/objects/92/bab4cfddd2302edf17999e431c1df0b45b4b41": "199b7042e7a0eb1ff478d30cfb9b5f50",
".git/objects/8b/5e112dfb2bae577f4769aa26835c5b0d85d1f3": "0154de46e2d5b951b777c65d5d50e203",
".git/objects/79/6f3f01b37440cc8595edd9e9f5eb2e1d9c07bf": "63f25ef704e969c826725cb3b00a2d1b",
".git/objects/ae/fb738aa4515bebf7907cc97f4e662704b6f1fc": "a3e72d53513b5598ea0ec3888cd75074",
".git/objects/67/f83745070baeaf8225b744f294886afee72644": "49819d4eed1bdb65a724d3719f4e9f30",
".git/objects/3f/2a586e5cd34e5650169de32620789528f6b6e5": "2f82c6cdf72997733fb059ed9eb1e3bc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/59/ccbe1bf09673dd16beda02ab22074eed2bbd4e": "a19f31930ae97c73f5d500ae138be34e",
".git/objects/25/72db32a17167f8c5fb8a7232e3ef034a62d8b0": "c994fcb9e9ac4edf5611603be7cd605d",
".git/objects/d1/3438d2baf3f53c7556fc72e844ed325ffb45f4": "9ff7d533dadd97f5a32af1d96d5cbc8b",
".git/objects/b1/489b13b76f4fa0433b1aa548389a64d239c8af": "d5ee246fdb2304f354674b870eb4ac76",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/c9/97e01a8455fa9300fe45e48dbb6e8e101cdff0": "8bfcf1dbe8a778e693f920c5572650a1",
".git/objects/76/95a6801e20814bd5c73f07520c31b703399988": "4a2746a6b725a19ace3f639d4c79317d",
".git/objects/21/7f1cce844eaf9ec0989cb9b69d10dac288d198": "b40b5707914a0a459a9f985a9e67c601",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/95/59600ab41dcc72e657a70385bc60d6f75d9d33": "4cbf78a24d41c03a1185815d7f8dbd5b",
".git/objects/d6/ae210f2b75837a2048ecf872d53d631d2951b6": "63876643c3f8e79360ee2ff0fe86809b",
".git/objects/ac/64fd813e7435d69cb459020e73d89f3b257698": "838d70e9a1a1d9f5366de4d6ad4727f0",
".git/objects/ac/f5e4b4bf48749dc1e876430c91be0784c56dae": "cb756091baa9fd14a9dd2e07dc3adace",
".git/objects/dc/39221968f15a530527ae78ad8f1a28b97884df": "e8471ac694767de9f95c80f28f761920",
".git/objects/34/6b1a8e51a540c4571525fb48a7d0ee32d688e0": "e631983a2949850c289bdfb5ee9f9005",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/6918bde56714d2d9f18ea6dcbb053a77abb64a": "de3d4725dabf63203d6983eddf559008",
".git/objects/de/2184d61efdef8bf62977e213826e735bfd28c8": "0f3fe5bf2ddc9110423207c08054ee23",
".git/objects/6a/f6e8ba7ba89952b4f8c4a56a56a14df46126ad": "945a645b8d119e4be9757438db00b88a",
".git/objects/a6/91a7ab6e24a826438ba4e5df81c9a49614fa4c": "658c535363b366ee2eb862f967628e84",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/242b2e488a7983b1cb41838d96f82756c86299": "aa9a098bf922f204b2c0384cee5569b7",
".git/objects/ee/96af30d2fb4adec90cda26fd0c45bb85e8f80c": "c9fc2531bd1226644a5cda23ef9ae1ee",
".git/objects/8d/732e21b2f1debfee3f03560634b382f9f6e9c5": "6a8c583c3267d8eea5ca2354f23b4606",
".git/objects/57/bdfd9bb2b07b7380608111f2bbd9414239ad65": "b1f80e2248bf89da6e551c21e0d15836",
".git/objects/fa/5049ab2c4ceb85a99739aca6918010fc517417": "fae95f52e9a79cfcc149b54f6b0ef0f3",
".git/objects/3c/5c463b378b282d8ba5bf969b0c78f8c0c68649": "ef322a4797d0dc90b38b2d4fd0b81702",
".git/objects/a4/3bde7955f23e1ce74250d71904f2a39e538647": "c5c320e2f0139b38addc930249f60de6",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/bd/61fbd7cc42c607a1a4b7fde667bb068e5e89c5": "a272483bc386cbb2de40b81f9af4ca65",
".git/objects/23/e4c49c13e0667e46252922672fc5a459dc143f": "a6b297fc1fa9530b09150f703d0583bc",
".git/objects/78/d21192b8d907b060cbd94c84036420c989e43f": "ccd454bfecd69443713afe4e80b31600",
".git/objects/45/899bedf519965d0ffd963afe7d27aebf1cfe46": "1f8be44992b122e51777b2b6bdcf3d34",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/87/bc10011f8e6eefd3565ef3daedf03d04c9f5a8": "b6682da78ee9c72f7da89a926e6d99e1",
".git/objects/a9/6b40ab6ac1bbae62263f428c6ac9a63ca3cd4e": "c97b9e7f4b3d33822e07d7cb86aa7522",
".git/objects/fd/6eacb3895b0e19e66fe8c2572106c64927ca33": "1db7c413d1f7a5a0f54768fdd6189be5",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/12/db08712c79c8114922f43f2bbba78b85cd44b9": "57e33a0e9eb053be07ec7d478e81e8f3",
".git/objects/12/d52f2feca87464008f04c6a4a37a94004c1c16": "6edb4d4e2f0cb9ca3c39e70bd9692a92",
".git/COMMIT_EDITMSG": "350c983f5d4be34834c3a7f826f82218",
".git/refs/remotes/origin/main": "e0d935fdb0426b93d48263f8affb883e",
".git/refs/heads/main": "e0d935fdb0426b93d48263f8affb883e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
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
"main.dart.js": "3dfcd6819eb79bd3aa33100e99ab24da",
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
