import React from 'react';
import './carrotsRotterdam.scss';
import {Link} from 'react-router-dom';

function CarrotsRotterdam(props) {
  return (
    <Link to="/">
      <article className="CarrotsRotterdam">
        <h3 className="CarrotsRotterdam__Headline">в 2000-м году поэт борис рыжий побывал в нидерландах</h3>
        <p className="CarrotsRotterdam__Description">
          каждый раз, гуляя пьяными по улочкам европы, мы вспоминаем его «роттердамский дневник»
        </p>
      </article>
    </Link>
  );
}

export default CarrotsRotterdam;
