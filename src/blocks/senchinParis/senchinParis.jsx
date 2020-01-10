import React from 'react';
import './senchinParis.scss';
import {Link} from 'react-router-dom';

function SenchinParis(props) {
  return (
    <Link to="/">
      <article className="SenchinParis">
        <h3 className="SenchinParis__Headline">герои сенчина не хотят гулять по парижу</h3>
        <p className="SenchinParis__Description">
          они хотят ныть, бухать и работать охранниками в магните. нам нужно с ними что-то делать.
        </p>
      </article>
    </Link>
  );
}

export default SenchinParis;
