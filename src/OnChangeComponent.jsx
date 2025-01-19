import { useState } from "react";

function OnChangeComponent() {
    const [name, setName] = useState("")

    function handleNameChange(event) {
        setName(event.target.value)
    }
    return(
        <>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>
        </>
    )
}

export default OnChangeComponent;
