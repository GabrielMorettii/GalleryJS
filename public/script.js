let cards = document.querySelectorAll('.card');
let modal = document.querySelector('.modal');
let close = document.querySelector('#close');
let modalImg = document.querySelector('#modalImg')
let source = "";

function addModal(){
  if(modal.classList.contains('active')){
    modal.classList.remove('active')
  } else{
    modal.classList.add('active');
  }
}

function closeModal(){
  close.addEventListener('click',  modal.classList.remove('active'))
}

for ( let card of cards){
    card.addEventListener('click', addModal )
}

for(let i =0; i< cards.length;i++){
  cards[i].addEventListener('click',function(){

      source = cards[i].children[0].getAttribute('src');
      modalImg.setAttribute('src', source);
   
  });

}
