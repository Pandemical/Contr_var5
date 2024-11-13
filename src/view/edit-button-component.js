import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class EditButtonComponent extends AbstractComponent {
  constructor({ onEdit }) {
    super();
    this._onEdit = onEdit;
    this.element.addEventListener('click', this._handleEditClick.bind(this));
  }

  get template() {
    return `<button class="edit-button">Редактировать</button>`;
  }

  _handleEditClick(evt) {
    evt.preventDefault();
    const newTitle = prompt('Введите новое название фильма:');
    const newGenre = prompt('Введите новый статус фильма:');
    if (newTitle && newGenre) {
      this._onEdit(newTitle, newGenre);
    }
  }
}
