import { createSelector } from 'reselect';

const selectLocations = state => state.locations;

export const selectLocationById = locationUrlParam =>
  createSelector(
    [selectLocations],
    locations => locations.filter(x => x.id === locationUrlParam)
  );