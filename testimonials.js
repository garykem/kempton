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

//     var dots,slideIndex,slides,captionText,titleText;

// function initgallery(){
//       slideIndex=0;
//       slides = document.getElementsByClassName('imageHolder');
//      captionText=document.querySelector('.captionHolder  .captionText');
//      captionText.innerHTML=slides[slideIndex].querySelector('.captionText').innerText;

//      titleText=document.querySelector('.titleHolder  .titleText');
//      titleText.innerHTML=slides[slideIndex].querySelector('.titleText').innerText;


//       dots = document.getElementsByClassName('dots');
//       slides[slideIndex].style.opacity = 1; 
//       dots[slideIndex].className +=' active ';    
    
//     }
//   initgallery();
//   function plusSlides(n){
// moveSlide(slideIndex+n);
//   }
  
//    function moveSlide(n){
//     var i,current,next;
//     var moveSlideAnimClass={
//       forCurrent:'',
//       forNext:'',
//     } 
//   var slideTextAnimClass;
//     var slideTitleAnimClass;

//     if(n>slideIndex){
//       if(n >= slides.length){n = 0};
//        moveSlideAnimClass.forCurrent ='moveLeftCurrentSlide';
//        moveSlideAnimClass.forNext ='moveLeftNextSlide';
//        slideTextAnimClass ='slideTextFromTop';
//        slideTitleAnimClass= 'slideTitleFromTop';

//     }else if(n<slideIndex){
//       if(n<0){n=slides.length-1}
//       moveSlideAnimClass.forCurrent ='moveRightCurrentSlide';
//        moveSlideAnimClass.forNext ='moveRightNextSlide';
//        slideTextAnimClass='slideTextFromTop';
//        slideTitleAnimClass= 'slideTitleFromTop';
//     }
//           if(n != slideIndex){
//                   next=slides[n];
//                     current = slides[slideIndex];
//                      for(var i = 0; i<slides.length; i++){
//                       slides[i].className='imageHolder';
//                       slides[i].style.opacity = 0;
//                       dots[i].className = dots[i].className.replace(' active ','');
                      
//                      }
//               current.classList.add(moveSlideAnimClass.forCurrent);
//               next.classList.add(moveSlideAnimClass.forNext);
//               dots[n].className +=' active ';             
//               slideIndex = n ;
//           }
//           captionText.style.display='none';
//           captionText.className ='captionText ' + ' slideTextFromTop ';
//           captionText.innerText = slides[n].querySelector('.captionText').innerText;
//           captionText.style.display ='block';



//           titleText.style.display='none';
//           titleText.className ='titleText ' + ' slideTitleFromTop ';
//           titleText.innerText = slides[n].querySelector('.titleText').innerText;
//           titleText.style.display ='block';





//   }
 
//  var timer= null;
//    function setTimer(){
//       timer=setInterval(function(){
//          plusSlides(1);

//        },5000)
//    }
 
// setTimer();


// function playDivs(){
//   if(timer==null){
//    setTimer();   
 
//   }
// }

// function pauseDivs(){
// if (timer!=null){
//    clearInterval(timer);
//    timer=null; 
//   }
// }
//      function toggle(){ 
//       if(navBar[0].className == ''){
//         navBar[0].className = ' show ';
//       }else{
//             navBar[0].className = '';
//       }
//     } 

// let slideIndex = 0;
//   //'n' is passed in from 'left' or 'right' buttons.
// function plusDivs(n){
// 	showDivs(slideIndex += n); //slideIndex is incremented shorthand, and is by direction.
// }
// function currentDiv(n){ //'n' is from 'dots' clicked - location (0,1,2) according to index (0 = 1, 1=2)
// 	showDivs(slideIndex = n)  
// }
// function showDivs(n){
// 	let i;
// 	let x = document.getElementsByClassName('slide');
// 	let dots = document.getElementsByClassName('dots');
//  	if(n >= x.length){slideIndex = 0};
//  	if(n < 0){slideIndex = x.length-1};
//     for (i = 0; i < x.length ; i++) {
//    	x[i].style.display='none';  //this affects the left/right arrows
//        }
//     for (i = 0; i < dots.length; i++) {
//    	dots[i].className = dots[i].className.replace(' active ','');
//     }
//         x[slideIndex].style.display='block';  //for plusDivs
//     dots[slideIndex].className += ' active '; //for dots
//  	}
// showDivs();



