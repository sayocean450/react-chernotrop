import React, {Component} from 'react';
import Verst from '../Verst/Verst';
import './VerstList.scss';
import SelfieAgainstSward from '../../blocks/selfieAgainstSward/selfieAgainstSward';
import SenchinParis from '../../blocks/senchinParis/senchinParis';
import CarrotsRotterdam from '../../blocks/carrotsRotterdam/carrotsRotterdam';

class VerstList extends Component {
  render() {
    return (
      <div className="VerstList">
        <Verst
          num="вторая"
          headline="классика не нужна?"
          col1={<SelfieAgainstSward />}
          col2={<SenchinParis />}
          col3={<CarrotsRotterdam />}
        />
        <Verst
          num="первая"
          headline="селфи вместо сабли"
          col1={<SelfieAgainstSward />}
          col2={<SenchinParis />}
          col3={<CarrotsRotterdam />}
        />
      </div>
    );
  }
}

export default VerstList;
