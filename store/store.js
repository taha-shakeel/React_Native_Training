import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../store/reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;

// import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//         {
//           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }
//       )
//     : compose;

// const middleware = [thunk];
// // Put condition to not use logger in production
// middleware.push(createLogger());

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware)
//   // other store enhancers if any
// );
