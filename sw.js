var nombreCache='uno';

self.addEventListener(
    'install',
    function(event){
        event.waitUntil(
            caches.open(nombreCache)
            .then(
                function(cache){
                    cache.addAll(
                        [
                            'manifest.json',
                            'index.html',
                            'sw.js',
                            'w3.css',
                            'fig.js',
                            'descarga.png',
                            './css/bootstrap.min.css'
                        ]
                    );        
                }
            )
        );    
    }
);

self.addEventListener(
    'fetch', 
    function(event) {
        event.respondWith( 
            caches.match(event.request)
            .then(
                function(respuesta){
                    if(respuesta){
                        console.log('entró');
                        return respuesta;
                    }   
                    else{
                        return fetch(event.request);
                    }  
                }
            ) 
        );
    }
); 