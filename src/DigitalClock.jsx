import React,{useState, useEffect, useCallback} from 'react';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect( () => {
        const intervalid = setInterval( () =>{
            setTime(new Date());
        }, 1000);
        
        return() => {
            clearInterval(intervalid);
        }

    }, []);

    return(
        <div className="clock-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
    );
}
export default DigitalClock