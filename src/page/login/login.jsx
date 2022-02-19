import { Link } from "react-router-dom"


function Login(){
    return(
        <>
            <h2>Faça seu Login!</h2>
            <input placeholder="User"></input>
            <input placeholder="Senha"></input>
            <Link to="/" className="return">Voltar</Link>
        </>
    )
    
}

export default Login