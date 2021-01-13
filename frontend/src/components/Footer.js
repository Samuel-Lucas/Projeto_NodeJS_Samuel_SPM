import React from 'react'


export default function Footer() {

    return(
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 p-3">
                        <h4 style={{fontSize: '20px'}}>Atendimento</h4>
                        <p>De segunda à Sexta-feira<br />9h às 18h (Exceto feriados)</p>

                        <p>(11) 94444-4444<br />games.shelter@hotmail.com</p>
                    </div>

                    <div className="col-md-4">
                        <p className="text-center mr-5" style={{marginTop: '75px', fontSize: '20px', textShadow: '2px 2px black'}}>
                            &copy; Games Shelter
                        </p>  
                    </div>

                    <div className="col-md-4 p-3">
                        <h4 style={{fontSize: '20px'}}>Pague com:</h4>

                        <ul>
                            <li>
                                <img src="/images/banco_inter.png" width="40px" style={{paddingBottom: '5px'}} />
                            </li>
            
                            <li>
                                <img src="/images/american_express.png" width="35px" />
                            </li>
            
                            <li>
                                <img src="/images/visa.jpg" width="40px" style={{paddingBottom: '4px'}} />
                            </li>
            
                            <li>
                                <img src="/images/mastercard.png" width="45px" style={{paddingBottom: '6px'}} />
                            </li>
            
                            <li>
                                <img src="/images/pagseguro.png" width="40px" />
                            </li>
            
                            <li>
                                <img src="/images/elo.png" width="40px" />
                            </li>
            
                            <li>
                                <img src="/images/boleto.png" width="40px" />
                            </li>
                        </ul>

                        <ul>
                            <li><img src="/images/ebit.jpg" width="50px" /></li>
                            <li><img src="/images/compra_segura.jpg" width="55px" style={{paddingBottom: '8px'}} /></li>
                            <li><img src="/images/safe.jpg" width="55px" style={{paddingBottom: '8px'}} /></li>
                        </ul>       
                    </div>
                </div>
            </div>
        </footer>
    )
}