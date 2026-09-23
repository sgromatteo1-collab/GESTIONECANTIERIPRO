const CACHE="cantiere-pro-v3-8";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png",
"https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js",
"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs",
"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs"];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener("activate", event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if(event.request.method!=="GET") return;
  event.respondWith((async()=>{
    const url=new URL(event.request.url);
    if(url.origin===self.location.origin && (url.pathname.endsWith("/index.html") || url.pathname.endsWith("/"))){
      try {
        const fresh=await fetch(event.request,{cache:"no-store"});
        const cache=await caches.open(CACHE);
        cache.put(event.request,fresh.clone());
        return fresh;
      } catch(e) {
        return (await caches.match(event.request)) || Response.error();
      }
    }
    const cached=await caches.match(event.request);
    if(cached) return cached;
    try {
      const response=await fetch(event.request);
      const cache=await caches.open(CACHE);
      cache.put(event.request,response.clone()).catch(()=>{});
      return response;
    } catch(e) { return cached || Response.error(); }
  })());
});
