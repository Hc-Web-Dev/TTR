/**
 * @package Helix3 Framework
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2021 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */

//For react template
jQuery(function ($) {
    'use strict';
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {
                var $nodes = $(newNodes);

                $nodes.each(function () {
                    var $node = $(this);
                    if($('#finatic-carousel').length>0){
                        $node.find('#finatic-carousel').each(function () {
                            $(this).owlCarousel({
                                margin: 30,
                                loop: true,
                                video: true,
                                autoplay: false,
                                dots: false,
                                nav: false,
                                autoplaySpeed: 800,
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    520: {
                                        items: 2
                                    },
                                    768: {
                                        items: 3
                                    },
                                    1000: {
                                        items: 4
                                    },
                                    1310: {
                                        items: 5
                                    }
                                },
                                onInitialized: function () {
                                    $('.owl-item.active').last().addClass('last-owl-active-item');
                                },
                                onTranslated: function () {
                                    $(event.target).find('.last-owl-active-item').removeClass('last-owl-active-item');
                                    $(event.target).find('.active').last().addClass('last-owl-active-item');
                                }
                            });
                        });
                    }
                    if($('#finatic-services-carousel').length>0){
                        $node.find('#finatic-services-carousel').each(function () {
                            $(this).owlCarousel({
                                margin: 30,
                                loop: true,
                                video: true,
                                autoplay: false,
                                dots: false,
                                nav: true,
                                navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
                                autoplaySpeed: 800,
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    768: {
                                        items: 2
                                    },
                                    999: {
                                        items: 3
                                    },
                                    1800: {
                                        items: 4
                                    }
                                },
                                onInitialized: function () {
                                    $('.owl-item.active').last().addClass('last-owl-active-item');
                                },
                                onTranslated: function () {
                                    $(event.target).find('.last-owl-active-item').removeClass('last-owl-active-item');
                                    $(event.target).find('.active').last().addClass('last-owl-active-item');
                                }
                            });
                        });
                    }
                });
            }
        });
    });

    var config = {
        childList: true,
        subtree: true
    };
    // Pass in the target node, as well as the observer options
    observer.observe(document.body, config);
});

