import React from 'react';

const Stats = () => {
    return (
        <div className="grid ml-24 mt-32 grid-flow-col gap-5 text-center auto-cols-max ">
            <div className="flex flex-col p-2 bg-green-900 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 15 }}></span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2 bg-green-900 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 10 }}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-green-900 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 24 }}></span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-green-900 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": 54 }}></span>
                </span>
                sec
            </div>
        </div>
    );
};

export default Stats;