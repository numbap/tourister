import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import getAppStore from './redux/store/store';
import {BrowserRouter} from 'react-router-dom';
import database from './firebase/firebase';

const store = getAppStore();


ReactDOM.render(
    <div>Loading...</div>, 
    document.getElementById('root'));


database.ref('locations')
.once('value')
.then((snapShot) => {
    console.log(snapShot.val())
    var arraySnap = []
    snapShot.forEach(x => {
        arraySnap.push(x.val())
    }) 
    store.dispatch({type: 'SET_LOCATIONS', locations: arraySnap}) 
})
.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>, 
        document.getElementById('root'));
})
.catch((e) => console.log(e))

database.ref('spots')
.once('value')
.then((snapShot) => {
    console.log(snapShot.val())
    var arraySnap = []
    snapShot.forEach(x => {
        arraySnap.push(x.val())
    })
    store.dispatch({type: 'SET_SPOTS', spots: arraySnap})
})
.catch((e) => console.log(e))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
