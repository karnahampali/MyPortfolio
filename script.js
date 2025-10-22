const hello = document.getElementById('terminal');
const windows = document.getElementById('terminal-area');
const wrong = document.getElementById('x-button')
hello.addEventListener('dblclick',sayHello);
wrong.addEventListener('click',dontSayHello);
function sayHello(){
    windows.classList.remove('hidden')
    console.log('helloworld');
}
function dontSayHello(){
    windows.classList.add('hidden');
}

const helloIcon = document.getElementById('terminal');
const terminalWindow = document.getElementById('terminal-area');
const closeButton = document.getElementById('x-button');

helloIcon.addEventListener('click', showTerminal);
closeButton.addEventListener('click', hideTerminal);

function showTerminal() {
    terminalWindow.classList.remove('hidden');
}

function hideTerminal() {
    terminalWindow.classList.add('hidden');
}

const typewriterElement = document.getElementById('typewriter');
const wordsToType = ["Frontend", "Backend"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = wordsToType[wordIndex];
    let typeSpeed = 150;

    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % wordsToType.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

const bodyElement = document.getElementById('blurred');
const projectFolder = document.getElementById('projects');
const projectElement = document.getElementById('project');
const cursorElement = document.getElementById('cursors');
projectFolder.addEventListener('click',projectLayout);
function projectLayout() {
    bodyElement.classList.add('blur');
    projectElement.classList.remove('hidden');
    cursorElement.classList.remove('cursor');
}

document.addEventListener('keydown', closeProjectLayout);
function closeProjectLayout() {
     if (event.key === 'Escape') {
        bodyElement.classList.remove('blur');
        projectElement.classList.add('hidden');
        cursorElement.classList.add('cursor');
}
}

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX - scrollX)+"px")
});

