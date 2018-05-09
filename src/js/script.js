var closeMenu = '\u2630';
var expandedMenu = '\u0FBE';

$(document).ready(function(){
  addMenuButton();

  $('#menuButton a').click(function(){
  	changeBetweneResponsiveNavbar();
  });
});

function addMenuButton(){
  $(document.createElement('li'))
					.attr({
						   id: 'menuButton',
						class: 'myMenuButton'})
					.appendTo('#navbar ul');
  var menuButton = document.getElementById('menuButton');
  var text = document.createTextNode(closeMenu);
  var a = document.createElement('a');
		
  a.href = 'javascript:void(0)'
  a.appendChild(text);
  menuButton.appendChild(a);
};

function changeBetweneResponsiveNavbar(){
  var navbar = document.getElementById('navbar');
  var menuButton = document.getElementById('menuButton');

  if( navbar.className == 'sticky-navbar') {
    navbar.className += ' responsive';
    menuButton.children[0].innerHTML = expandedMenu;
  } else {
  	navbar.className = 'sticky-navbar';
  	menuButton.children[0].innerHTML = closeMenu;
  }
}