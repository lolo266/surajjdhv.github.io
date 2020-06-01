/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0fd6820d8caed870305e02cc24f18cb4"
  },
  {
    "url": "about/index.html",
    "revision": "e03c99dfda865718177e078796760778"
  },
  {
    "url": "articles/hello-world!/index.html",
    "revision": "47f6800b1412a708bbfff63286b96c35"
  },
  {
    "url": "articles/index.html",
    "revision": "45d81efdfe1dbd79e8c0fec6f76b14da"
  },
  {
    "url": "articles/tags/all/index.html",
    "revision": "46306039f7a823eecc5409623698b039"
  },
  {
    "url": "articles/tags/index.html",
    "revision": "2b7e5c457cec75ea2f46b561b58a19fd"
  },
  {
    "url": "articles/tags/posts/index.html",
    "revision": "4bf00b05e7afe6b838179a217ac6e0b0"
  },
  {
    "url": "articles/tags/random/index.html",
    "revision": "26b00ae94a4301d0ef77874471771307"
  },
  {
    "url": "articles/tags/tags/index.html",
    "revision": "bdd5e11385e8214020d531bdd58bee72"
  },
  {
    "url": "assets/fonts/FiraCode-Medium.woff",
    "revision": "4dee11c0d1acf3da2be1957cb5299315"
  },
  {
    "url": "assets/fonts/FiraCode-Medium.woff2",
    "revision": "d293dc7c066d907f308b9924a60f1700"
  },
  {
    "url": "assets/img/favicon/16.png",
    "revision": "f7e485a331229134a4c8e0fbb927d738"
  },
  {
    "url": "assets/img/favicon/192.png",
    "revision": "413d8776c4549b419f6201aafb845588"
  },
  {
    "url": "assets/img/favicon/32.png",
    "revision": "ff62fb9c5250832ca7a5010db81620f7"
  },
  {
    "url": "assets/img/favicon/512.png",
    "revision": "58dafc11e718ab0e29004231506dc410"
  },
  {
    "url": "assets/img/favicon/96.png",
    "revision": "b17423ea5a843a8bdefb4ba2849e9e02"
  },
  {
    "url": "assets/img/favicon/icon.ico",
    "revision": "158d8cd70c5a858d31e5209f973a2458"
  },
  {
    "url": "assets/img/favicon/scalable.svg",
    "revision": "967decd121017a38ddc9461c08a79f64"
  },
  {
    "url": "assets/img/me.png",
    "revision": "212af4e0bfb8a3deba94525984c6b4a8"
  },
  {
    "url": "assets/js/polyfills/ScrollBehaviour.js",
    "revision": "ddb0e4043fc266c20c7f945b27129b13"
  },
  {
    "url": "assets/js/surajjdhv.js",
    "revision": "4e003b9cbf9e5dc72cd9f2e731b8e76b"
  },
  {
    "url": "assets/js/surajjdhv.mjs",
    "revision": "970fab79f6ddc5a46ac127a02c1676bd"
  },
  {
    "url": "index.html",
    "revision": "65112410cba7f338899b7c227e12dd52"
  },
  {
    "url": "webmanifest.json",
    "revision": "8c6589bf4ac2d1de84bd7f624eac9cff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/github.com\/.*.png.*/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
