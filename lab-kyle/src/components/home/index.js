import './_home.scss';

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

class Home extends React.Component {
  render(){
    return (
      <div>
        <h1>Home!</h1>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    )
  }
}
export default Home;
