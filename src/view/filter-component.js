import { AbstractComponent } from '../framework/view/abstract-component.js';
import { Genrelabel } from '../const.js';

export default class FilterComponent extends AbstractComponent {
  #onGenreChange = null;

  constructor(onGenreChange) {
    super();
    this.#onGenreChange = onGenreChange;
    this.element.querySelector('#genre-filter').addEventListener('change', this.#handleGenreChange.bind(this));
  }

  get template() {
    return `
      <div class="filter">
        <select id="genre-filter">
          <option value="">Все</option>
          ${Object.keys(Genrelabel).map(genre => `
            <option value="${genre}">${Genrelabel[genre]}</option>
          `).join('')}
        </select>
      </div>
    `;
  }

  #handleGenreChange(event) {
    const selectedGenre = event.target.value;
    if (this.#onGenreChange) {
      this.#onGenreChange(selectedGenre);
    }
  }
  
}
