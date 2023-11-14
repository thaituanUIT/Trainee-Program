let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let back = document.getElementById('back');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let front = document.getElementById('front');
let header = document.querySelector('header')
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    back.style.top = value * 0.5 + 'px';
    front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 2.5 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.marginTop = value * 0.5 + 'px';
})

const addItem = (item) => {
    ItemBox = document.getElementById("ics");
    const card = document.createElement("li");
    card.classList.add("card")
    card.innerHTML = item.script;
    ItemBox.appendChild(card);
}

for (let i = 0; i < projectdata.length; i++) {
    addItem(projectdata[i]);
    console.log(projectdata[i])
}