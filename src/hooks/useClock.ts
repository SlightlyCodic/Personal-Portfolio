import { useState, useEffect, useCallback } from 'react';

export function useClock(timezone = 'UTC') {
  const [time, setTime] = useState('');

  const updateClock = useCallback(() => {
    const now = new Date();

    // Format time in the specified timezone (default: UTC/GMT)
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: timezone,
    });

    const parts = formatter.formatToParts(now);
    const hours = parts.find(p => p.type === 'hour')?.value ?? '00';
    const minutes = parts.find(p => p.type === 'minute')?.value ?? '00';
    const seconds = parts.find(p => p.type === 'second')?.value ?? '00';
    const dayPeriod = parts.find(p => p.type === 'dayPeriod')?.value ?? '';

    setTime(`${hours}:${minutes}:${seconds} ${dayPeriod}`);
  }, [timezone]);

  useEffect(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [updateClock]);

  return time;
}
