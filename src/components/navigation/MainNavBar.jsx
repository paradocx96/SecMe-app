import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function MainNavBar(props) {
    const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    const setSessionStorage = (email) => {
        sessionStorage.setItem('user-email', email);
    }

    const removeSessionStorage = () => {
        sessionStorage.removeItem('user-email');
        logout({returnTo: window.location.origin})
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to={'/'} className={'navbar-brand'}><h3>SecMe</h3></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <>
                                <Link to={'/'} className={'nav-link disabled m-1'}>{user.name}</Link>

                                {user['https://secme-api.azurewebsites.net/roles'].length === 0 ? (
                                    <Link to={'/dashboard'} className={'nav-link btn btn-secondary m-1 disabled'}
                                          onClick={() => setSessionStorage(user.email)}>Dashboard</Link>
                                ) : (
                                    <Link to={'/dashboard'} className={'nav-link btn btn-secondary m-1'}
                                          onClick={() => setSessionStorage(user.email)}>Dashboard</Link>
                                )}

                                <button
                                    onClick={() => removeSessionStorage()}
                                    className={'nav-link btn btn-secondary m-1'}>Logout
                                </button>
                            </>
                        ) : (
                            <button onClick={loginWithRedirect}
                                    className={'nav-link btn btn-secondary m-1'}>Login
                            </button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;
