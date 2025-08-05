let count = 0; // let x = number of students in class in maths algebra
let interval;

const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const reset = document.getElementById("reset");

function updateDisplay(){
    countLabel.innerHTML = count;
}
updateDisplay();

function startcounting(changefn){
    changefn(); // to run the code once
    interval = setInterval(changefn, 100);
}

function stopCounting(){
    clearInterval(interval);
}

function buttonHoldUpdate(button, changefn){
    // mouse events
    button.addEventListener("mousedown", () => startcounting(changefn))
    button.addEventListener("mouseup", stopCounting);
    button.addEventListener("mouseleave", startcounting);

    // touch start
    button.addEventListener("touchstart", (e) => {
        e.preventDefault(); // prevent mobile scroll
        startcounting(changefn);
    })
    button.addEventListener("touchend", startcounting);
}

buttonHoldUpdate(increaseBtn, () =>{
    count++;
    updateDisplay();
})

buttonHoldUpdate(decreaseBtn, () =>{
    if (count > 0){
        count--;
    }
    updateDisplay();
})

reset.addEventListener("click", () =>{
    count = 0
    updateDisplay();
})