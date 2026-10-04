import { useEffect, useState } from "react";





function Digital() {

    const [curTime, setCurTime] = useState(new Date());

    useEffect( ()=>{
        console.log('mahedi');
        setInterval(() => {
            
            setCurTime(new Date());
        }, 1000);
    },[])


    function prependZero(number){
        if(number<10) return '0'+number;
        else return number;
    }



    function timeNow() {

        let hours = curTime.getHours();
        const minutes = curTime.getMinutes();
        const seconds = curTime.getSeconds();

        hours=hours%12==0?12:hours;
        const am_pm=hours<=12?'AM':'PM';

        return `${prependZero(hours)}:${prependZero(minutes)}:${prependZero(seconds)} ${am_pm}`;


    }
    return (
        <div className="clock">
            <p>{timeNow()}</p>


        </div>
    );
}

export default Digital;