import { useEffect, useState } from "react";

const useTimer = (intialTime) => {
    const [time, setTime] = useState(intialTime);
    const [pause, setPause] = useState(null);
    const [interalValId, setIntervalId] = useState(null);

    useEffect(() => {
        console.log();
        
    })
    let timeId;

    const startTime = () => {
        console.log("startTime");
        
        setPause(false);
        timeId = setInterval(() => {
            setTime((preTime) => {
                const newTime = preTime - 1;

                if (newTime <= 0) {
                    clearTime();
                    return 0
                }

                return newTime;
            });
            console.log(setInterval);
            
        }, 1000);

        setIntervalId(timeId);
    }

    const clearTime = () => {
        clearInterval(timeId);
        setIntervalId(null);
        setTime(0);
    }
    const pauseTime = () => {
        console.log("pauseTime");
        setPause(true);
        clearInterval(interalValId);
    }
    const resetTime = () => {
        console.log("resetTime");
        clearInterval(interalValId);
        setPause(false);
        setTime(intialTime);
        setIntervalId(null);
    }

    return [time, startTime, pauseTime, resetTime]
}

const InterviewTimer = () => {
    const [time, startTime, pauseTime, resetTime] = useTimer(10);

    return (
        <div>
            <div>Time：{time} seconds</div>
            <button onClick={startTime}>Start Time</button>
            <button onClick={pauseTime}>Pause Time</button>
            <button onClick={resetTime}>Reset Time</button>
        </div>
    );
}
export default InterviewTimer;