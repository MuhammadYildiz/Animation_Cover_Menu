const content = document .querySelector('.content');
const toggel = document .querySelector('.toggel');
const close = document .querySelector('.close');

toggel.addEventListener('click',()=>{
    content.classList.toggle('active')
})
close.addEventListener('click',()=>{
    content.classList.remove('active')
})
