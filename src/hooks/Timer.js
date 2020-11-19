import React, { useState, useEffect, useRef } from 'react'
import NumberFormat from 'react-number-format';


const defaultResetTimer = {
    seconds: 0,
    minutes: 0,
    stop: false,
    reset: false,
    resume:false
}

function Timer() {
    const [timer, setTimer] = useState({
        seconds: 55,
        minutes: 0,
        stop: false,
        reset: true,
        resume:false
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
        if (timer.stop || !timer.reset) {
            console.log("watch Stopped/Reset action happened: ")
            clearInterval(interval.current)
        }
    }, [timer.stop, timer.reset])

    useEffect(() => {
        if(timer.resume){
            interval.current = setInterval(updateSeconds, 1000);
        }
    }, [timer.resume])

    return (
        <>
            <h2> Timer</h2><br />
            <h1>{timer.minutes}:<NumberFormat thousandSeparator={true} displayType={'text'} format="##" value={timer.seconds} width="2"/></h1>
            <div>
            <button disabled={!timer.stop} onClick={() => setTimer({
                ...timer,
                resume: true,
                stop:false
            })} >Resume</button>
                <button  disabled={timer.stop} onClick={() => setTimer({
                ...timer,
                stop: true,
                resume: false
            })} >Stop</button>
            <button onClick= { () => setTimer({
                ...defaultResetTimer
            })}>Reset</button>
            
            </div>
        </>
    )
}

export default Timer
