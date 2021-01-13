import React from 'react'
import { exibirCategoria } from '../script/Script'

export default class Produtos extends React.Component {

    render() {
        return (
            <section>

                <div className="container">
                    <div className="row d-flex flex-nowrap">
                        <div className="col-md-3 lista w-50">
                            <h4>Categorias</h4>

                            <ul id="listaCategoria" className="list-group">
                                <li className="list-group-item active border" onClick={(e) => exibirCategoria(e, 'todos')}>Todos</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'computadores')}>Computadores</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'notebooks')}>Notebooks</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'videogames')}>Videogames</li>
                                <li className="list-group-item" onClick={(e) => exibirCategoria(e, 'acessorios')}>Acessórios</li>
                            </ul>  
                        </div>

                        <div id="container">

                            {this.props.arrayProdutos.map( row =>

                                <div id={row.categoria} className="card border-0 mt-2" style={{maxWidth: '16rem'}}>
                                    <img className="card-img-top" src={row.imagem} className="img-fluid"/>
                                    <div className="card-body">
                                        <p className="card-text border-bottom">{row.descricao}</p>
                                        <p><del>R$ {row.preco}</del></p>
                                        <p className="preco_descontado">R$ {row.preco_venda}</p>
                                        <a href="#" class="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}