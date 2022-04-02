import { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = "Lucas";
    console.log(isLoggedIn)

    function login(){
        return setIsLoggedIn(true)
    }

    function logOut(){
      return setIsLoggedIn(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={login} Logout={logOut}/>
            </header>
        </div>
    );
}

export default App;
