import { useEffect, useState } from 'react';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

type CountdownTimerProps = {
    targetDate: string;
};

const Timer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-1 pt-2 lg:pt-4">
            <div className="text-center">
                <p className="text-xl">
                    {String(timeLeft.days).padStart(2, '0')}
                </p>
                <p className="text-sm opacity-70">DAYS</p>
            </div>
            <p>:</p>
            <div className="text-center">
                <p className="text-xl">
                    {String(timeLeft.hours).padStart(2, '0')}
                </p>
                <p className="text-sm opacity-70">HOURS</p>
            </div>
            <p>:</p>
            <div className="text-center">
                <p className="text-xl">
                    {String(timeLeft.minutes).padStart(2, '0')}
                </p>
                <p className="text-sm opacity-70">MINS</p>
            </div>
            <p>:</p>
            <div className="text-center">
                <p className="text-xl">
                    {String(timeLeft.seconds).padStart(2, '0')}
                </p>
                <p className="text-sm opacity-70">SECS</p>
            </div>
        </div>
    );
};

export default Timer;
