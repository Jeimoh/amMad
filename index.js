let No =document.getElementById("No")
let Yes =document.getElementById("Yes")
let Main =document.getElementById("main")
let h2 = document.querySelector("h2")
let button1 = document.getElementById("yes")
let button2 = document.getElementById("No")
let click = 0
turn = (click * 5) + 20


function Dumb(){
    button1.style.display = "none"
    button2.style.display = "none"
    h2.innerText = "I KNEW IT YOU ARE MAD!"
}
function NotDumb(){
    lost()
    

}
function lost(){
    if(click % 5 == 0)
    {
      
        button2.style.left = `${turn +400 }px`
    }
    else if(click % 5 == 1)
    {
        button2.style.top = `${turn + 100}px`
    }
    else if(click % 5 == 2)
    {
        button2.style.left = `${turn +100}px`
    }
    else if(click % 5 == 3)
    {
        button2.style.top = `${turn +500 }px`
    }
    else {
        button2.style.left = `50%`
        button2.style.top = `50%`
    }

    click++

}




