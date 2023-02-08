import React from 'react';
import { useState } from "react";
import HeaderHook from './HeaderHook';



const ContainerHook = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShow(!show)}
            >
                <h3>SHOW</h3>
            </button>
            {show && <HeaderHook />}
        </div>
    )
}

export default ContainerHook;