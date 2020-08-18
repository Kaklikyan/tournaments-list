// load data from localStorage, if exists
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userTournaments");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err)
  }
};

// store item in localStorage, by dynamic key
export const saveStateItem = (itemName, stateItem) => {
  try {
    const serializedState = JSON.stringify(stateItem);
    localStorage.setItem(itemName, serializedState);
  } catch (err) {
    console.error(err)
  }
};
