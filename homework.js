class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    name = () => {
        console.log(`My favorite book is ${this.title}.`)
    }

    authorName = () => {
        console.log(`The author is: ${this.author}`)
    }

    pageNum = () => {
        console.log(`This book has ${this.pages} pages.`)
    }
};


const lotr = new Book('Lord of the Rings', 'Tolkein', 423 )

console.log(lotr);
lotr.name();
lotr.authorName();
lotr.pageNum();





class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    userDeposit = (deposit) => {
        console.log(`Successfully deposited: $${deposit} balance is now: ${this.balance += deposit}.`);
    }

    userWithdraw = (withdraw) => {
        console.log(`Successfully withdrew: ${withdraw} balance is now: $${this.balance -= withdraw}.`)
    }

    interestRate = (year, rate) => {
        console.log(`After a few years, your interest has brought your balance to $${this.balance * (1 + 1 * rate)**year}`)
    }
}

const accountUser = new Account(573278192, 0, "Dinkleberg");
accountUser.userDeposit(22000);
accountUser.userWithdraw(1500);

console.log(accountUser.interestRate(5, .05));