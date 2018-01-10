import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
