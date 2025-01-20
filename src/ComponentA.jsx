import { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";
export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("Bhushan");
    return(
        <>
            <div className="box">
                <h2>ComponentA</h2>
                <h3>Hello {user}</h3>
                <UserContext.Provider value={user}>
                    <ComponentB></ComponentB>
                </UserContext.Provider>
            </div>
        </>
    )
}

export default ComponentA;