// javascript
const gallery = document.getElementsByClassName('gallery')[0]
const prevBtn = document.getElementsByClassName('previous')[0]
const nextBtn = document.getElementsByClassName('next')[0]
let curr = 0;
// let pics = [
//     '<img class="card current" src="presents.jpg" alt="Christmas Cookies">',
//     '<img class="card" src="cookies.jpg" alt="Christmas Cookies">',
//     '<img class="card" src="santa.jpg" alt="Christmas Cookies">',
//     '<img class="card" src="candycane.jpg" alt="Christmas Cookies">',
//     '<img class="card" src="reindeer.jpg" alt="Christmas Cookies">'
// ]

prevBtn.addEventListener('click', (e) => {
    curr--;
    gallery.style.transform = `translateX(${-(curr*220 + 1100)%1100}px)`
    // let lastPic = pics.pop()
    // pics = [lastPic, ...pics]
    // gallery.innerHTML = pics.join('\n')
    // gallery.style.transform = `translateX(${curr*220}px)`
    gallery.style.transitionDuration = '1s';
})

nextBtn.addEventListener('click', (e) => {
    curr++;
    gallery.style.transform = `translateX(${(-curr*220)%1100}px)`
    // pics = [...pics.slice(1), pics[0]]
    // gallery.innerHTML = pics.join('\n')
    // gallery.style.transform = `translateX(${(-curr*220)}px)`
    gallery.style.transitionDuration = '1s';
})
