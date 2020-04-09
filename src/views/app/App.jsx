import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { history } from '../../helpers/history';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Home } from '../home/Home';
import { useTranslation } from 'react-i18next';

export const App = () => {
    const { t } = useTranslation();
    return (
        <div className="App-Conteiner" data-testid="App-Conteiner">
            <Header></Header>
            <Router history={history}>
                <>
                    <nav
                        className="navbar navbar-expand navbar-dark bg-dark"
                        data-testid="Navegation"
                    >
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link linked">
                                <h2>{t('app_link_home')}</h2>
                            </Link>
                        </div>
                    </nav>
                    <div className="box">
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </>
            </Router>
            <Footer></Footer>
        </div>
    );
};
