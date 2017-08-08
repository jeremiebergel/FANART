//MENU BURGER

var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');

sidebarBody.innerHTML = content.innerHTML;

var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass ='hamburger-activated';

button.addEventListener('click', function(e) {
   e.preventDefault();
   this.parentNode.classList.add(activatedClass);
});

overlay.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.remove(activatedClass);
});
var nav = document.querySelector('#hamburger-sidebar');

button.addEventListener('click', function(){
    nav.classList.toggle('closed');
});



//LISTE ARTISTS
var links = document.querySelectorAll('.list-artist a');

for (var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(){
        var active_link = document.querySelector('.list-artist .active');
        var active_div = document.querySelector('.profil-content .active');

        active_link.classList.remove('active');
        active_div.classList.remove('active');

        this.classList.add('active');

        var div_id = this.getAttribute('href');
        var div = document.querySelector(div_id);
        div.classList.add('active');
    });
}

