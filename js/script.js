// Preloder
window.addEventListener("load",function() {
    document.querySelector(".preloader").classList.add("opcity-0");
    setTimeout( function() {
      document.querySelector(".preloader").style.display = "none";
    },1000)
})


// protofile item filter
const filterContainer = document.querySelector('.protofolio-filter'),
filterBtns = filterContainer.children,
totalFilterBtn = filterBtns.length,
protofolioItems = document.querySelectorAll(".protofile-item");
// console.log(protofolioItems);
totalProtofolioItems = protofolioItems.length;
// console.log(totalProtofolioItems);

// console.log(totalFilterBtn);
for (let i = 0; i < totalFilterBtn; i++) {
 filterBtns[i].addEventListener("click", function() {
     filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");  

    const filterValue = this.getAttribute("data-filter");
    // console.log(filterValue);
    for (let j = 0; j < totalProtofolioItems; j++) {
        if (filterValue === protofolioItems[j].getAttribute("data-catogry")) {
            protofolioItems[j].classList.remove("hide");
            protofolioItems[j].classList.add("show");
            
        }
        else{
            protofolioItems[j].classList.remove("show");
            protofolioItems[j].classList.add("hide");
        }
        if (filterValue === "all") {
            protofolioItems[j].classList.remove("hide");
            protofolioItems[j].classList.add("show");
        }
    }

 })
    
}

// Protofile light box
const lightbox = document.querySelector(".lightbox"),
lightboxImg = lightbox.querySelector(".lightbox-img"),
closeLightbox = lightbox.querySelector(".lightbox-close"),
lightboxText = lightbox.querySelector(".capion-text"),
lightboxCounter = lightbox.querySelector(".capion-counter");
let itemIndex = 0;
for (let i = 0; i < totalProtofolioItems; i++) {
  protofolioItems[i].addEventListener("click",function() {
    itemIndex=i;
    changeItem();
    toggleLightbox();

  })
    
}
function nextItem() {
    if (itemIndex === totalProtofolioItems-1) {
        itemIndex = 0;
    }else{
        itemIndex++;
    }
    changeItem();
}
function prevItem() {
    if (itemIndex === 0) {
      itemIndex = totalProtofolioItems-1;
    }else{
        itemIndex--;
    }
    changeItem();
}
function toggleLightbox(){
    lightbox.classList.toggle("open");

    
}
function changeItem() {
    imgSrc = protofolioItems[itemIndex].querySelector(".protofile-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = protofolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1 )+ " of " + totalProtofolioItems ;
    
}
// close lightbox
lightbox.addEventListener("click" , function(event) {
    if (event.target === closeLightbox ||event.target === lightbox ) {
        toggleLightbox();
        
    }
    

})
// Aside Nav Bar
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
allSection = document.querySelectorAll(".section"),
totalAllSection = allSection.length;
totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
   const a = navList[i].querySelector("a");
   a.addEventListener("click",function () {
    //    remove back section
    removeBackSectionClass();
  

       for (let j = 0; j < totalNavList; j++) {
        //    add back section
      
           if ( navList[j].querySelector("a").classList.contains("active")) {
      
            addBackSectionClass(j);
           }
        navList[j].querySelector("a").classList.remove("active");
           
       }
      this.classList.add("active");
      showSection(this);
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
          
      }
   })
    
}

function removeBackSectionClass(){
    for (let i = 0; i < totalAllSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSectionClass(num){  
         allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalAllSection; i++) {
        allSection[i].classList.remove("active");
    }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active");
 
    
}

function  updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target= element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1] ) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
    
}
document.querySelector(".hire-me").addEventListener("click" , function() {
    const sectionIndex = this.getAttribute("data-section-index"); 
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);

})

const navToggleBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

navToggleBtn.addEventListener("click" , () => {
asideSectionTogglerBtn()
    
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for (let i = 0; i < totalAllSection; i++) {
        allSection[i].classList.toggle("open");
    }
    
}
