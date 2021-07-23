const fivePercent = document.getElementById('five-percent');
const tenPercent = document.getElementById('ten-percent');
const fiftenPercent = document.getElementById('fifteen-percent');
const twentyfivePercent = document.getElementById('twenty-five-percent');
const fiftyPercent = document.getElementById('fifty-percent');
const customAmount = document.getElementById('custom-percent')
const billTotal = document.getElementById('dollar');
let numberofCustomers = document.getElementById('customer-amount');
const tipAmountPerson = document.getElementById('tip-amount-person');
const totalAmountPerson = document.getElementById('total-amount-person');
const resetButton = document.getElementById('reset-button');
let amountToAdd = billTotal.value
let peopleToAdd = numberofCustomers.value
let tipAmount = ''
let customize = document.getElementById('customize')
const emptyCustomerTotal = document.getElementById('empty-text');
const enterPercent = document.getElementById('empty-percent');


billTotal.addEventListener('change',(event)=>{
    amountToAdd = event.target.value
    // console.log(amountToAdd + 'in function')
})
// console.log(amountToAdd)

resetButton.addEventListener('click', ()=>{
    checkBillTotal();
    checkNumberOfPeople();
    // percentEmpty()
    doMath()

})


const doMath = ()=>{
    if(customize.value !== ''){
        tipAmount = "."+customize.value
        console.log(tipAmount)
    }
    // let testTotal = parseFloat(billTotal.value) * tipAmount
    let testTotal = (parseFloat(billTotal.value) / parseInt(numberofCustomers.value)) 
    let tipTotal = testTotal * tipAmount
    let totalTotal = testTotal + tipTotal
    // console.log("tip" + tipTotal.toFixed(2))
    // console.log("total" + testTotal.toFixed(2));
    // console.log(totalTotal.toFixed(2))
    console.log(tipAmount)
    console.log("testtotal "+ testTotal)
    console.log("tiptotal "+ tipTotal)
    console.log("totalTotal "+ totalTotal)
    if(tipAmount !== '' || tipAmount !== 0){
        totalAmountPerson.innerHTML="$"+totalTotal.toFixed(2);
        tipAmountPerson.innerHTML="$"+tipTotal.toFixed(2);
    }else{
        let emptyPercent = document.getElementsByClassName('tip-percent')
        console.log(emptyPercent)
    }
    tipAmount = "."+customize.value 
    console.log("."+customize.value)

}


const checkBillTotal = ()=>{
    if(billTotal.value == 0 || billTotal.value == ''){
        billTotal.style.border="1px solid red"
    }
}

const checkNumberOfPeople = ()=>{
    if(numberofCustomers.value == 0 || numberofCustomers.value == ''){
        numberofCustomers.style.border="1px solid red";
        emptyCustomerTotal.style.display="inline";

    }else{
        numberofCustomers.style.border="initial"
}
}

billTotal.addEventListener('input', ()=>{
    billTotal.style.border="initial"
})

numberofCustomers.addEventListener('input', ()=>{
    numberofCustomers.style.border="initial";
    emptyCustomerTotal.style.display="none";
})



customAmount.addEventListener('click',()=>{

        customAmount.style.display="none";
        customize.style.display="initial";
        customOn = true
        console.log("false")

})


// button event listeners

fivePercent.addEventListener('click', ()=>{
    if(tipAmount == ''){
        tipAmount = 0.05;
        console.log(tipAmount)
        // enterPercent.style.display="none";
    }else{
        tipAmount = 0.05
        // enterPercent.style.display="none"
    }
})

tenPercent.addEventListener('click', ()=>{
    if(tipAmount == ''){
        tipAmount = 0.10;
        // enterPercent.style.display="none"
    }else{
        tipAmount = 0.10;
        // enterPercent.style.display="none";
    }
})

fiftenPercent.addEventListener('click', ()=>{
    if(tipAmount == ''){
        tipAmount = 0.15;
        // enterPercent.style.display="none"
    }else{
        tipAmount = 0.15;
        // enterPercent.style.display="none";
    }
})

twentyfivePercent.addEventListener('click', (event)=>{
    if(tipAmount == ''){
        tipAmount = 0.25;
        // console.log(target.target.id)
        // console.log(event.target.id)
        // enterPercent.style.display="none"
    }else{
        tipAmount = 0.25;  
        // enterPercent.style.display="none";
    }
})

fiftyPercent.addEventListener('click', ()=>{
    if(tipAmount == ''){
        tipAmount = 0.50;
        // fiftyPercent.style.border="none";
        // enterPercent.style.display="none"
    }else{
        tipAmount = 0.50;
        // enterPercent.style.display="none";
    }
})

customAmount.addEventListener('change', ()=>{

    tipAmount = "."+toString(customize.value)
    
})


const percentEmpty = () =>{
    if(tipAmount == 0 || tipAmount == ''){
        enterPercent.style.display="initial"
       }else{
        enterPercent.style.display="none"
       }
}


