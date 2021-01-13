import React from 'react'
import { Link } from 'react-router-dom'

export default function PaginaInicial () {

    return (
        <section className="jumbotron-fluid mb-4">
            <h1 className="text-dark text-center pt-3">Seja bem vindo(a) !</h1>

            <div className="container d-flex flex-column">

                <div className="jumbotron my-4 d-flex align-items-start flex-wrap" style={{background: "url('/images/index_img.jpg') no-repeat center"}}>
                    <h3 className="text-center ml-3"><strong>A loja de acessórios que presta o melhor serviço !</strong></h3>

                    <div className="mx-auto d-flex justify-content-center m-4">
                        
                        <Link to="/Produtos" className="btn btn-lg btn-outline-primary text-succes">
                            <strong>Confira nossos produtos</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}