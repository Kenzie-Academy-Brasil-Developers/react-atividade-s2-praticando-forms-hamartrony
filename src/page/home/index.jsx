import { Link } from "react-router-dom"
import './styles.css'

function Home ({cadastro}){
    console.log(cadastro)


    return (
    <div>
        <h1>home</h1>
        <h2>{cadastro.name}</h2>
        <p className="home">{cadastro.email}</p>
        <p className="home">{cadastro.tel}</p>
        <p className="home">{cadastro.cidade}</p>
        <Link to="/">Voltar Cadastro</Link>
    </div>
    )
}

export default Home

