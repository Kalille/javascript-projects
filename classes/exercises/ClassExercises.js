// Define your Book class here:
class Book {
    constructor(title,author, copyrightDate, isbn, numberOfPages, checkedOutCount, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.checkedOutCount = checkedOutCount;
        this.discarded = discarded

    }
    checkout(count = 1){
        // console.log(this.checkedOutCount += count)
        return   this.checkedOutCount += count
      

    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title,author, copyrightDate, isbn, numberOfPages, checkedOutCount, discarded){
        super(title,author, copyrightDate, isbn, numberOfPages, checkedOutCount, discarded)

    }
    trash(currentYear){
        // console.log(2026 - this.copyrightDate)
        if (currentYear - this.copyrightDate > 5) {
          return  this.discarded = 'Yes';
        }
     }
}
class Novel extends Book{
    constructor(title,author, copyrightDate, isbn, numberOfPages, checkedOutCount, discarded){
       super(title,author, copyrightDate, isbn, numberOfPages, checkedOutCount, discarded);
    }
 
    trash(){
       if (this.checkedOutCount > 100) {
        return  this.discarded = 'Yes';
       }
    }
}

// Declare the objects for exercises 2 and 3 here:
let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
let starWars = new Novel("Pride and Prejudice","Jane  Austen", 1813, 11111111, 432, 32,"no" )
// Code exercises 4 & 5 here:
console.log(makingTheShip.trash(2024));
console.log(starWars.trash())
// let goodread = makingTheShip.trash(2024)
// console.log(goodread)