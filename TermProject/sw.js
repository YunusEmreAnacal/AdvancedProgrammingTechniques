self.addEventListener("install",e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["https://yunusemreanacal.github.io/AdvancedProgrammingTechniques/TermProject/window.html","https://yunusemreanacal.github.io/AdvancedProgrammingTechniques/TermProject/src/app.css","https://yunusemreanacal.github.io/AdvancedProgrammingTechniques/TermProject/images/köstebek.png"]);
        })
    );
});

self.addEventListener("fetch", e=> {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})
