const CACHE_NAME = "meu_cache";

self.addEventListener("fetch", (event) => {
    console.log(`Baixando ${event.request.url}`);
    event.respondWith(cachePrimeiro(event.request));
  });

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
  
    const respostaRede = await fetch(request);
    atualizaCache(request, respostaRede.clone());
  
    return respostaRede;
  };

  self.addEventListener("fetch", (event) => {
    console.log(`Baixando ${event.request.url}`);
    event.respondWith(redePrimeiro(event.request));
  });
  
  
  
  const redePrimeiro = async (request) => {
    const respostaDaRede = await fetch(request);
  
    if (respostaDaRede) {
      atualizaCache(request, respostaDaRede.clone());
      return respostaDaRede;
    }
  
    const respostaCache = await caches.match(request);
  
    return respostaCache;
  };

const atualizaCache = async (request, response) => {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
  };