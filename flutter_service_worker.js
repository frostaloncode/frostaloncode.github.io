'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "70e8971f436764884c2dd4a9c29f1338",
".git/config": "964702b60c9f1386eb182aa582a22efd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "158166b86f343b8c2ebdbed7ad6153fd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec654419d7a91c9d0130e273be1da51f",
".git/logs/refs/heads/main": "ec654419d7a91c9d0130e273be1da51f",
".git/logs/refs/remotes/origin/main": "8db06c5149d0658d9bea1c5251de235b",
".git/objects/01/b3f647ac3e20175aff7ca1ca00502d9756c6e3": "6974a8277dfea759b962391a517c399e",
".git/objects/01/f1962092e202fda858022b3908c5a2e5e35004": "cae1b34a55edec4f6661910bca521063",
".git/objects/03/6a8408d26180d36fa02aa689babc52abf9e0a5": "f128f7a96ca5d831fe3034c0e2ff39b0",
".git/objects/06/829e48966b1cb8b52dd81c4382d8e5d4fd5862": "7ba842689f85022e54c75ecd727358b3",
".git/objects/09/36602193e7b695c38c806de08c377bc68c5adc": "2c22f01a90f8286dc8a90e4a071e9197",
".git/objects/0e/fd954151547e6f6cbb101de8689385b23ec536": "c9e60c24fa4b9209e05ba7c1e90e0c4b",
".git/objects/19/3197e8a032674b67e74da2ed8a181d9b391036": "f6f64d129e7ba1440a3285c450dbd3bb",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/144618fa2629d2f96db131f787a1e59f74a9d0": "a58b1654f35a35c3ad143e5763d3b3f5",
".git/objects/31/255145e2c2338c682ca7c86f561121fd6a035b": "06d3f694b2dc0aff882f44fc95487c69",
".git/objects/36/0098f981f7813c94e4ef02f378c20665346208": "b5b9dde1f15b8e6bb0aad99977db4356",
".git/objects/3c/f74a25184815541f316f02558bebac0cbbc3df": "8dc49eef35f3186c4ad6c58fb7d791e1",
".git/objects/40/aebb431452d58c151092c74856940b295b19f0": "47e6e0182979a07e98c29e2205fa42ac",
".git/objects/41/8a6811423f55801353d50f94f012489d3a9d59": "ec3b1712b7db18809c9aeb4658c7acd8",
".git/objects/41/faa10990a0d01eb00058d5bd61b2c9728542c0": "045ef59a2b45459532ee35c612187ec3",
".git/objects/42/81fc62564ce6b86015e9806bafc6a3d61ba06b": "85587a867c1e7736a3ded2ca919c025e",
".git/objects/49/2cfef81ea16ecceb4429f52cb77a846c58b9fa": "0fed353f9724939cc24fe3c62effce34",
".git/objects/4b/db8d9968041983fdfab24e9a69cedfc9f18806": "d18108c081ca757cf3be777e02fb5c72",
".git/objects/4c/2f08178623adec86d0b28e9962eae9f2ab1334": "ab9944dd2adcc88f185b625b99bd356f",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/8d4f0287fb153e38b30f22f9112ab802b36e5b": "1a63c2fe6ecc556c07213d66254eb725",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/a6ef53c00c25a81e7e86b6200e0028309e06d4": "1917420e9e1aa36f019cbebf002d7e00",
".git/objects/56/62c9348e85f6e509929da8d35a8beccaafc67e": "7185c8f7957df051a9b9762a2f0030d6",
".git/objects/58/54dbb1ffc38e4dd2ddab13e8507b5e99ae9923": "9b5fe99a942415fb0a7baec6ce0ce6c6",
".git/objects/5f/cfe5f93ff387defe833e45cdf2f3dc4e7aca40": "eefe8dbbb171eaea734588172a166954",
".git/objects/61/83b27bdd73b180c57e1f25074b04335e7254e8": "00fc890caff63bf1a6e26b5cfd51d8af",
".git/objects/61/ea2d5ab929ab491ddf6a71bf0d2d12677a9c8a": "d87c6ca3ee95e7703e1fc43365de7ae5",
".git/objects/62/5d711b1d02f54f6e0d8df8dc1f76289e292d74": "f2b80b3ab807af692925ccdbc34affc2",
".git/objects/62/80c21b05224c78649c3f8b00da777c7cf765b8": "096209341f896ca0a1bc7781f1d75000",
".git/objects/66/48e82c00a5750d9dbfad555c3220d785499063": "c7865b955ad6e83da9a3fc1e7d7985b5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/e0a72711bbdbcf6ddd796342344b5f87e44af1": "c802f0dfce886a876ecf05b76bf6c1bf",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/74b46831157bafe5942c4cc4f035e2e32e6d8c": "c77b73abcc2c2acf27f86199b836ab9a",
".git/objects/73/afba7b6c6669d38248540ac21274cdc24e1f5d": "e6c272dc8f077e2a1f6462562290ef40",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/e47646552136b6667a16a0acc7037c1802cb34": "b10b8a99d3c89d120b7148553d2c953d",
".git/objects/74/38e48f0202576696b19c29fe3078ac5a8816be": "6bbad32eb814dfdc221bcdce84b29fdf",
".git/objects/75/58b170beb6c78bd210c18b6123decdfa64d280": "3122a3fcd437ec606475dabfe61cd9f9",
".git/objects/75/b7bcf6c961ea2bc25dad6caf1ad8312cc4766f": "142c6891a7dcb660bc991ba8f6001714",
".git/objects/78/a6fb1126cf41b4025c95723cf864a854c3ddbc": "6f2e8565513ed45a17a651743f263c11",
".git/objects/80/c6094e5e9601001c26f853ab5e68f49d53d846": "ccc22a49e97fc262eaf24426be1bbd18",
".git/objects/8b/e3aa9a33b93d9c2d2f5b600987f3c86f0a5b6d": "4a4d9048632acb5127f02d0f29bb1cf3",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/ecb59c631ad04a1e7cafd2d4825770a4ddfd15": "c804f0e75165d884c7945e700721ff4f",
".git/objects/91/45b3b1e2b4693d0cd3b217f71392097d72bb08": "88bd129cf08b609f6516ba2f1625252c",
".git/objects/92/eab3aee9bfb514f6b07745fea803794dfd719a": "ced7ca2d2cc491e584e889162581ff59",
".git/objects/95/63b0a9db3997e9c7dc06a094f20d19c28583b8": "27d3aa12639cbe84e4c775355fd37d02",
".git/objects/9a/92950d38ef918df4173dba20a41a7588be0d58": "789eb0eece5b3e946431d43814aa89c3",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a1/08fa3d2f2c5c465366518ea4a366a79681dbe1": "7c3d698468225667dd6f20746897bb0f",
".git/objects/a3/e208da761117ba3fd0694bb00810933f3f9d9f": "8e684f5b8bcfff0ad80d013a59e3e916",
".git/objects/a4/d70a9db1f3f69ba2cd2dd9834d149b8b518c8c": "05f356668201795ad22b34c8d577f1b8",
".git/objects/a7/ab41933913e2036ccfa8d4bf139722fb19494c": "8d4d408f8060f137bad59a8f24dd9f49",
".git/objects/ab/fd2ae0716c54957e1af8857f433ae32ad22843": "f85743b5c5f0104a9577021b97d142ac",
".git/objects/ac/28a190652ddbfcff811ffe6b2446b71e2e47d4": "6201ced6cc0b79bee8ab57e7ce62da02",
".git/objects/ac/ea8246b576e2f6d5016bb3ca1b9ed3f165ce79": "845ecbb705b79b37a34f9555810a93f7",
".git/objects/af/175f99b06ccaf6ac713077159ee89fa69cf3ef": "d4f750f2d4e29bb847b1233327daa8fa",
".git/objects/b0/48e580870ee32aede71b4e32292ef3f3a2f1bb": "03f19b9a2abba47fef4a91fdbb4c231d",
".git/objects/b2/f83dbb5e2b99f646887ae3e74fad79faa7de3f": "5128001f0af1c3feee7a7b005cc13fb6",
".git/objects/b5/691b782e7256147f7f2090f140c97a13cab8a1": "f2f0c0859ff4970c48613a3c7ac56e67",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/9381c34b1433a1dea641a38cb024f540b88b39": "beffa902ac21edc024972ef50e5a00ad",
".git/objects/ba/3886cb540957e5fb2e8ba711dc3e15e919674d": "b59e439d35cbf75a8240e6449925cb49",
".git/objects/c2/45a6acbda8b4d98e6d604cdf6d0d01613c2fc1": "7e3dc30887da1fc54cb0673d8a2c3412",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/2a40b920d20fe68ba7ef2b94340f91522a5bc9": "4282ac124a3af93d42341ddcdab1de4e",
".git/objects/d0/be68753c70fd191e85ff310392e3c79705bf5e": "067125c348778ed3c3e2824d85026ff6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/6c76646195931ce8b480e8dbc25cb75b3cd4c5": "2aa487225b13b32266df2bf0c79df74d",
".git/objects/d6/acacd0ae7d23a86fdef72b9dd34df6f684e94b": "dc148083cd20bedf8fae774507b3ebfd",
".git/objects/d6/cbae0b35245de00b5b3e0b0fd65eb547b512be": "c8dd5170fd9da922d94be5e53e1f0a37",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/1f14ed40c23e9de17ee5c2be72f4611da34726": "f75f2d36edbd303f1edf94e27dc1d613",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/7c1295513b187ab82f48e7d43df25d22cdbf9e": "c7be6c3ba79a5b4a9a14ba9f61d98ed7",
".git/objects/e9/272f65a3dd270451e23cc4c05f4bc67d36bed8": "e9c9645fd344bf2339af0e753c6c5664",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/f4387d72dd60b9a2abf8d504df40901c2d8828": "be4510caf8e17b0f9cd2e6d5b39e15bf",
".git/objects/ee/b64bd076ab90a503f05671036a1fcc7b568d7b": "2a4ff4059184f82520fa0c52ab707902",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/6cc7ce0a8ffc1e3089241fbc23dee210c1802d": "1c62d9e181c35f7db7f8ed7e838598b5",
".git/objects/f8/6f005fa1d32817064f93c599201864519c0d8a": "1a1a7ff50c2801d8606a7728b84eb1cb",
".git/objects/f9/5469a12939981858ac6f098f1432bf7bd91822": "3c8507420cfec4a307b4d748dd6711e8",
".git/objects/fb/cf3a9cad72917c03469316297b9b5099c7167f": "0469c20502ba8e8a5f7f56b55e44a65a",
".git/objects/ff/5e49fb74820303676c8c7b969ab003236161f1": "a698b01cbd41268cb7a4ad7bcd07b342",
".git/refs/heads/main": "cb384482103f211054c503c5a4000887",
".git/refs/remotes/origin/main": "cb384482103f211054c503c5a4000887",
"assets/AssetManifest.bin": "aa6ff8b47c8d2f6ab511926ba9c75482",
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
"flutter_bootstrap.js": "6b670912773d0e6523b3aed62ffa196b",
"icons/Icon-192.png": "4ecd75771b6171294b6c4ed3cdf12843",
"icons/Icon-512.png": "10b7e2104d5818bdd46d168a2c45cfdf",
"icons/Icon-maskable-192.png": "1f5640085f6b3235770cf24b8112af94",
"icons/Icon-maskable-512.png": "67768b368e4199ee43c6c158a41972c8",
"index.html": "907214726fcd24b018883c823fd98243",
"/": "907214726fcd24b018883c823fd98243",
"main.dart.js": "16706d89a2b33bed44f960d5f9295e82",
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
