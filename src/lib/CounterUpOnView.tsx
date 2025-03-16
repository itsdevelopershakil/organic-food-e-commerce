import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface CountUpOnViewProps {
    end: number;
    duration?: number;
    className?: string;
}

const CounterUpOnView: React.FC<CountUpOnViewProps> = ({
    end,
    duration = 2,
    className,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); //stop observing once triggered
                }
            },
            { threshold: 0.5 } // 50% visibility required
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={className}>
            {isVisible ? <CountUp end={end} duration={duration} /> : '0'}
        </div>
    );
};

export default CounterUpOnView;
