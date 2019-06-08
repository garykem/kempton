//code for the toggle button

let navBar;     
    navBar = document.getElementsByTagName('nav');

let toggle = document.getElementById("toggle");
toggle.addEventListener('click', function(){ 
      if(navBar[0].className == ''){
        navBar[0].className = ' show ';
      }else{
            navBar[0].className = '';
      }
});