import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { Suspense } from "react";
//import Users from "./user/pages/Users";
//import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";
//import UserPlaces from "./places/pages/UserPlaces";
//import UpdatePlace from "./places/pages/UpdatePlace/UpdatePlace";
//import Auth from "./user/pages/Auth/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner/LoadingSpinner";

const Users = React.lazy(() => import("./user/pages/Users"));
const NewPlace = React.lazy(() => import("./places/pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const UpdatePlace = React.lazy(() =>
  import("./places/pages/UpdatePlace/UpdatePlace")
);
const Auth = React.lazy(() => import("./user/pages/Auth/Auth"));

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />} exact></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />} exact></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Navigate to="/auth" />}></Route>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: userId,
        login: login,
        logout: logout,
        token: token,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>{routes}</Routes>
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
