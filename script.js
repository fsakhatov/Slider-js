let footer = document.querySelector('footer');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let images = document.querySelectorAll('.image');
let p = document.querySelector('p');
let h6 = document.querySelector('h6');
let strong = document.querySelector('strong');

prev.addEventListener('click', () => {
    p.innerText = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    h6.innerText = 'UX Engineer';
    strong.innerText = 'Tanya Sincular';
    images[1].style.display = 'none'
    images[0].style.display = 'flex'
   });


next.addEventListener('click', () => {
    p.innerText = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
    h6.innerText = 'Junior Front-end Developer'
    strong.innerText = 'John Tarkpor';
    images[0].style.display = 'none';
    images[1].style.display = 'flex';
 })