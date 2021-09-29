import React, { useRef, useState, useEffect } from "react";

const now = new Date().valueOf()

export const Timer = ({ text, date }) => {
    const startDate = new Date(date).valueOf()

    const initial = Math.floor((now-startDate)/10000)

    const [time, setTime] = useState(initial);
    const secondsPassed = useRef(initial);

    useEffect(() => {
        const timeout = setTimeout(() => {
        // const date = new Date()
        secondsPassed.current = secondsPassed.current + 1;
        setTime(secondsPassed.current);
        }, 1000);
        return () => {
        clearTimeout(timeout);
        }
    }, [time]);

    return (
        <div className="timer-container">
            <h3>{text}: {time} seconds</h3>
        </div>
    )
}