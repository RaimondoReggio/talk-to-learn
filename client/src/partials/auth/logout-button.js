import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const LogoutButton = () => {
    const {logout} = useAuth0();

    return (
        <Button variant="contained" onClick={() => logout({
            returnTo: window.location.origin,
        })}>Log Out</Button>
    );

};

export default LogoutButton;