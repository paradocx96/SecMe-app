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
                        {isAuthenticated && (
                            <Link to={'/'}>{user.name}</Link>
                        )}
                        <Link to={'/dashboard'} className={'nav-link'}>Dashboard</Link>
                        <button onClick={loginWithRedirect}
                                className={'nav-link btn btn-secondary mx-1'}>LogIn
                        </button>
                        <button
                            onClick={() => logout({returnTo: window.location.origin})}
                            className={'nav-link btn btn-secondary'}>LogOut
                        </button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavBar;
