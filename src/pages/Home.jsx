import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container} from "react-bootstrap";
import axios from "axios";

const Home = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    const publicCall = () => {
        axios
            .get('https://sec-me-api.herokuapp.com/api/post/public')
            .then(res => console.log(res))
            .catch(error => console.log(error.message))
    }

    const privateCall = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get('https://sec-me-api.herokuapp.com/api/post/private', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const privateCallScopeAdmin = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get('https://sec-me-api.herokuapp.com/api/post/scopeadmin', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const privateCallScopeManager = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get('https://sec-me-api.herokuapp.com/api/post/scopemanager', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const privateCallScopeWorker = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get('https://sec-me-api.herokuapp.com/api/post/scopeadmin', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Container>
            <div className='justify-content-center align-content-center align-items-center text-center'>
                {isAuthenticated && (
                    <div>
                        <img src={user.picture} alt={user.name}/>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <br/>
                        <br/>
                        <pre style={{textAlign: "start"}}>{JSON.stringify(user, null, 2)}</pre>
                    </div>
                )}
                <h3>User is {isAuthenticated ? 'authenticated' : 'not authenticated'}</h3>

                <Button onClick={publicCall}>Message Public</Button>
                <Button onClick={privateCall}>Message Private</Button>
                <Button onClick={privateCallScopeAdmin}>Scope Admin</Button>
                <Button onClick={privateCallScopeManager}>Scope Manager</Button>
                <Button onClick={privateCallScopeWorker}>Scope Worker</Button>
            </div>
        </Container>
    );
};

export default Home;
