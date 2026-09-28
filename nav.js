/* Ada Bank demo — shared view switcher.
   Defined once here; each page just loads this script.
   Idempotent: removes any existing .viewswitch before rendering,
   so a page can never show two switchers. */
(function () {
  var PAGES = [
    ["index.html",     "Web"],
    ["custom.html",    "Front-End API"],
    ["messaging.html", "Messaging"],
    ["app.html",       "Mobile"],
    ["voice.html",     "Voice"],
    ["mcp.html",       "MCP"]
  ];
  function render() {
    document.querySelectorAll(".viewswitch").forEach(function (n) { n.remove(); });
    var cur = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!cur) cur = "index.html";
    var nav = document.createElement("div");
    nav.className = "viewswitch";
    PAGES.forEach(function (p) {
      var a = document.createElement("a");
      a.href = p[0];
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
