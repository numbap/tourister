import React from 'react';
import ReactDOM from 'react-dom';
import getAppStore from './store/store';

import locationsReducer from './reducers/locations'
import spotsReducer from './reducers/spots'
import userReducer from './reducers/user'

const store = getAppStore();

const defaultLocationsState = [
  {
    description: "Lorem Ipsum", 
    id: "61ff4fe4-8903-42b6-ad6b-7575d526fb61",
    lat: 36.99581,
    lng: 27.385137,
    range: 40
  },
  {
    description: "Dolor Sit Amet", 
    id: "61ff4fe4-8903-42b6-ad6b-757fb61",
    lat: 36.79581,
    lng: 27.185137,
    range: 40
  },
  {
    description: "Uspendisse Massa", 
    id: "61ff4fe4-8903-42b6-ad6b-7575dss6fb61",
    lat: 36.59581,
    lng: 27.585137,
    range: 40
  },
  {
    description: "Efficitur Accumsan", 
    id: "61ff4fe4-8903-42b6-7575d526fb61",
    lat: 36.69581,
    lng: 27.685137,
    range: 40
  },
  {
    description: "Dignissim Lorem Pellentesque", 
    id: "61ff4fe4-8903-ad6b-7575d526fb61",
    lat: 36.89,
    lng: 27.98,
    range: 40
  }
]

const defaultSpotsState = [
  {
    description: "Nisi Vulputate Faucibus",
    heading: 182.9106478234114,
    id: "dsaads5fda-0f50-4ae6-97d8-5860375f505",
    lat: 41.41636896433494,
    lng: -77.51648690475601,
    location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
  },
  {
    description: "Ullamcorper Molestie",
    heading: 202.9106478234114,
    id: "hfggfda-0f50-4ae6-97d8-5860375f50",
    lat: 43.41636896433494,
    lng: -73.51648690475601,
    location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
  },
  {
    description: "Non Elit Lacus",
    heading: 192.9106478234114,
    id: "76756567a-0f50-4ae6-97d8-5860375f5",
    lat: 46.41636896433494,
    lng: -89.51648690475601,
    location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
  },
  {
    description: "Quisque Sed",
    heading: 282.9106478234114,
    id: "mmmbda-0f50-4ae6-97d8-5860375f",
    lat: 48.41636896433494,
    lng: -87.51648690475601,
    location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
  },
  {
    description: "Fermentum Erat",
    heading: 152.9106478234114,
    id: "xzcczda-0f50-4ae6-97d8-586037",
    lat: 40.41636896433494,
    lng: -84.51648690475601,
    location: "61ff4fe4-8903-42b6-7575d526fb61"
  },
  {
    description: "Laoreet Libero",
    heading: 252.9106478234114,
    id: "sddsda-0f50-4ae6-97d8-58603",
    lat: 32.41636896433494,
    lng: -81.51648690475601,
    location: "61ff4fe4-8903-42b6-7575d526fb61"
  }
]

const defaultUserState = {
  displayName: '', 
  email: '', 
  emailVerified: false, 
  photoURL: '',
  l: '',
  uid: ''
}


test('Add Location', () => {
  const newLocation =   {
    description: "New Location", 
    id: "1234-5378-9101-1478",
    lat: 99.99581,
    lng: 99.385137,
    range: 99
  }

  const state = locationsReducer(defaultLocationsState, {type: 'ADD_LOCATION', location: newLocation})
  expect(state).toEqual(defaultLocationsState.concat(newLocation))
})


test('Remove Location', () => {

  const state = locationsReducer(defaultLocationsState, {type: 'REMOVE_LOCATION', id: '61ff4fe4-8903-42b6-ad6b-757fb61'})
  expect(state).toEqual([
    {
      description: "Lorem Ipsum", 
      id: "61ff4fe4-8903-42b6-ad6b-7575d526fb61",
      lat: 36.99581,
      lng: 27.385137,
      range: 40
    },
    {
      description: "Uspendisse Massa", 
      id: "61ff4fe4-8903-42b6-ad6b-7575dss6fb61",
      lat: 36.59581,
      lng: 27.585137,
      range: 40
    },
    {
      description: "Efficitur Accumsan", 
      id: "61ff4fe4-8903-42b6-7575d526fb61",
      lat: 36.69581,
      lng: 27.685137,
      range: 40
    },
    {
      description: "Dignissim Lorem Pellentesque", 
      id: "61ff4fe4-8903-ad6b-7575d526fb61",
      lat: 36.89,
      lng: 27.98,
      range: 40
    }
  ])
})

test('Set Locations', () => {
  const state = locationsReducer([], {type: 'SET_LOCATIONS', locations: defaultLocationsState})
  expect(state).toEqual(defaultLocationsState)
})

test('Add spot', () => {
  const newSpot = {
    description: "New Added Spot",
    heading: 111,
    id: "1111-1111-1111-1111-1111",
    lat: 11.11111,
    lng: -11.11111,
    location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
  }

  const state = spotsReducer(defaultSpotsState, {type: 'ADD_SPOT', spot: newSpot})
  expect(state).toEqual(defaultSpotsState.concat(newSpot))
})

test('Remove spot', () => {
  const state = spotsReducer(defaultSpotsState, {type: 'REMOVE_SPOT', id: '76756567a-0f50-4ae6-97d8-5860375f5'})
  expect(state).toEqual([
    {
      description: "Nisi Vulputate Faucibus",
      heading: 182.9106478234114,
      id: "dsaads5fda-0f50-4ae6-97d8-5860375f505",
      lat: 41.41636896433494,
      lng: -77.51648690475601,
      location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
    },
    {
      description: "Ullamcorper Molestie",
      heading: 202.9106478234114,
      id: "hfggfda-0f50-4ae6-97d8-5860375f50",
      lat: 43.41636896433494,
      lng: -73.51648690475601,
      location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
    },
    {
      description: "Quisque Sed",
      heading: 282.9106478234114,
      id: "mmmbda-0f50-4ae6-97d8-5860375f",
      lat: 48.41636896433494,
      lng: -87.51648690475601,
      location: "733a79d9-cc8f-4bf6-87e5-589fa776a6eb"
    },
    {
      description: "Fermentum Erat",
      heading: 152.9106478234114,
      id: "xzcczda-0f50-4ae6-97d8-586037",
      lat: 40.41636896433494,
      lng: -84.51648690475601,
      location: "61ff4fe4-8903-42b6-7575d526fb61"
    },
    {
      description: "Laoreet Libero",
      heading: 252.9106478234114,
      id: "sddsda-0f50-4ae6-97d8-58603",
      lat: 32.41636896433494,
      lng: -81.51648690475601,
      location: "61ff4fe4-8903-42b6-7575d526fb61"
    }
  ])
})

test('Set Spots', () => {
  const state = spotsReducer([], {type: 'SET_SPOTS', spots: defaultSpotsState})
  expect(state).toEqual(defaultSpotsState)
})


test('Log in', () => {
  const state = userReducer(defaultUserState, {type: 'LOG_IN', user: {
    displayName: 'Mr. Smith', 
    email: 'mister@smith.com', 
    emailVerified: true, 
    photoURL: 'http://photos.com',
    l: '54543543534456363',
    uid: 'fds9-0fds-089d-8fs9-8fs8-0dfs'
  }})
  expect(state).toEqual({
    displayName: 'Mr. Smith', 
    email: 'mister@smith.com', 
    emailVerified: true, 
    photoURL: 'http://photos.com',
    l: '54543543534456363',
    uid: 'fds9-0fds-089d-8fs9-8fs8-0dfs'
  })
})


test('Log out', () => {
  const state = userReducer({
    displayName: 'Mr. Smith', 
    email: 'mister@smith.com', 
    emailVerified: true, 
    photoURL: 'http://photos.com',
    l: '54543543534456363',
    uid: 'fds9-0fds-089d-8fs9-8fs8-0dfs'
  }, {type: 'LOG_OUT'})
  expect(state).toEqual(defaultUserState)
})
