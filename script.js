function E(selector, parent) {
    if (selector instanceof HTMLElement) 
        return selector;
    
    return (parent || document).querySelectorAll(selector);
}

function hasClass(elemnt, className) {
    return elemnt.classList.contains(className);
}

function radioClass(element, className) {
    E("."+ className).forEach((elem)=>
    elem.classList.remove(className));
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if(hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id)[0];

        radioClass(linkedTab, "visible");
    } );

    let active = E(".tab.active")[0];
    if (active) {
            radioClass(E("."+active.id)[0], "visible");
    }
}

tabs(".menu-nav");

let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentitem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for(var i = currentitem1; i < currentitem1 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentitem1 += 4;
    if(currentitem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentitem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for(var i = currentitem2; i < currentitem2 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentitem2 += 4;
    if(currentitem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none'
    }
}

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentitem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for(var i = currentitem3; i < currentitem3 + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentitem3 += 4;
    if(currentitem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none'
    }
}