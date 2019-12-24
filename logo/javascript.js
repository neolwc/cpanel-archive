var injectorOptions;
SVGInjector(document.querySelectorAll('img.svg'), injectorOptions, function() {
  console.log("svg loaded");
  //$("#red *").attr("filter", "url(#glow)");
  $("#white").attr("class", "layer").attr("data-depth", "0.4");
  $("#red").attr("class", "layer").attr("data-depth", "0.2");
  $("#container").parallax();
});