// Bad

function makeBankAccount() {
    // ...

    return {
        balance: 0
        // ...
    };
}

const account = makeBankAccount();
account.balance = 100;

// Good

function makeBankAccount() {
    let balance = 0;
    
    function getBalance(){
        return balance
    }

    function setBalance(){
        balance = newBalance
    }

    return {
        getBalance,
        setBalance
    }
}

const account = makeBankAccount()
account.setBalance(100)
account.getBalance()