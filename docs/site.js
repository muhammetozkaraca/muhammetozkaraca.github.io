// Toggle a paper's abstract from its [abstract] tag.
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".tag-abstract");
  if (!btn) return;
  var body = btn.closest("li").querySelector(".abstract-body");
  var open = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!open));
  body.hidden = open;
});
