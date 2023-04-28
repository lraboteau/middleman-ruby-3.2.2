/* app.js */
requirejs.config({
    baseUrl: '/assets/js/lib',
    paths: {
        app: '../app'
    },
    shim: {}
});
requirejs(['app/main']);