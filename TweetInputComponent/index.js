/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/

let progressBar = document.getElementsByClassName('progress-bar')[0]
let counter = document.getElementById('counter')
let textarea = document.getElementsByClassName('textarea')[0]
let tweetBtn = document.getElementById('btn')
const MAX_CHARS = 140;

tweetBtn.disabled = true;
tweetBtn.classList.add('buttonDisabled')

function updateCount(e){
    // console.log(e.key)
    // let currentValue = e.target.value + e.key
    // console.log(currentValue)
    // console.log(textarea.value)
    let currentChars = textarea.value.length
    let remainingChars = Math.max(MAX_CHARS - currentChars, -1)
    progressBar.style.width = `${Math.min(currentChars, MAX_CHARS)/MAX_CHARS*100}%`
    if(remainingChars < 20){
        progressBar.style.background = 'red'
    }
    else{
        progressBar.style.background = 'greenyellow'   
    }
    if(currentChars == 0 || remainingChars < 0){
        tweetBtn.disabled = true;
        tweetBtn.classList.add('buttonDisabled')
    }
    else{
        tweetBtn.disabled = false;
        tweetBtn.classList.remove('buttonDisabled')
    }
    counter.innerText = currentChars
}

textarea.addEventListener('input', updateCount)

tweetBtn.addEventListener('click', (e) => {
    let tweetURL = `https://twitter.com/intent/tweet?text=${textarea.value}`
    window.open(tweetURL)
})