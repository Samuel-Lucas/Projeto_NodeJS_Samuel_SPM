import React from 'react'
import { Link } from 'react-router-dom'
import { corPreta, corBranca} from '../script/Script'

export default function Header() {

    return(
      <header>
        <nav className="navbar navbar-expand-sm">

            <div className="container">

                <Link to="/Index" className="logo">
                    <h3>Games<br /><i>Shelter</i></h3>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navPrincipal">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navPrincipal">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item menu_item">
                                <Link to="/Produtos" onMouseOver={event => corPreta(event)} onMouseOut={event => corBranca(event)}>
                                    <h4>Produtos</h4>
                                </Link>
                            </li>

                            <li className="nav-item menu_item">
                                <Link to="/Lojas" onMouseOver={event => corPreta(event)} onMouseOut={event => corBranca(event)}>
                                    <h4>Lojas</h4>
                                </Link>
                            </li>

                            <li className="nav-item menu_item">
                                <Link to="/Fale-Conosco" onMouseOver={event => corPreta(event)} onMouseOut={event => corBranca(event)}>
                                    <h4>Fale conosco</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
      </header>
    )
}