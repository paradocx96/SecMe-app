import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import PostService from "../services/PostService";

const Home = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    const publicCall = async () => {
        await PostService.publicCall(getAccessTokenSilently);
    }

    const privateCall = async () => {
        await PostService.privateCall(getAccessTokenSilently);
    }

    const privateCallScopeAdmin = async () => {
        await PostService.privateCallScopeAdmin(getAccessTokenSilently);
    }

    const privateCallScopeManager = async () => {
        await PostService.privateCallScopeManager(getAccessTokenSilently);
    }

    const privateCallScopeWorker = async () => {
        await PostService.privateCallScopeWorker(getAccessTokenSilently);
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

                <Link to={"/messages"}>Messages RLW</Link>
            </div>
        </Container>
    );
};

export default Home;
