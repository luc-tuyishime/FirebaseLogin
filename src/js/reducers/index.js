import { ADD_MENU } from "../constants/action-types";


const initialState = {
  menus: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return { ...state, menus: [...state.menus, action.payload] };
    default:
      return state;
  }
};


export default rootReducer;