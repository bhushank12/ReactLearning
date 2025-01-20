import React, {useContext} from 'react';
import {UserContext} from './ComponentA';

function ComponentD() {
    const user = useContext(UserContext);

    return(
        <>
            <div className="box">
                <h2>ComponentD</h2>
                <h2>User: {user}</h2>
            </div>
        </>
    )
}

export default ComponentD;