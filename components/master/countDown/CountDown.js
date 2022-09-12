import React, { useEffect, useState } from 'react';

/**
 * 
 * @param {int} hours 
 * @param {int} minutes 
 * @param {int} seconds 
 * @param {string} countDownText // countText
 * @param {string} expireText //nullable
 * @param {string} alert_bg // className
 * @returns CountDown;
 */

const CountDown = ({ hours = 0, minutes = 0, seconds = 0, countDownText = "",  expireText = "", alert_bg, countdownEnd }) => {

    const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
    const [over, setOver] = useState(false);
    const [paused, setPaused] = useState(false);

    const tick = () => {
        if (paused || over) return;
        if (h === 0 && m === 0 && s === 0) setOver(true);
        else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
        setPaused(false);
        setOver(false);
    };

    useEffect(() => {
        if(over) {
            countdownEnd(over);
        }
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div className={`alert ${alert_bg}`}>
            <div className="d-flex justify-content-between">
                <span>
                    {
                        over ? (
                            expireText !== "" ? expireText : ""
                        ) : (
                            countDownText !== "" ? countDownText : ""
                        )
                    }
                </span>
                <span>
                    {
                        hours > 0 && `${h.toString().padStart(2, '0')}:${m
                            .toString()
                            .padStart(2, '0')}:${s.toString().padStart(2, '0')}`
                    }
                    {
                        minutes > 0 && `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
                    }
                    {
                        seconds > 0 && `${s.toString().padStart(2, '0')}`
                    }
                </span>
            </div>
        </div>
    );
};

export default CountDown;