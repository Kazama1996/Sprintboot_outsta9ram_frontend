import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/Main/Main";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import RedirectPage from "./Pages/Test/RedirectPage";
import PageA from "./Pages/Test/PageA";
import PageB from "./Pages/Test/PageB";
import OAuth2RedirectHandler from "./component/OAuthRedirectHandler";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" Component={MainPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/resetPassword" Component={ResetPasswordPage} />
          <Route path="/redirectPage" Component={RedirectPage} />
          <Route path="/pageA" Component={PageA} />
          <Route path="/pageB" Component={PageB} />
          <Route path="/oauth2/redirect" Component={OAuth2RedirectHandler} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
