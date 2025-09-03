import { useState, useEffect } from "react";

interface CountdownTimerProps {
  eventDate: string;
  eventName: string;
}

export function CountdownTimer({ eventDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const eventTime = new Date(eventDate).getTime();
      const now = new Date().getTime();
      const distance = eventTime - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-4 mb-6 text-primary-foreground" data-testid="countdown-timer">
      <div className="text-center">
        <h3 className="font-semibold mb-2" data-testid="countdown-event-name">🎯 {eventName}</h3>
        <div className="flex justify-center space-x-4 text-sm">
          <div className="text-center">
            <div className="text-lg font-bold font-mono" data-testid="countdown-days">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs opacity-90">Hari</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold font-mono" data-testid="countdown-hours">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs opacity-90">Jam</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold font-mono" data-testid="countdown-minutes">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs opacity-90">Menit</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold font-mono" data-testid="countdown-seconds">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs opacity-90">Detik</div>
          </div>
        </div>
      </div>
    </div>
  );
}
