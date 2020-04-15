import React from 'react';
import ReactDOM from 'react-dom';

import StyleProvider from './StyleProvider';

import App from './App';

const Root = () => {
  return (
    <StyleProvider>
      <App />
    </StyleProvider>
  );
};

//console.log('REact dom', ReactDOM);
ReactDOM.render(<Root />, document.getElementById('root'));
