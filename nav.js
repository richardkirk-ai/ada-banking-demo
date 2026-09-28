/* Ada Bank demo — shared view switcher.
   Defined once here; each page just loads this script.
   Idempotent: removes any existing .viewswitch before rendering,
   so a page can never show two switchers. */
(function () {
  var PAGES = [
    ["index.html",    "Web"],
    ["channels.html", "Channels"],
    ["app.html",      "Mobile"],
    ["voice.html",    "Voice"],
    ["mcp.html",      "MCP"]
  ];
  // Voice lives on its own AdaCities slug (audio too large for the multi-file site);
  // on AdaCities the Voice tab points there, elsewhere it's the local voice.html.
  var VOICE_ADACITIES = "https://richard-kirk.adacities.com/ada-bank-voice/";
  function render() {
    document.querySelectorAll(".viewswitch").forEach(function (n) { n.remove(); });
    var cur = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!cur) cur = "index.html";
    var onAda = /adacities\.com$/i.test(location.hostname);
    var nav = document.createElement("div");
    nav.className = "viewswitch";
    PAGES.forEach(function (p) {
      var a = document.createElement("a");
      a.href = (p[0] === "voice.html" && onAda) ? VOICE_ADACITIES : p[0];
      a.textContent = p[1];
      if (p[0].toLowerCase() === cur) a.className = "on";
      nav.appendChild(a);
    });
    document.body.appendChild(nav);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
