import { combineReducers } from "redux";

import counter from "@redux/slices/counter";
import formData from "@redux/slices/formData";

const rootReducer = combineReducers({ counter, formData });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
