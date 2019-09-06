import { createSelector } from 'reselect';

const Directory = state => state.directory;

export const directoryItems = createSelector(
  [Directory],
  directory => directory.sections
);
