import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import StatsScreen from "./components/statsScreen/Stats.jsx";
import LoginScreen from "./components/loginScreen/LoginScreen.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={ <App /> } />
        <Route path="/stats" element={ <StatsScreen /> } />
        <Route path="/login" element={ <LoginScreen /> } />
      </Routes>
    </BrowserRouter>
  </UserProvider>
);

