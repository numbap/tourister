import { createSelector } from 'reselect';

const selectSpots = state => state.spots;

export const selectSpotsById = spotsUrlParam =>
  createSelector(
    [selectSpots],
    spots => spots.filter(x => x.location === spotsUrlParam)
  );