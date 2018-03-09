import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from "./util/session_api_util";
import configureStore from "./store/store";
import Root from "./components/root";
import { getArtist } from "./actions/artist_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: { users: { [window.currentUser.id]: window.currentUser } }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.getArtist = getArtist;
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
