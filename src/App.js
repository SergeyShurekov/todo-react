import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/firebasseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route exact path={'/'} Component={Home} />
              <Route path={'/about'} Component={About} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
