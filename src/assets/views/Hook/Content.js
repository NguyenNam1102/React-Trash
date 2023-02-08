import { memo } from 'react';


function Content({ onIncrease }) {
    console.log('re-render')
    return (
        <>
            <h3>Hook</h3 >
            <button onClick={onIncrease}> Click me!</button>
        </>
    )
}

export default memo(Content)