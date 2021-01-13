import React from 'react'

export default function FaleConosco () {

    return (
    <section className="mb-3">
        <div className="container mt-3 border-bottom">
            <h2 className="text-secondary">Fale Conosco</h2>
        </div>

        <div className="container mt-4">
            <div className="row d-flex justify-content-around">

                <div className="col-md-4 d-flex flex-column">
                    <img src="/images/mail.png" width="23%" className="img-fluid mx-auto"/>
                    <p className="text-center font-weight-bold">games.shelter@hotmail.com</p>
                </div>

                <div className="col-md-4 d-flex flex-column">
                    <img src="/images/whats.jpg" width="25%" className="img-fluid mx-auto"/>
                    <p className="text-center font-weight-bold">(11) 94444-4444</p>
                </div>
            </div>
        </div>

        <div className="container d-flex justify-content-center mt-4">
            <form>
                <label><b>Nome:</b></label><br/>

                <input type="text" className="form-control" style={{width: '320px', height:'30px'}} placeholder="Digite seu nome"/><br/>

                <label><b>Mensagem:</b></label><br/>

                <textarea className="form-control" placeholder="Escreva sua mensagem" cols="30" rows="5" style={{width: '320px'}}></textarea><br/>

                <a className="btn btn-success" href="#">Enviar</a>
            </form>
        </div>
    </section>
    );
}