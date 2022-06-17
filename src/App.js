import React, {useReducer} from "react"; // useReducer is imported to use reducer
import { Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { TodoContext } from "./context/TodoContext";
import TodoReducer from "./context/reducer"
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch /* 1 */] = useReducer(TodoReducer, [] /* 2 */) //useReducer function takes the reducer and the initial state /* 2 */ and returns the newState and a method called dispatch /* 1 */
  return (
    <TodoContext.Provider value={{todos, dispatch}}> {/* this puts the todos and the dispatch method on the context which can be accessed by the other components */}
      <Container fluid>
        <h1>Todo app with context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
