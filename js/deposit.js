
document.getElementById('btn-deposit').addEventListener('click',function(){
  
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // step 01: Get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // Calculate New deposit Total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // Set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);


})