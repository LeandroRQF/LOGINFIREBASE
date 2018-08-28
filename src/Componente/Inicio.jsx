import React, { Component } from 'react';
import { Container, Header, Segment, Card, Button, CardContent } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import config, { auth, providers } from './../firebase-config';

import Navegacao from './Navegacao';
import PaginaTeste from './PaginaTeste';

class Inicio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: {},
            estaLogado: false
        }

        auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                console.log(usuario);
                this.setState({
                    usuario,
                    estaLogado: true
                })
            }
            else {
                console.log('Não foi possível realizar o login!');
                this.setState({
                    estaLogado: false
                })
            }
        })
    }

    autentica(provider) {
        console.log(provider)
        auth.signInWithPopup(providers[provider])
        console.log(provider)
    }

    render() {
        return (            
            <div>
                <Navegacao />

                <Container>
                    <Segment>
                        <h2>LOGIN DO USUÁRIO</h2>
                    </Segment>

                    <Header>
                        Página destinada a realização de login, deixando disponível diversas opções de login para o usuário
                </Header>
                    {
                        !this.state.estaLogado &&
                        <Card fluid>
                            <CardContent>
                                Clique em uma das opções abaixo para realizar o login
                            </CardContent>

                            <CardContent>                            
                                <button
                                    className='ui facebook button'
                                    role='button'
                                    onClick={() => this.autentica('facebook')}>
                                    <i aria-hidden='true' className='facebook icon' />Facebook</button>

                                <button
                                    className='ui twitter button'
                                    role='button'
                                    onClick={() => this.autentica('twitter')}>
                                    <i aria-hidden='true' className='twitter icon' />Twitter</button>

                                <button
                                    className='ui google plus button'
                                    role='button'
                                    onClick={() => this.autentica('google')}>
                                    <i aria-hidden='true' className='google plus icon' />Google Plus</button>

                                <button
                                    className='ui github button'
                                    role='button'
                                    onClick={() => this.autentica('github')}>
                                    <i aria-hidden='true' className='github icon' />GitHub</button>

                            </CardContent>
                        </Card>
                    }
                    {
                        this.state.estaLogado &&
                        <div>
                            <h3>{this.state.usuario.displayName}</h3>
                            <img src={this.state.usuario.photoURL} />
                        </div>
                    }
                </Container>

            </div>
        )
    }
}

export default Inicio;