import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import Homepage from 'scenes/homepage';
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

function App(){
  const mode = useS
  return <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={<LoginPage/>} />
      <Route path="/profile/:userId" element={<ProfilePage/>} />
    </Routes>
    </BrowserRouter>
  </div>
}
export default App;