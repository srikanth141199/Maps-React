import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace/UpdatePlace";
import Auth from "./user/pages/Auth/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useCallback, useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  const login = useCallback(()=>{setIsLoggedIn(true)}, []);
  const logout = useCallback(()=>{setIsLoggedIn(false)},[])
  return (
    <AuthContext.Provider value = {{isLoggedIn : isLoggedIn, login : login, logout : logout}}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route
              path="/:userId/places"
              element={<UserPlaces />}
              exact
            ></Route>
            <Route path="/places/new" element={<NewPlace />}></Route>
            <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
