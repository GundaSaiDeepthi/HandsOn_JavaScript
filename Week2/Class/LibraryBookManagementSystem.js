
//Problem Statement: Library Book Management System
/*
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:*/


class Book{

//Properties:
 //title (string)
        title;
 //author (string)
        author;
//pages (number)
        pages;
//isAvailable (boolean, default: true)
        isAvailable;
        constructor(title,author,pages,isAvailable=true){
            this.title=title;
            this.author=author;
            this.pages=pages;
            this.isAvailable=isAvailable;
        }

        // Methods:
     // borrow() - Marks the book as not available
      borrow(){
        this.isAvailable=false;
      }

      // returnBook() - Marks the book as available
      returnBook(){
        this.isAvailable=true;
      }

      //getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
        getInfo(){
            console.log("The",this.title,"by",this.author,"(",this.pages,")")
        } 

         //isLongBook() - Returns true if pages > 300, false otherwise
        isLongBook(){
    return this.pages>300;
      }

      //to show availability status
      status(){
        if(this.isAvailable===true){
          console.log(this.title ,"is available");
        }
        else{
          console.log(this.title,"is not available");
        }
      }
       
    }

    /* 1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.*/

    let book1=new Book("Harry Potter","J.K.Rowling",500)
    let book2=new Book("1984","George Orwell",384)
    let book3=new Book("The Alchemist","Paulo Coelho",163)
    let book4=new Book("The Stranger","Albert Camus",123)
    let book5=new Book("The Time Machine","H.G. Wells",118)


 //2. Perform the following operations:
//i. Display info of all books
    console.log("Displaying Books Information")
    book1.getInfo()
    book2.getInfo()
    book3.getInfo()
    book4.getInfo()
    book5.getInfo()

    //ii. Borrow 2 books and show their availability status
    console.log("After Borrowing")
    book1.borrow()
    book1.status()
    console.log("After Borrowing")
    book3.borrow()
    book3.status()

    //iii. Return 1 book and show updated status
    console.log("After Returning")
    book1.returnBook()
    book1.status()

    //iv. Count how many books are "long books" (more than 300 pages)
    console.log("Count of long books:")
    let longCount=0
    if(book1.isLongBook()) longCount++
    if(book2.isLongBook()) longCount++
    if(book3.isLongBook()) longCount++
    if(book4.isLongBook()) longCount++
    if(book5.isLongBook()) longCount++
    console.log(longCount)

    //v. List all available books
    console.log("Available Books:")
    if(book1.isAvailable) book1.getInfo()
    if(book2.isAvailable) book2.getInfo()
    if(book3.isAvailable) book3.getInfo()
    if(book4.isAvailable) book4.getInfo()
    if(book5.isAvailable) book5.getInfo()

 
    