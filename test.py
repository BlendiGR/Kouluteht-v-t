class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
    
    def book_info(self):
        print(f"The title of the book is {self.title}, author : {self.author}, ISBN : {self.isbn} ")

class Member():
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []

    def borrow_book(self, borrowed_book):
        self.borrowed_books.append({
            "name": self.name,
            "id": self.member_id,
            "borrowed": borrowed_book
        })
    
    def return_book(self, borrowed_book):
        for book in self.borrowed_books:
            if book["borrowed"] == borrowed_book:
                self.borrowed_books.remove(book)
                print(f'Book "{borrowed_book}" has been returned.')
                return
        print(f"Book {borrowed_book} has been returned")

class Library():
    def __init__(self, name):
        self.name = name
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def remove_book(self, book):
        if book in self.books:
            self.books.remove(book)
    
    def display_books(self):
        if not self.books:
            print("No books available in the library.")
        else:
            print("Books available in the library:")
            for book in self.books:
                print(book.book_info())

    def lend_book(self, title, member):
        for book in self.books:
            if book.title == title:
                self.books.remove(book)
                member.borrow_book(book)
                return
        print(f'Book "{title}" is not available in the library.')

class DigitalLibrary(Library):
    def __init__(self, name):
        super().__init__(name)
        self.ebooks = []
    
    def add_book(self, book, is_ebook=False):
        if is_ebook:
            self.ebooks.append(book)



