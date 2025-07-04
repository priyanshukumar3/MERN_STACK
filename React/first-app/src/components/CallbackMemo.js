import React, { useState } from 'react'

function CallbackMemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleCounterOne = () => {
        setCounterOne(prev => prev + 1);
    };
    const handleCounterTwo = useCallback(() => {
        setCounterTwo(prev => prev + 1);
    }, [counterTwo]);
    return(
        <main>
            <h1>UseCallback Demo</h1>
            <Title text={counterOne} />
            <Button btnText={"counterOne"} handleClick={handleCounterOne} />
            <Title text={counterTwo} />
            <Button btnText={"counterTwo"} handleClick={handleCounterTwo} />
        </main>
    )
}

export default CallbackMemo;


