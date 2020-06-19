import { AsyncStorage } from "react-native";
import axios from "axios";
import { handleRequests, RequestAction } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware, combineReducers, createStore, Store } from "redux"; // or another driver
import beer from "./beer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

function onRequest(request: { params: object; }, action: RequestAction, store: Store) {
  // do sth with you request, like add token to header, or dispatch some action etc.
  request.params = {
    key: "8a2f13c8d94f57c4f860aed409aa6ef1",
  };
  return request;
}

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(
    axios.create({
      baseURL: "https://sandbox-api.brewerydb.com/v2",
    })
  ),
  onRequest,
});

const reducers = combineReducers({
  requests: requestsReducer,
  beer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...requestsMiddleware))
);

export const persist = persistStore(store);
