import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid'
import getAppStore from '../redux/store/store';
import {Provider} from 'react-redux'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import LoginButton from './login/login'
import LocationRowForm from './locations/locationrowform'
import Locations from './locations/locations'
import HomePage from './homepage/homepage'
import HomeRowForm from './homepage/homerowform'
import Header from './header/header'
import Footer from './footer/footer'

const store = getAppStore();

test('LoginButton render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <LoginButton />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })


test('LocationRowForm render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <LocationRowForm />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('Locations render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <Locations />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('HomeRowForm render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <HomeRowForm />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('HomePage render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <HomePage />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('Header render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <Header />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })

test('Footer render test', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
      <Provider store={store}>
        <Footer />
      </Provider>);
    expect(renderer.getRenderOutput()).toMatchSnapshot()
  })