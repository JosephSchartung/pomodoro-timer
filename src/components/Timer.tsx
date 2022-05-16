import React, { useEffect, useState } from "react";

interface Props {
    initialTime: any
}
export const Timer: React.FC<Props> = ({initialTime}) => {
    const { defaultMinutes = 25, defaultSeconds=0 } = initialTime;
    const [[mins, secs], setTime] = useState([0,0]);


    const tick = () => {
        if( mins === 0 && secs === 0) {
            reset();
        } else if( secs === 0) {
            setTime([mins-1, 59]);
        } else{
            setTime([mins, secs-1]);
        }
    }

    const reset = () => setTime([parseInt(defaultMinutes), parseInt(defaultSeconds)]);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div className="Timer" style={{textAlign:"center"}}>
            <h4>
                {`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2,'0')}`}
            </h4>
        </div>
    )
}