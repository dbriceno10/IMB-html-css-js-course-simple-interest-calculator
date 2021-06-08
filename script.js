//updateRate function, we obtain the rate by moving the selector and update it on the screen in real time
const updateRate = () => {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

const compute = () => {
    const result = document.getElementById("result")
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    //Obtain the values of the different inputs from the DOM, and assign them to a variable each
    const interest = principal * years * rate / 100
    //Calculate the interest
    const year = new Date().getFullYear() + parseInt(years); 
    //Obtain the year to calculate the interest by means of the Date object
    if (principal < 0) {
        alert(`Enter a positive number`)
    } else { //If the amount entered is negative it triggers the alert, otherwise it shows the interest and other values inserting them in the HTML
        result.innerHTML = ""
        result.innerHTML+= `
        <div class="yellow-bc">
            If you deposit <span>${principal}</span>,<br>
            at an interest rate of <span>${rate}%</span>.<br>
            You will receive an amount of <span>${interest}</span>,<br>
            in the year <span>${year}</span>.
        </div>
        `
    }
}