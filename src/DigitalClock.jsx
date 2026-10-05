import { useEffect, useState } from "react";





function Digital() {

    const [curTime, setCurTime] = useState(new Date());

    useEffect(() => {
        console.log('mahedi');
        const intervaal = setInterval(() => {

            setCurTime(new Date());
        }, 1000);

        return (() => {
            clearInterval(intervaal);
        })
    }, [])


    function prependZero(number) {
        if (number < 10) return '0' + number;
        else return number;
    }



    function timeNow() {

        let hours = curTime.getHours();
        const minutes = curTime.getMinutes();
        const seconds = curTime.getSeconds();

        //hours=hours%12==0?12:hours;

        const am_pm = hours < 12 ? 'AM' : 'PM';

        if (hours == 0) hours = 12;
        else if (hours <= 12) hours = hours;
        else if (hours > 12) hours = hours % 12;


        return `${prependZero(hours)}:${prependZero(minutes)}:${prependZero(seconds)} ${am_pm}`;


    }
    return (
        <div className="clock">
            <p>{timeNow()}</p>


        </div>
    );
}

export default Digital;