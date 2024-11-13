import BookPresenter from './book-presenter.js';
import NoBookComponent from '../view/no-book-component.js';
import { render, remove } from '../framework/render.js';
import { generateId } from '../utils.js';

export default class BooksBoardPresenter {
  #boardContainer = null;
  #booksModel = null;
  #bookPresenters = new Map();

  constructor({ boardContainer, booksModel }) {
    this.#boardContainer = boardContainer;
    this.#booksModel = booksModel;
    this.#booksModel.addObserver(this.#handleModelChange.bind(this));
  }

  init() {
    this.#renderBookList();
  }

  setGenreFilter(genre) {
  
    this.#booksModel.setGenreFilter(genre);
  }
  

  #renderBookList() {
    const books = this.#booksModel.books;
    this.#clearBooks();

    if (books.length === 0) {
      this.#renderNoBooks();
    } else {
      books.forEach((book) => this.#renderBook(book));
    }
  }

  #renderBook(book) {
    const bookPresenter = new BookPresenter({
      container: this.#boardContainer,
      onBookUpdate: this.handleBookUpdate.bind(this),
    });
    bookPresenter.init(book);
    this.#bookPresenters.set(book.id, bookPresenter);
  }

  #renderNoBooks() {
    const noBookComponent = new NoBookComponent();
    render(noBookComponent, this.#boardContainer, 'beforeend');
  }

  #clearBooks() {
    this.#bookPresenters.forEach(presenter => presenter.destroy());
    this.#bookPresenters.clear();
    this.#boardContainer.innerHTML = '';
  }

  handleBookUpdate(action, book) {
    if (action === 'delete') {
      this.#booksModel.deleteBook(book.id);
    } else if (action === 'edit') {
      this.#booksModel.editBook(book);
    } else if (action === 'add') {
      const newBook = { ...book, id: generateId() };
      this.#booksModel.addBook(newBook);
    }
  }

  #handleModelChange() {
    this.#renderBookList();
  }
}
