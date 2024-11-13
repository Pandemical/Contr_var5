import {AbstractComponent} from '../framework/view/abstract-component.js';

function createHeaderComponentTemplate() {
    return `<header><h1>Коллекция фильмов</h1>
            <h4>Используйте эту коллекцию для отслеживания фильмов, которые вы посмотрели или хотите посмотреть. Отмечайте фильмы как просмотренные и фильтруйте по статусу.</h4></header>`;
}

export default class HeaderComponent extends AbstractComponent {
    get template() {
        return createHeaderComponentTemplate();
    }
}