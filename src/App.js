import "./App.css";
import UserContext from "./context/UserContext";
import Routers from "./routers/Routers";

function App() {
  return (
    <div className="App">
      <UserContext>
        <Routers />
      </UserContext>
    </div>
  );
}

export default App;
