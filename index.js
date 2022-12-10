const key1 = document.querySelector(".key1");
const key2 = document.querySelector(".key2");
const key3 = document.querySelector(".key3");
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class="key key1">
 ${e.key === " " ? "space" : e.key}
 <small>event.key</small>
</div>
<div class="key key2">
 ${e.keyCode}
 <small>event.Keycode</small>
</div>
<div class="key key3">
 ${e.code}
 <small>event.code</small>
</div>
<div style="cursor: pointer" class="key press">
 Press any key to get the keycode
</div>`;
});
