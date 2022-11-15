/**
 * SSD - SecMe API
 *
 * @Author IT19180526 - S.A.N.L.D. Chandrasiri
 * @Description This file for Auth service check the user is authenticated or not and RBAC
 * @Version 1.0
 */

import React, {useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {Button, Container} from "react-bootstrap";

import AuthService from "../../services/AuthService";
import DashNavBar from "../navigation/DashNavBar";

function Auth(props) {
    const {isLoading, getAccessTokenSilently} = useAuth0();
    const [responseMessage, setResponseMessage] = useState();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    const publicCall = async () => {
        await AuthService.publicCall()
            .then(res => {
                console.log(res.data);
                setResponseMessage(res.data.post);
            })
            .catch(err => {
                console.log(err.message);
                setResponseMessage(err.message);
            });
    }

    const privateCall = async () => {
        try {
            const token = await getAccessTokenSilently();
            await AuthService.privateCall(token)
                .then(res => {
                    console.log(res.data);
                    setResponseMessage(res.data.post);
                })
                .catch(err => {
                    console.log(err.message);
                    setResponseMessage(err.message);
                });
        } catch (error) {
            console.log(error.message);
        }
    }

    const privateCallScopeAdmin = async () => {
        try {
            const token = await getAccessTokenSilently();
            await AuthService.privateCallScopeAdmin(token)
                .then(res => {
                    console.log(res.data);
                    setResponseMessage(res.data.post);
                })
                .catch(err => {
                    console.log(err.message);
                    setResponseMessage(err.message);
                });
        } catch (error) {
            console.log(error.message)
        }
    }

    const privateCallScopeManager = async () => {
        try {
            const token = await getAccessTokenSilently();
            await AuthService.privateCallScopeManager(token)
                .then(res => {
                    console.log(res.data);
                    setResponseMessage(res.data.post);
                })
                .catch(err => {
                    console.log(err.message);
                    setResponseMessage(err.message);
                });
        } catch (error) {
            console.log(error.message)
        }
    }

    const privateCallScopeWorker = async () => {
        try {
            const token = await getAccessTokenSilently();
            await AuthService.privateCallScopeWorker(token)
                .then(res => {
                    console.log(res.data);
                    setResponseMessage(res.data.post);
                })
                .catch(err => {
                    console.log(err.message);
                    setResponseMessage(err.message);
                });
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Container>
            <h1 className='text-uppercase'>Dashboard</h1>
            <DashNavBar/>

            <div className='justify-content-center align-content-center align-items-center text-center pt-5 pb-5'>
                <div>
                    <h2>Auth Configuration</h2>
                </div>
                <div className={'pt-5'}>
                    <Button onClick={publicCall}>Message Public</Button>
                    <Button onClick={privateCall}>Message Private</Button>
                    <Button onClick={privateCallScopeAdmin}>Scope Admin</Button>
                    <Button onClick={privateCallScopeManager}>Scope Manager</Button>
                    <Button onClick={privateCallScopeWorker}>Scope Worker</Button>
                </div>
                <div className={'pt-5'}>
                    <h4>{responseMessage}</h4>
                </div>
            </div>
        </Container>
    );
}

export default Auth;
