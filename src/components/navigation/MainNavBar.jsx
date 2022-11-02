import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function MainNavBar(props) {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to={'/'} className={'navbar-brand'}>SecMe</Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <>
                                <Link to={'/'} className={'nav-link disabled m-1'}>{user.name}</Link>
                                <Link to={'/dashboard'} className={'nav-link btn btn-secondary m-1'}>Dashboard</Link>
                                <button
                                    onClick={() => logout({returnTo: window.location.origin})}
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
