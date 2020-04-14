import React from 'react';
import ReactDOM from 'react-dom';

import StyleProvider from './StyleProvider';

import App from './app';

const Root = () => {
  return (
    <StyleProvider>
      <App />
    </StyleProvider>
  );
};

//console.log('REact dom', ReactDOM);
ReactDOM.render(<Root />, document.getElementById('root'));
