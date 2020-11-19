import React, { useState, useEffect, useRef } from 'react'


function Timer() {
    const [timer, setTimer] = useState({
        seconds: 55,
        minutes: 0,
        stopClock: false
    })

    const updateSeconds = () => {
        setTimer((prevTimer) => {
            if (prevTimer.seconds === 59) {
                return {
                    ...prevTimer,
                    minutes: prevTimer.minutes + 1,
                    seconds: 0
                }
            } else {
                return {
                    ...prevTimer,
                    seconds: prevTimer.seconds + 1
                }
            }
        }
        )
    }


    let interval = useRef();
    useEffect(() => {
        console.log("Stop watch Running...! ")
        interval.current = setInterval(updateSeconds, 1000);
    }, [])

    useEffect(() => {
        if (timer.stopClock) {
            console.log("watch Stopped Displaying: " + timer.stopClock)
            clearInterval(interval.current)
        }
    }, [timer.stopClock])

    return (
        <>
            <h2> Timer</h2><br />
            <h1>{timer.minutes}:{timer.seconds}</h1>
            <div><button onClick={() => setTimer({
                ...timer,
                stopClock: true
            })} >Stop</button>
            </div>
        </>
    )
}

export default Timer
