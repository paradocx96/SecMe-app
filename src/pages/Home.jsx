import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Col, Container, Row, Table} from "react-bootstrap";
import AddMessage from "../components/messages/AddMessage";
import MessagesList from "../components/messages/MessagesList";

const Home = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        // console.log(JSON.stringify(user, null, 2));
        console.log(user);
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
                                            <h2>{user['https://secme-api.azurewebsites.net/roles']}</h2>
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

                <div>
                    {
                        isAuthenticated ?
                            <div>
                                <AddMessage/>
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
