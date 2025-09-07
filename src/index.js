// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";



// ReactDOM.render(<App />, document.getElementById("root"));


// my code

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// ---------------- Redux ----------------
const initialState = { name: "", email: "" };

const setName = (name) => ({ type: "SET_NAME", payload: name });
const setEmail = (email) => ({ type: "SET_EMAIL", payload: email });

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

const store = createStore(userReducer);

// ---------------- Component ----------------
const UserInfo = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state);

  return (
    <div>
      <h1>User Information</h1>
      <form>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </form>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

// ---------------- Render ----------------
ReactDOM.render(
  <Provider store={store}>
    <UserInfo />
  </Provider>,
  document.getElementById("root")
);
