require('./css/app.css');
require('./css/bigfoot-default.css');
require('./js/transition.js');
require('./js/zoom.js');
require('./js/jquery.fitvids.js');
require('./js/bigfoot.js');

import $ from 'jquery';

$(function() {
  $.bigfoot();
  $('a[href^="http"]').not('a[href^="http://chibicode.com"]').attr('target','_blank');
  $(".js-post-content").fitVids();
});
