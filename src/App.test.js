import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getAppStore from './redux/store/store';
import {Provider} from 'react-redux'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import {BrowserRouter} from 'react-router-dom';

const store = getAppStore();

test('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
