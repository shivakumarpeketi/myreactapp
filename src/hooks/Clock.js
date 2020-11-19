import React, { useState, useEffect, useRef } from 'react'

function Clock() {
    const [stopClock, setStopClock] = useState(false)
    const [seconds, setSeconds] = useState(10)
    const [minutes, setMinutes] = useState(0)

    const updateSeconds = () => {
        setSeconds((prevSeconds) => {
            if (prevSeconds === 59) {
                updateMinutes();
                return 0;
            } else {
                console.log("SECOND: "+ seconds + " PREVIOUS: "+ prevSeconds)
                return prevSeconds + 1;
            }
        })
        console.log("##SECOND: "+ seconds)
    }

    const updateMinutes = () => {
        setMinutes(prevMinutes => prevMinutes + 1)
    }
    let interval = useRef();
    useEffect(() => {
        console.log("Stop watch Running...! ")
        interval.current = setInterval(updateSeconds, 1000);
    }, [])

    useEffect(() => {
        if (stopClock) {
            console.log("watch Stopped Displaying: " + stopClock)
            clearInterval(interval.current)
        }
    }, [stopClock])

    return (
        <>
            <h2> Stop Watch</h2><br />
            <h1>{minutes}:{seconds}</h1>
            <div><button onClick={() => setStopClock(true)} >Stop</button>
            </div>
        </>
    )
}

export default Clock
