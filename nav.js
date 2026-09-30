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
    ["mcp.html",      "MCP"],
    ["kbc.html",      "KBC"]
  ];
  // Voice and KBC live on their own AdaCities slugs (audio too large for the
  // multi-file site); on AdaCities those tabs point there, elsewhere local files.
  var ADA_SLUGS = {
    "voice.html": "https://richard-kirk.adacities.com/ada-bank-voice/",
    "kbc.html":   "https://richard-kirk.adacities.com/ada-bank-kbc/"
  };
  function render() {
    document.querySelectorAll(".viewswitch").forEach(function (n) { n.remove(); });
    var cur = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!cur) cur = "index.html";
    var onAda = /adacities\.com$/i.test(location.hostname);
    var nav = document.createElement("div");
    nav.className = "viewswitch";
    PAGES.forEach(function (p) {
      var a = document.createElement("a");
      a.href = (onAda && ADA_SLUGS[p[0]]) ? ADA_SLUGS[p[0]] : p[0];
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
