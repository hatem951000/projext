var string =
  "مرحبا في مشروع اللوبي , نتمنى ان ينال اعجابك . تم انشائه بغاية  تجربة انشاء موقع لمادة الانترنت";
var str = string.split("");
var el = document.getElementById("str");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 120);
})();