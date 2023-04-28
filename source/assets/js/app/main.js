define(['jquery'], function($) {
	
	"use strict";

    // Loader
    const preloader = {
        /* Preload */
        preload: function() {
            $(document).ready(function() {
                if ($('#preloader').length) {
                    $('#preloader')
                        .delay(100)
                        .fadeOut('slow', function() {
                            $(this).remove();
                        });
                }
            });
        },

        init: function() {
            this.preload();
        }
    };

    preloader.init();
});