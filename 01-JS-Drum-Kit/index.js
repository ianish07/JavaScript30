const keyCodes = {
    'A': 65,
    'S': 83,
    'D': 68,
    'F': 70,
    'G': 71,
    'H': 72,
    'J': 74,
    'K': 75,
    'L': 76,
  };

function removeTransition(e){
    if(e.propertyName != 'transform')
        return;
    e.target.classList.remove('playing');
}

function playSound(e){
    //console.log(e)
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

function playSoundOnClick(e){
    //console.log(e)
    //console.log(keyCodes[e.path[0].innerText])
    const audio = document.querySelector(`audio[data-key="${keyCodes[e.path[0].innerText]}"]`)
    const key = document.querySelector(`div[data-key="${keyCodes[e.path[0].innerText]}"]`)
    
    if(!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();   
}

const keys = Array.from(document.querySelectorAll('.key'))

keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
    key.addEventListener('click', playSoundOnClick);
})

window.addEventListener('keydown',playSound)