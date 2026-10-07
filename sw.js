const CACHE='ob-date-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ob-date-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin||!e.request.url.startsWith(self.registration.scope))return;
 e.respondWith(fetch(e.request).then(response=>{if(response.ok){let clone=response.clone();caches.open(CACHE).then(c=>c.put(e.request,clone))}return response}).catch(()=>caches.match(e.request).then(cached=>cached||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
