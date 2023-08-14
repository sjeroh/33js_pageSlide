let button = document.querySelectorAll('button');
let contentWrap = document.querySelectorAll('.contentWrap');
let imgAll=document.querySelectorAll('img');
let title= document.querySelector('h2');
let pageNum = 0;
let totalNum=0;

totalNum= contentWrap.length; //3

button[0].addEventListener('click',()=>{
  prevFunc();
})
button[1].addEventListener('click',()=>{
  nextFunc();
})

function prevFunc(){
  if(pageNum>0){
    pageNum --;
  }else{
    pageNum = totalNum -1;
  }
  pageSetFunc();
}
function nextFunc(){
  if(pageNum<totalNum-1){
    pageNum ++;
  }else{
    pageNum = 0;
  }
  pageSetFunc();
}
function pageSetFunc(){
  imgAll.forEach((img)=>{
    img.classList.remove('active');
  })

  contentWrap[pageNum].querySelectorAll('img').forEach((img)=>{
    img.classList.add('active')
  })
  title.innerHTML=`PAGE:${pageNum +1}`;
}

pageSetFunc();