import { createStore } from "redux";

const INITIAL_STATE = {
  heroes: [],
  selectedHero: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setHeroes":
      return { ...state, heroes: [...state.heroes, ...action.payload] };
    case "setHero":
      return { ...state, selectedHero: action.payload };
    default:
      return state;
  }
};

export default createStore(reducer);
