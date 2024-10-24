const CACHE_NAME = "meu_cache";

self.addEventListener("install", (event) => {
    console.log("Instalando o Service Worker");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(["/index.html"]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker Ativado");
});

const cachePrimeiro = async (request) => {
    const respostaDoCache = await caches.match(request);
    if (respostaDoCache) {
        return respostaDoCache;
    }
    return fetch(request);
};

self.addEventListener("fetch", (event) => {
    console.log(`Baixando ${event.request.url}`);
    event.respondWith(cachePrimeiro(event.request));
});