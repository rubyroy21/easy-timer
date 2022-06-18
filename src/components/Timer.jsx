/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)

    var timer;

    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds+1)

            if(seconds === 59){
                setMinutes(minutes+1)
                setSeconds(0);
            }
        },1000)

        return () => clearInterval(timer)
    })

    const restart = () => {
        setSeconds(0)
        setMinutes(0)
    }

    const stop = () => {
        clearInterval(timer)
    }

    const resume = () => {
        timer = setInterval(() => {
            setSeconds(seconds+1)

            if(seconds === 59){
                setMinutes(minutes+1)
                setSeconds(0);
            }
        },1000)
    }
  return (
    <div>
        <h1>Timer</h1>
        <h2>{minutes < 10 ? "0" + minutes: minutes}:{seconds < 10 ? "0" + seconds : seconds}</h2>

        <button onClick={restart}>Restart</button>
        <button onClick={resume}>Resume</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}
