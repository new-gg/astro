importScripts('../epoxy/index.js');
importScripts('backendsystem/backendsystem/uv.bundle.js');
importScripts('backendsystem/backendsystem/uv.config.js');
importScripts(__uv$config.sw || 'backendsystem/backendsystem/uv.sw.js');

const uv = new UVServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(
        (async ()=>{
            if(uv.route(event)) {
                return await uv.fetch(event);
            }
            return await fetch(event.request);
        })()
    );
});