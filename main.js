// membuat tombol delete dan menambahkan ke tiap list
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delet";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//klik pada tombol delete akan menyembunyikan list
var delet = document.getElementsByClassName("delet");
var i;
for (i = 0; i < delet.length; i++) {
  delet[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
  }
}

//menambahkan class 'checked' ketika list di-klik
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
  }
}, false);

//menambah list baru ketika klik tombol 'add'
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input-list").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
      alert("List can't be empty! 🤭");
  } else {
      document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input-list").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "delet";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < delet.length; i++) {
      delet[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      }
  }
}