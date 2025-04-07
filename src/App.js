import ToDoList from './ToDo';
import Nav from './nav';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
  items: [
      {id: 1, title: "Python Class", description: "Have to take a python class tomorrow", status: false},
      {id: 2, title: "Python Class thursday", description: "Have to take a python class tomorrow", status: false}
  ]
};

// 🔥 Reducer - Only manages state, doesn't handle methods directly
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_ITEMS':
          return { ...state, items: action.payload };
      default:
          return state;
  }
};
// 🔥 Create Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div>
      <Nav />
    <ToDoList />
    </div>
  );
}

export default App;
