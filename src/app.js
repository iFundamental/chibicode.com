import './css/app.css'
import './css/bigfoot-default.css'
import './js/transition.js'
import './js/zoom.js'
import './css/zoom.css'
import './js/jquery.fitvids.js'
import './js/bigfoot.js'
import './js/gist-embed.js'
import $ from 'jquery'
window.$ = $

$(function() {
  $.bigfoot()
  $('a[href^="http"]').attr('target','_blank')
  $(".js-post-content").fitVids({ customSelector: "iframe[src*='slideshare.net']" })
  $(".js-sv-history-img").click(function () {
    var scrollTop = $(window).scrollTop()
    $(window).scrollTop(scrollTop + $(this).parent().outerHeight(true))
  })
})
