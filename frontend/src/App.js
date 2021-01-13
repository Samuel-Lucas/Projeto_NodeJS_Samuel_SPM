import React, { useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Index from './paginas/Index'
import Lojas from './paginas/Lojas'
import FaleConosco from './paginas/FaleConosco'
import Produtos from './paginas/Produtos'

export default class App extends React.Component {

  constructor() {
    super();
    this.state=({
      db: []
    });
    this.exibirProdutos();
  }

  exibirProdutos() {
    fetch("http://localhost:3001/produtos")
    .then((response) => response.json())
    .then((responseJson) =>
    {
      this.setState({
        db: responseJson
      });
      console.log(this.state.db)
    })
  }

  render() {
    return (
        <div>
          <Header />
          <Switch>
                <Route exact path="/">
                  <Redirect to="/Index" />
                </Route>
                <Route path="/Index" component={Index}/>
                <Route path="/Produtos" render={() => <Produtos arrayProdutos={this.state.db} /> } />
                <Route path="/Lojas" component={Lojas}/>
                <Route path="/Fale-Conosco" component={FaleConosco}/>
              </Switch>
          <Footer />
        </div>
      )
    }
}