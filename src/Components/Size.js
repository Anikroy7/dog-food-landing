import React from 'react';

const Size = () => {
    return (
        <div>
            <p className='mb-2 mt-2'>Size: <b>15 Round (Pack of 1)</b></p>
            <button className="border-2 block p-1 px-5">
                <b>7 Round (Pack of 1)</b>
            </button>
            <button className="border-2 p-1 mt-2 block px-5">
                <>15 Round (Pack of 1)</>
            </button>
            <button className="border-2 p-1 mt-2 px-5">
                <>30 Round (Pack of 1)</>
            </button>
            <button className="border-2 p-1 mb-6 mt-2 block px-5">
                <>38.5 Round (Pack of 1)</>
            </button>
            <button className="border-2 p-1 mb-6 mt-2 block px-5">
                <>40 Round (Pack of 1)</>
            </button>
        </div>
    );
};

export default Size;