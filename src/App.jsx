import { Route, Routes } from "react-router-dom";
//Context
import AuthContextProvider from "./context/AuthContextProvider";
//Components
import Login from "./components/Login";
import Chats from "./components/Chats";
//Style
import "./App.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/chat-app" element={<Login />} />
          <Route path="/chat-app/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
