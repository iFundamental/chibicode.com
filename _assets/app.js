require('./css/app.css');
require('./js/transition.js');
require('./js/zoom.js');
require('./js/jquery.fitvids.js');

import $ from 'jquery';
import FastClick from 'fastclick';

$(function() {
  FastClick.attach(document.body);
  $('a[href^="http"]').attr('target','_blank');
  $(".js-post-content").fitVids();
});
