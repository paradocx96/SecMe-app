import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import AuthService from "../services/AuthService";
import AddMessage from "../components/messages/AddMessage";
import MessagesList from "../components/messages/MessagesList";

const Home = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        // console.log(JSON.stringify(user, null, 2));
        console.log(user);
    }

    const publicCall = async () => {
        await AuthService.publicCall(getAccessTokenSilently);
    }

    const privateCall = async () => {
        await AuthService.privateCall(getAccessTokenSilently);
    }

    const privateCallScopeAdmin = async () => {
        await AuthService.privateCallScopeAdmin(getAccessTokenSilently);
    }

    const privateCallScopeManager = async () => {
        await AuthService.privateCallScopeManager(getAccessTokenSilently);
    }

    const privateCallScopeWorker = async () => {
        await AuthService.privateCallScopeWorker(getAccessTokenSilently);
    }

    return (
        <Container>
            <div className='justify-content-center align-content-center align-items-center text-center pt-5 pb-5'>
                {isAuthenticated && (
                    <Container>
                        <Row>
                            <Col>
                                <img src={user.picture} alt={user.name}/>
                            </Col>
                            <Col>
                                <Table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h2>Name: </h2>
                                        </td>
                                        <td>
                                            <h2>{user.name}</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>Email: </h2>
                                        </td>
                                        <td>
                                            <h2>{user.email}</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>Role: </h2>
                                        </td>
                                        <td>
                                            <h2>{user['https://sec-me-api.herokuapp.com/roles']}</h2>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                )}

                <div className={'pt-5'}>
                    <h3>User is {isAuthenticated ? 'authenticated!' : 'not authenticated!'}</h3>
                </div>

                <div className={'pt-5'}>
                    <Button onClick={publicCall}>Message Public</Button>
                    <Button onClick={privateCall}>Message Private</Button>
                    <Button onClick={privateCallScopeAdmin}>Scope Admin</Button>
                    <Button onClick={privateCallScopeManager}>Scope Manager</Button>
                    <Button onClick={privateCallScopeWorker}>Scope Worker</Button>
                </div>

                <div>
                    {
                        isAuthenticated ?
                            <div>
                                <AddMessage />
                                <MessagesList/>
                            </div> :
                            <div>

                            </div>

                    }
                </div>

            </div>
        </Container>
    );
};

export default Home;
