import {AbstractComponent} from '../framework/view/abstract-component.js';

export default class BookFormComponent extends AbstractComponent {
    #onSubmit = null;
  
    constructor({ onSubmit,  }) {
      super();
      this.#onSubmit = onSubmit;
      this.element.querySelector('form').addEventListener('submit', this.#handleSubmit.bind(this));
    }
  
    get template() {
      return `
        <div class="book-form">
          <h2>Добавить фильм</h2>
          <form id="book-form">
            <input type="text" id="book-title" placeholder="Название фильма" required />
            <label for="movie-status">Отметить как просмотренный:</label>
            <label class="switch">
                <input type="checkbox" id="movie-status">
                <span class="slider"></span>
            </label>
            <button type="submit">Добавить фильм</button>
          </form>
        </div>
      `;
    }

  
    #handleSubmit(event) {
      event.preventDefault();
      const title = this.element.querySelector('#book-title').value;

      if (this.#onSubmit) {
        this.#onSubmit({ title, });
      }
      
      
      
      // Сбрасываем форму после отправки
      event.target.reset();
    }
  }