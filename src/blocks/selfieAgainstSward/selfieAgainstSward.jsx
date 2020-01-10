import React from 'react';
import './selfieAgainstSward.scss';
import {Link} from 'react-router-dom';

function SelfieAgainstSward(props) {
  return (
    <Link to="/">
      <article className="SelfieAgainstSward">
        <h3 className="SelfieAgainstSward__Headline">русская молодёжь одержима путешествиями?</h3>
        <p className="SelfieAgainstSward__Description">
          рассказываем на примерах русской прозы XIX-го века, почему вам уже не хочется заглядывать в
          инстаграм
        </p>
      </article>
    </Link>
  );
}

export default SelfieAgainstSward;
