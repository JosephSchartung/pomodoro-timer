import React, { useEffect, useState } from "react";

interface Props {
    pomodoro: Pomodoro;
}
export const Timer: React.FC<Props> = ({pomodoro}) => {



    return (
        <div className="Timer" style={{textAlign:"center"}}>
            <h3>0:00</h3>
        </div>
    )
}