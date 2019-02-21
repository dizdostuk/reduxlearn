import React from "react";
import { createStore } from "redux";


function playlist(state = [], action) {
  if(action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);

const btn = document.getElementById("button");
const list = document.querySelectorAll(".list")[0];
const trackInput = document.querySelectorAll(".trackInp")[0];



store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement("li");
    li.textContent = track;
    list.appendChild(li);
  })
})

btn.addEventListener("click", () => {
  const trackName = trackInput.value;
  store.dispatch({ type: 'ADD_TRACK', payload: trackName});
})

const App = () => {
  return (
    <div>
      <input type="text" className="trackInp" />
      <button id="button">Submit</button>
      <ul className="list" />
    </div>
  );
};

export default App;
