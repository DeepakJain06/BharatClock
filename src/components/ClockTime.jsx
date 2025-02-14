import { useState, useEffect } from "react";

export default function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date()); // Update time every second
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <p className="lead">
            The Current Time: <br />
            {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </p>
    );
}
