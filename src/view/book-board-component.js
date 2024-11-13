import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class BookBoardComponent extends AbstractComponent {
  get template() {
    return `<section class="book-board">
              <h2>Список книг</h2>
              <div class="books-container"></div>
            </section>`;
  }
}