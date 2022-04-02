import "./index.css"
export default function RestrictedPage({isLoggedIn, user, Login, Logout}){
    return(
        <div className="userArea">
            {isLoggedIn 
                ?
                <div className="user__msg">
                    <h1>Bem-vindo, {user}!</h1>
                    <button onClick={Logout}>Deslogar</button>
                </div>
                :
                <div className="user__msg">
                    <h1>Você não pode acessar essa página.</h1> 
                    <button onClick={Login}>Logar</button>
                </div>
                
            }
        </div>
    )
}