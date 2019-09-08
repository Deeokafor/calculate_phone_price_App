function calculatePhonePrice(){
    var TAX_RATE = 0.08;
    var PHONE_PRICE = 99.99;
    var PHONE_ACCESSORIES_PRICE = 10.00;
    var CUSTOMER_NAME = prompt('kindly tell your name, please.');
    var WALLET_BALANCE = prompt('kindly input your wallet balance, please.');/* 1000;*/
    //TO-DO: FIGURE OUT THE WORKINGS FOR CALCULATING TAX
    var TOTAL_PURCHASE = PHONE_PRICE + PHONE_ACCESSORIES_PRICE + (PHONE_PRICE + PHONE_ACCESSORIES_PRICE) * TAX_RATE;
    var NUMBER_OF_PHONEandACCESSORIES_BOUGHT = 0;
    //var WALLET_BALANCE_AFTER_PURCHASE;/*WALLET_BALANCE.toFixed(2) - TOTAL_PURCHASE.toFixed(2);*/
    var SPENDING_THRESHOLD = 200;
    
    console.log('each purchase of phone and accessories would cost ' + '$' + TOTAL_PURCHASE.toFixed(2) + ' [tax inclusive]');

    console.log('your initial wallet balance is' + ' ' + '$' + WALLET_BALANCE);

    function buyPhone(){


        if (TOTAL_PURCHASE <  WALLET_BALANCE){
            //do so...
            while(true){
                NUMBER_OF_PHONEandACCESSORIES_BOUGHT = NUMBER_OF_PHONEandACCESSORIES_BOUGHT + 1;
                console.log('you have made' + ' ' + NUMBER_OF_PHONEandACCESSORIES_BOUGHT + ' ' + 'purchase(s)');
                console.log('your cost is' + ' ' + '$' + (TOTAL_PURCHASE * NUMBER_OF_PHONEandACCESSORIES_BOUGHT).toFixed(2));
                WALLET_BALANCE = (WALLET_BALANCE - (TOTAL_PURCHASE * NUMBER_OF_PHONEandACCESSORIES_BOUGHT)).toFixed(2);
                console.log('your wallet balance is ' + ' ' + '$' + WALLET_BALANCE);

                if (TOTAL_PURCHASE > WALLET_BALANCE && SPENDING_THRESHOLD){
                    console.log('dear' + ' ' + CUSTOMER_NAME + ' ' + 'you have reached your spending limit');
                    break;
                }
                
            }
        }
    }

    buyPhone();
}

calculatePhonePrice();

//modular development
/*function calcPhonePrice2(){
    const customerName = prompt('kindly tell your name, please.');
    const taxRate = 8 / 100;
    const phonePrice = 99.9;
    const phoneAccessoriesPrice = 10.1;
    const spendingThreshold = 200;
    const numberOfItemsBought = 0;
    const walletBalance = prompt('kindly input your balance, please');

    //calculate tax
    function calculateTax(amt){
        amt = amt * taxRate;
        return amt;
    }

    //format to 2 decimal places
    function formatToDecimal2(amt){
        return '$' + amt;
    }

    //loop through balance for difference
    function buyItemOver(){
        if ( walletBalance < (phonePrice + phoneAccessoriesPrice) * taxRate ) {
            alert('sorry' + ' ' + customerName + ' ' + 'you are not able to make a purchase due to low funds');
        } else {
            while(false){
                //calculateTax(100);
                formatToDecimal2( calculateTax(100));
            }
        }
    }

    buyItemOver();
}

calcPhonePrice2();*/