import React from 'react';
import './MainContactsText.scss';

function MainContactsText() {
  return (
    <div className="MainContactsText">
      <h1>Контакты</h1>
      <h3>Для связи</h3>
      <p>
        Проще всего написать в телеграм создателю проекта Артёму Сошникову: <a href="http://ttttt.me/sayocean">@sayocean</a>
      </p>
      <p>Если вы старовер и не пользуютесь мессенджерами, то пишите на почту: soshnikov🐕︎protonmail.com</p>
      <h3 className="MainContactsText__Headline">Авторам</h3>
      <p>
        Мы не платим денег и тщательно редактируем тексты.
      </p>
      <p>
        Если вы не передумали, то присылайте статью на почту soshnikov🐕︎protonmail.com
      </p>
      <h3 className="MainContactsText__Headline">Сотрудничество и реклама</h3>
      <p>Проект «Чернотроп» — территория, свободная от рыночных отношений.</p>
      <p>Для нас неприемлемо относиться к читателям как к потребителям товаров и услуг, поэтому мы не размещаем рекламу и не занимаемся взаимопиаром.</p>
    </div>
  );
}

export default MainContactsText;
