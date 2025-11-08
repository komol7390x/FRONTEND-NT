import { useEffect, useState } from "react";
import { ShowButton } from "../../../../assets/icon/show-button";
import left from '../../../../assets/png/fruit.png'


export const LeftBanner = ({ days = '' }) => {
    const [timeLeft, setTimeLeft] = useState({
        days,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const endTime = new Date().getTime() + Number(days) * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const d = Math.floor(distance / (1000 * 60 * 60 * 24));
            const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
        }, 1000);

        return () => clearInterval(interval);
    }, [days]);
    return (
        <div>
            {/* left */}
            <div className='relative'>
                <img src={left} alt="left" />
                <div className='absolute top-0 w-full text-center mt-6'>
                    {/* info */}
                    <div className=''>
                        <h3 className='text-[14px] text-white font-medium uppercase'>Best Deals</h3>
                        <p className='font-semibold text-[40px] text-white'>Sale of the Month</p>
                    </div>

                    {/* TIME */}
                    <div className=''>
                        <div className="flex gap-4 justify-center font-bold">

                            <div className='text-[24px] font-normal text-white'>
                                <p>{timeLeft.days.toString().padStart(2, '0')}</p>
                                <p className='text-[12px]'>DAYS</p>
                            </div>

                            <p className='text-[24px] font-normal text-white'>:</p>

                            <div className='text-[24px] font-normal text-white'>
                                <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
                                <p className='text-[12px]'>HOURS</p>
                            </div>

                            <p className='text-[24px] font-normal text-white'>:</p>

                            <div className='text-[24px] font-normal text-white'>
                                <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
                                <p className='text-[12px]'>DAYS</p>
                            </div>

                            <p className='text-[24px] font-normal text-white'>:</p>

                            <div className='text-[24px] font-normal text-white'>
                                <p>{timeLeft.seconds.toString().padStart(2, '0')}</p>
                                <p className='text-[12px]'>DAYS</p>
                            </div>

                        </div>
                    </div>
                    <ShowButton bg='white' />
                </div>
            </div>
        </div>
    )
}
