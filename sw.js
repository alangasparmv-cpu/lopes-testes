const CACHE_NAME = "lopes-mecanica-v5";

const APP_SHELL = [
"./",
"./index.html",
"./styles.css",
"./app.js",
"./manifest.json",
"./logo.png",
"./icon-192.png",
"./icon-512.png"
];

self.addEventListener("install",(e)=>{
e.waitUntil(
caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL))
);
self.skipWaiting();
});

self.addEventListener("activate",(e)=>{
e.waitUntil(
caches.keys().then(keys=>
Promise.all(keys.map(k=>{
if(k!==CACHE_NAME) return caches.delete(k);
}))
)
);
self.clients.claim();
});

self.addEventListener("fetch",(event)=>{

if(event.request.method!=="GET") return;

event.respondWith(
caches.match(event.request).then(res=>{

if(res) return res;

return fetch(event.request).then(network=>{

const clone = network.clone();

caches.open(CACHE_NAME).then(cache=>{
cache.put(event.request,clone);
});

return network;

}).catch(()=>caches.match("./index.html"));

})
);

});
