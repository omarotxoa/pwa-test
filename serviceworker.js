self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("ct-assets").then(cache => {
            return cache.addAll([
                "./", 
                "styles.css", 
                "script.js", 
                "./img/logo.png"
            ]);
        })
    ); 
 });

 self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
 });