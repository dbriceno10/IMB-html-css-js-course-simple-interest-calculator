// const principal = document.getElementById("principal").value;
// const rate = document.getElementById("rate").value;
// const years = document.getElementById("years").value;
// const interest = principal * years * rate / 100
// const year = new Date().getFullYear() + parseInt(years);

const updateRate = () => {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

const compute = () => {
    const result = document.getElementById("result")
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100
    const year = new Date().getFullYear() + parseInt(years); 
    result.innerHTML = ""
    
    result.innerHTML+= `
    <div>
        If you deposit <b>${principal}</b>,<br>
        at an interest rate of <b>${rate}%</b>.<br>
        You will receive an amount of <b>${interest}</b>,<br>
        in the year <b>${year}</b>.
    </div>
    `
    console.log(interest)
}
// function compute()
// {
//     p = document.getElementById("principal").value;
    
// }