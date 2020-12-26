/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

const dice = document.getElementById('dice')
const dots = document.getElementsByClassName('dot')
const numberMessage = document.getElementById('number')
const switches = {
    1: [4],
    2: [0,8],
    3: [0,4,8],
    4: [0,2,6,8],
    5: [0,2,6,8,4],
    6: [0,3,6,2,5,8]
}

function displayNumber(e){
    dice.classList.add('flip')
    for(let dot of dots){
        dot.style.visibility = "hidden"
    }
    setTimeout( () => {
        let number = Math.ceil(Math.random()*6)
        // console.log('random number is', number)
        numberMessage.innerText = number
        for(let index of switches[number]){
            dots[index].style.visibility = "visible"
            dice.classList.remove('flip')
        }
    }, 500)
}

displayNumber()
dice.addEventListener('click', displayNumber)

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
