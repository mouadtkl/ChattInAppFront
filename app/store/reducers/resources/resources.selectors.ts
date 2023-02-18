export const countriesSelector = (state) =>
  state.resources.countries.map(({ nationality, code }) => ({
    label: nationality,
    value: code,
  }));

export default {
  countriesSelector,
};
