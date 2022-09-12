import React, { useEffect, useState } from 'react';

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

function Timer({endDate, cb}) {
    const [timer, setTimer] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
    const {days, hours, minutes, seconds} = timer;
    const end = new Date(endDate);

    useEffect(() => {
        const showRemaining =  () => {
            const now = new Date();
            const distance = end - now;
            if (distance > 0) {
                let days = Math.floor(distance / _day);
                let hours = Math.floor((distance % _day) / _hour);
                let minutes = Math.floor((distance % _hour) / _minute);
                let seconds = Math.floor((distance % _minute) / _second);

                const timerClone = {
                    ...timer,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                }

                setTimer(timerClone)
            } else {
                cb()
                clearInterval(timerId)
                return;
            }
        }

        const timerId = setInterval(showRemaining, 1000)

        return () => clearInterval(timerId)
    }, [days, hours, minutes, seconds, endDate]);

    return (
        <div className={"alert alert_warning_bg"}>
            <div className="d-flex justify-content-between">
                <span>
                    Resend OTP after 2 minutes
                </span>
                <span>
                    {
                        `${addZero(minutes)}:${addZero(seconds)}`
                    }
                </span>
            </div>
        </div>
    )
}

/**
 * 
 * @param {*} num - 2
 * @returns - 02
 */

function addZero(num) {
    return ('0' + num).slice(-2)
}

export default Timer;
