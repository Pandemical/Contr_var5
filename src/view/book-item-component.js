import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class BookItemComponent extends AbstractComponent {
  #book = null;

  constructor(book) {
    super();
    this.#book = book;
  }

  get template() {
    return `
      <li class="book-item">
        <div class="book-details">
          <span>Название Фильма: ${this.#book.title}</span>
          <span>Статус фильма: ${this.#book.genre}</span>
        </div>
        <div class="book-actions"></div>
      </li>
    `;
  }

  get actionsContainer() {
    return this.element.querySelector('.book-actions');
  }
}
