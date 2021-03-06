import { combineReducers } from "redux";

import users, { initialUsersState } from "./users";
import questions, { initialQuestionsState } from "./questions";
import auth from "./auth";

export const initialState = {
  users: initialUsersState,
  questions: initialQuestionsState,
  auth: "",
};

export default combineReducers({
  questions,
  users,
  auth,
});
