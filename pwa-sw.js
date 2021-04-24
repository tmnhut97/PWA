'use strict';
(function () {
    self.addEventListener('fetch', function (event) {
        var request = event.request;
        event.respondWith(fetch(request));
    });
})();
