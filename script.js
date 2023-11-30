// toggle navbar 
const navbar = document.querySelector('.navbar');
const a = navbar.querySelectorAll('a');

 a.forEach(element => {
  element.addEventListener('click',()=>{
       for(let i = 0; i  < a.length; i++){
           a[i].classList.remove("active");
       }
       this.classList.add('active');
       document.querySelector('.navbar').classList.toggle('show')
  })
 });

 const hamBurger = document.querySelector('.ham-burger');
 hamBurger.addEventListener('click',()=>{
     document.querySelector('.navbar').classList.toggle('show')
 })

//    filter navigation filter gallery 

const fillterButtons = document.querySelector('#filter-btns').children;
const item = document.querySelector('.portfolio-gallery').children;

for(let i=0; i < fillterButtons.length; i++){
    fillterButtons[i].addEventListener('click',function(){
         for(let j=0; j < fillterButtons.length;j++){
              fillterButtons[j].classList.remove('active');
         }
          this.classList.add("active");
          const target = this.getAttribute('data-target');
       
           for(let k = 0 ; k < item.length; k++){
               item[k].style.display= 'none';
               if(target== item[k].getAttribute('data-id')){
                   item[k].style.display= 'block';
               }
               if(target == 'all'){
                   item[k].style.display = 'block'
               }
           }

    })
}

// light box effect 

const closeLightbox = document.querySelector('.close-lightbox');
const lightbox = document.querySelector('.lightbox')
const lightBoxImage = document.querySelector('img')

lightbox.addEventListener('click',function(){
     if(event.target != lightBoxImage){
         lightbox.classList.remove('show')
         lightbox.classList.add('hide')
     }
})
closeLightbox.addEventListener('click',function(){
    
        lightbox.classList.remove('show')
        lightbox.classList.add('hide')
    
})

const gallery = document.querySelector('.portfolio-gallery')
const galleryItem = document.querySelectorAll('.item')

galleryItem.forEach(function(element){
    element.querySelector('.fa-plus').addEventListener('click',function(){
         lightbox.classList.remove('hide');
         lightbox.classList.add('show');
    })
})

// header fixed 

window.onscroll = function(){
    const docScrolTop = document.documentElement.scrollTop;
    if(window.innerWidth > 991){
        if(docScrolTop > 100){
             document.querySelector('header').classList.add('fixed');
        }else{
            document.querySelector('header').classList.remove('fixed')

        }
    }
}


// toggle theme buttons 


let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = ()=>{
    themeToggler.classList.toggle('active')
}


document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn=>{
     btn.onclick =()=>{
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main_color',color)
        
     }
})