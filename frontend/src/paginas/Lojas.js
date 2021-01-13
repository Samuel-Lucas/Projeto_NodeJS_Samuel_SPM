import React from 'react'

export default function Lojas () {

    return (
        <section className="mb-2">
            <div className="container mt-3 border-bottom">
                <h2 className="text-secondary">Localização das nossas lojas</h2>
            </div>

            <div className="container mt-4">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-3">
                        <p><b>São Paulo</b></p>
                        <p>Avenida Paulista, 985 <br/><br/>3º andar <br/><br/>Jardins <br/><br/>(11) 4444-4444</p>
                    </div>

                    <div className="col-md-3">
                        <p><b>Rio de Janeiro</b></p>
                        <p>Avenida Presidente Vargas, 5000 <br/><br/>10º andar <br/><br/>Centro <br/><br/>(21) 3333-3333</p>
                    </div>

                    <div className="col-md-3">
                        <p><b>Santa Catarina</b></p>
                        <p>Rua Major Ávila, 370 <br/><br/>7º andar <br/><br/>Vila Mariana <br/><br/>(47) 1010-1010</p>
                    </div>
                </div>
            </div>
        </section>
    );
}