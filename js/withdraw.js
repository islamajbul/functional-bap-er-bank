// Step 01 Add withdraw button event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step 02 get withdraw amount
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    // Step 03: get previous withdraw amount
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    // Step 04: Calculate new withdraw
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // Step 05 set new withdraw by using setText element value
    setTextElementValueById('withdraw-total',newWithdrawTotal);
    // Step 06 Calculate balance
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // Step 07 set balance
    setTextElementValueById('balance-total')

})




