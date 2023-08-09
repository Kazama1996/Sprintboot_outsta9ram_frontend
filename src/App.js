import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./Pages/Main/Main";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import TestPage from "./Pages/Test/TestPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" Component={MainPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/resetPassword" Component={ResetPasswordPage} />

          <Route path="/test" Component={TestPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
