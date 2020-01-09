import React from 'react';
import {Helmet} from 'react-helmet';
import {
  Link
} from 'react-router-dom';

function Article(data) {
  const obj = {};
  Object.assign(obj, data.data[2]);
  const objFin = {};
  Object.assign(objFin, obj.fields);
  
  return (
    <div>
      <Helmet>
        <title>{objFin.ArticleName}</title>
        <meta name="description"
              content="Helmet application"/>
      </Helmet>
      <div dangerouslySetInnerHTML={{__html: objFin.Content}}>
      </div>
      <Link to="/">Главная</Link>
    </div>);
}

export default Article;
