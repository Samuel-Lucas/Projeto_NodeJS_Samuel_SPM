import React, { useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function Cadastro() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [genero, setGenero] = useState('')
    const [perfil, setPerfil] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrar = () => {
        Axios.post('http://localhost:3001/cadastrar',
        {
            nome: nome,
            sobrenome: sobrenome,
            genero: genero,
            perfil: perfil,
            email: email,
            senha: senha,
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="container p-5 mt-4 mb-3 container_login">
            <div className="logo d-flex justify-content-center mb-4">
                <Link to="/index">
                    <img src="/img/logo_aumentado.jpg" width="160" />
                </Link>
            </div>

            <div className="container">
                <div className="row">

                    <div className="bloco_esquerdo col-md-6 d-flex justify-content-md-end justify-content-sm-center">
                        <img src="/img/img_login.jpg" className="img-login my-auto" width="250" height="200" />
                    </div>

                    <div className="col-md-5 ml-md-3 mt-3">
                        <h3 className="text-center">Crie uma conta</h3>
                        <div className="container">
                            <div className="form-group">

                                <label>Nome: </label><br/>
                                <input type="text" name="nome" className="form-control" placeholder="Digite seu nome"
                                onChange={(e) => {setNome(e.target.value)}} /><br/>

                                <label>Sobrenome: </label><br/>
                                <input type="text" name="sobrenome" className="form-control" placeholder="Digite seu sobrenome"
                                onChange={(e) => {setSobrenome(e.target.value)}} /><br/>

                                <label>Gênero: </label><br/>
                                <span className="m-1"><input type="radio" name="genero" value="masculino" onClick={(e) => {setGenero(e.target.value)}}/> Masculino</span><br/>
                                <span className="m-1"><input type="radio" name="genero" value="feminino" onClick={(e) => {setGenero(e.target.value)}}/> Feminino</span><br/>
                                <span className="m-1"><input type="radio" name="genero" value="outro" onClick={(e) => {setGenero(e.target.value)}}/> Outro</span><br/><br/>
                                
                                <label>Perfil: </label><br/>
                                <select name="perfil" className="form-control" onChange={(e) => {setPerfil(e.target.value)}}>
                                    <option value="">Selecione o seu perfil</option>
                                    <option value="professor">Professor</option>
                                    <option value="coordenador">Coordenador Pedagógico</option>
                                    <option value="gestor">Gestor Escolar</option>
                                </select><br/>

                                <label>E-mail: </label><br/>
                                <input type="email" name="email" className="form-control" placeholder="Digite seu E-mail"
                                onChange={(e) => {setEmail(e.target.value)}} /><br/>

                                <label>Senha: </label><br/>
                                <input type="password" name="senha" className="form-control" placeholder="Digite sua senha"
                                onChange={(e) => {setSenha(e.target.value)}} /><br/>

                                <label>Confirmar Senha:</label><br/>
                                <input type="password" name="confirmasenha" className="form-control" placeholder="Confirme sua senha" /><br/>

                                <button className="btn btn-success btn-block" onClick={cadastrar}>Cadastrar</button>
                            </div>

                            <span>Já tem uma conta ? <Link to="/login" class="text-secondary ml-auto">Fazer login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}