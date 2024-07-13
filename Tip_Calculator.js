document.addEventListener('DOMContentLoaded', () => {
    let billInput = document.getElementById('amount-input');
    const emptyBtn = document.getElementById('emptybtn')
    const resetBtn = document.getElementById('reset-btn')
    let humanInput = document.getElementById('num-of-people')
    let errorResponse = document.getElementById('input-error_response')
    let tipAmount = document.getElementById('amount-bold');
    let totalAmount = document.getElementById('total-bold');
    let bill;
    let humanNum;

    let percentButton = document.querySelectorAll('.percent__btn .rate-btn');
    percentButton.forEach(button => { 
        button.addEventListener("click", () => { 
            bill = Number(billInput.value);
            humanNum = Number(humanInput.value);
            let btn_textContent =(button.textContent)
            let pValue = Number(btn_textContent.slice(0,-1))
            
            if(humanNum <= 0 ){
                errorResponse.textContent = `Can't be zero`;
                humanInput.style.border = '2px solid hsla(14, 92%, 67%, 0.884)';
            }
            else {
                let P_result = ((pValue/100) * bill) / humanNum
                let t_result = bill + P_result
                tipAmount.textContent =`$${ P_result.toFixed(2,0)}`;
                totalAmount.textContent = `$${t_result.toFixed(2,0)}`;
                resetBtn.style.display = 'block';
                emptyBtn.style.display = 'none';
                emptyBtn.style.bottom = '-37%';
            }
        })
    })
    
    resetBtn.onclick = () => {
        totalAmount.textContent = '0.00';
        tipAmount.textContent = '0.00';
        billInput.value = ''
        humanInput.value = ''
        errorResponse.textContent = ''
        humanInput.style.border = 'none'
        custom.value = ''
        resetBtn.style.display = 'none'
        emptyBtn.style.display = 'block';
        emptyBtn.style.bottom = '-37%'
    }
    let custom = document.getElementById('custom-input')

    function customInterest(){
        bill = Number(billInput.value);
        humanNum = Number(humanInput.value);
        let customValue = Number(custom.value);

        let  P_result = ((customValue/100) * bill) / humanNum
        let t_result = bill + P_result
        console.log(t_result)
        tipAmount.textContent =`$${ P_result.toFixed(2,0)}`;
        totalAmount.textContent = `$${t_result.toFixed(2,0)}`;
        emptyBtn.style.display = 'none'
        resetBtn.style.display = 'block'
        emptyBtn.style.bottom = '-37%'
    }
    custom.addEventListener('input',customInterest) ;
})
