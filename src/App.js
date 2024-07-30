import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./user/components/Users";
import NewPlace from "./places/components/NewPlace";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Users/>}></Route>
        <Route  path="/places/new" element={<NewPlace/>}></Route>
        <Route path="*" element = {<Navigate to="/" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
