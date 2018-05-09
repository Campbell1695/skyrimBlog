// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
var race = {
  //dashboard.moves makes the pop-up visible
altmer : function() {
  document.getElementById("altmer").style.visibility = "visible";

  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, argonian : function() {
  document.getElementById("argonian").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, bosmer : function() {
  document.getElementById("bosmer").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, breton : function() {
  document.getElementById("breton").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, dunmer : function() {
  document.getElementById("dunmer").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, imperial : function() {
  document.getElementById("imperial").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, khajiit : function() {
  document.getElementById("khajiit").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, nord : function() {
  document.getElementById("nord").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, orsimer : function() {
  document.getElementById("orsimer").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("redguard").style.visibility = "hidden";
}, redguard : function() {
  document.getElementById("redguard").style.visibility = "visible";

  document.getElementById("altmer").style.visibility = "hidden";
  document.getElementById("bosmer").style.visibility = "hidden";
  document.getElementById("argonian").style.visibility = "hidden";
  document.getElementById("breton").style.visibility = "hidden";
  document.getElementById("dunmer").style.visibility = "hidden";
  document.getElementById("imperial").style.visibility = "hidden";
  document.getElementById("khajiit").style.visibility = "hidden";
  document.getElementById("nord").style.visibility = "hidden";
  document.getElementById("orsimer").style.visibility = "hidden";
}
};
