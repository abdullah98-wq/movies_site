$('.toggel-menu').click(function(){
  let navWidth = $('.items-nav').innerWidth();

  if ($('.opn-cls').css('left') == '0px') {
  $('.side-bar').animate({ left: `0px` }, 1000);
  $('.opn-cls').animate({ left: `220px` }, 1000);
  }
  else{
  $('.side-bar').animate({ left: `-220px` }, 1000);
  $('.opn-cls').animate({ left: `0px` }, 1000);
  }
  
  console.log("sidebar =" + $('.side-bar').css('left'))
  console.log("opncls =" + $('.opn-cls' ).css('left'))
})
/*$('.toggel-menu').click(function(){
    let itemsWidth = $('.items-nav').innerWidth();
    let opnWidth = $('.opn-cls').innerWidth();
    

    if ($('.side-bar').css('left') == '0px') {

      $('.side-bar').animate({ left: `-${itemsWidth}` }, 1000);
      $('.opn-cls').animate({ left: `${opnWidth}` }, 1000);
      
     
    } else {
    
      $('.side-bar').animate({ left: `0px` }, 1000);
      $('.opn-cls').animate({ left: `0px` }, 1000);
      $(".items-nav").fadeIn(500);
      $(".items-nav").fadeIn(500);
    }
    console.log("sidebar =" + $('.side-bar').css('left'))
    console.log("opncls =" + $('.opn-cls' ).css('left'))
})
$('.toggel-menu').click(function(){
    let navWidth = $('.opn-cls').innerWidth();
    console.log($('.opn-cls').css('left'))


    if ($('.opn-cls').css('left') == '225px') {

      $('.opn-cls').animate({ left: `${navWidth}` }, 1000);

    } else {

      $('.opn-cls').animate({ left: `225` }, 1000);
      $(".items-nav").fadeIn(500);
    }
})*/

$(".toggel-menu").click(function(){
  $(".items-nav").fadeIn(500);
})

let searchInput=document.getElementById("searchInput")
let fname=document.getElementById("name")

let posts=[];
async function movies(){
    let apiResponse=await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    posts=await apiResponse.json();
    posts=posts.results
    console.log(posts)
    display();
}

movies();


function display(){
let box=``;
 for(let i=0;i<posts.length;i++){
     box+=`
    <div class="col-md-4 py-5">
    <div class="posts">
    <img  class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
    
    <div class="item-layer text-center m-auto">
    <h3>${posts[i].title}</h3>
    <p>${posts[i].overview}</p>
    <p>${posts[i].vote_average}</p>
    <p>${posts[i].release_date}</p>
    </div>
    </div>
    </div>
     `
 }
 document.getElementById("myrow").innerHTML=box;
}

searchInput.addEventListener("onkeyup",function(){

  movies(searchInput.value);
})
 function search(itemSearch){
  var box = "";
  for(let i=0;i<posts.length;i++){
  if (posts[i].title.toUpperCase().includes(itemSearch.toUpperCase())) {
   
      box+=`
     <div class="col-md-4 py-5">
     <div class="posts">
     <img  class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
     
     <div class="item-layer text-center m-auto">
     <h3>${posts[i].title}</h3>
     <p>${posts[i].overview}</p>
     <p>${posts[i].vote_average}</p>
     <p>${posts[i].release_date}</p>
     </div>
     </div>
     </div>`
    console.log("match")
   
  } else {
    console.log('not')
  }
  display(itemSearch)
  }
 }
let usersInfo=localStorage.setItem("info",JSON.stringify(usersInfo))






function validateName() {
  
  var reg = /^[A-Z][a-z]$/;
  if (reg.test(fname.value) == true)
  {
    fname.classList.add("is-valid")
  fname.classList.remove("is-invalid")
  error.class.replace("d-flex", "d-none");
  
  return true;
}else {
  productname.classList.add("is-invalid")
  error.classlist.add("d-none", "d-flex")
 
}
}