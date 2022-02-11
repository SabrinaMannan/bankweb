//handle deposit button event

document.getElementById('deposit-btn').addEventListener
    ('click', function () {

        //get the amount deposited

        const depositInput = document.getElementById('deposit-input');

        const newdepositText = depositInput.value;
        const newdepositAmount = parseFloat(newdepositText);
        // console.log(depositAmount);


        //update deposit total
        const depositTotal = document.getElementById('deposit-total');

        const prevDepositText = depositTotal.innerText;
        const prevDepositAmount = parseFloat(prevDepositText);

        const newDepositTotal = prevDepositAmount + newdepositAmount;

        depositTotal.innerText = newDepositTotal;



        //update balance

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const prevBalance = parseFloat(balanceTotalText);

        const newBalanceTotal = prevBalance + newDepositTotal;

        balanceTotal.innerText = newBalanceTotal;


        //clear the deposit input field

        depositInput.value = '';

    });

//widthdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('widthdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');

    const prevWithdrawText = withdrawTotal.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawText);

    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;



    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const prevbalanceText = balanceTotal.innerText;
    const prevBalance = parseFloat(prevbalanceText);

    const newBalanceTotal = prevBalance - newWithdrawTotal;

    balanceTotal.innerText = newBalanceTotal;

    // //clear the withdraw field

    withdrawInput.value = '';
})