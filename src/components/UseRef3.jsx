import React, { useEffect, useRef } from 'react';

function UseRef3() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const focusInput = () => {
        const val = inputRef.current.type;
        console.log("val", val);
    };

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Log Input Type</button>
        </>
    );
}

export default UseRef3;
