import React, { useState } from "react";

function Form() {
    const [name, setname] = useState("")
    console.log("Form Component Rendered!")

    const handleChange = (e) => {
        const lastChar = e.target.value.charAt(e.target.value.length - 1);
        console.log(e.target.value.charAt);
        if(e.target.value >= 0 && e.target.value <=9) {
            alert("Number is a invalid input!");
            return;
        }
        console.log(e.target.value);
        setname(e.target.value);
    };
    return (
        <main>
             <h1>Student Form</h1>
            <label htmlFor="Name">Name:</label>
            <input value={name} placeholder="Name" type="text" onChange={handleChange} />
        </main>
       
    );
}

export default Form;