import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  status: false,
};

function profileOpenReducer(state, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        status: action.payload,
      };
    default:
      throw new Error("not found");
  }
}

const ProfileStateContext = createContext(null);
const ProfileDispatchContext = createContext(null);

export function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileOpenReducer, initialState);
  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileDispatchContext.Provider>
    </ProfileStateContext.Provider>
  );
}

export function useProfileState() {
  const state = useContext(ProfileStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useProfileDispatch() {
  const dispatch = useContext(ProfileDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
