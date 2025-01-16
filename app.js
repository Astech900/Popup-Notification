let submitButton = document.getElementById('submmit-btn');
let popUp = document.getElementById('popup');
let okBtn = document.getElementById('ok-btn');


submitButton.addEventListener('click',()=>{
    popUp.classList.add('pop')

})
okBtn.addEventListener('click',()=>{
    popUp.classList.remove('pop')

   
})