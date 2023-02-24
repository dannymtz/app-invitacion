import { styled } from "@stitches/react";
import { memo, useEffect, useState } from "react";

const EVENT_DATE = "Mayo 27, 2023 04:30:00";
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();

interface COUNTDOWNTYPE {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
    width: '100%',
    padding: isPortrait ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
  });

const SubTitle = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isPortrait ? '1.2em' : '2em',
    margin: '24px 0',
    fontWeight: '300',
    lineHeight: 1.8,
  });
  const Watch = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isPortrait ? '1.2em' : '2em',
    margin: '24px 0',
    fontWeight: '300',
    lineHeight: 1.8,
  }); 

const countdownBase: COUNTDOWNTYPE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown = memo(() => {
  const [countdown, setCountdown] = useState<COUNTDOWNTYPE>(countdownBase);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const delta = COUNTDOWN_DATE - now;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (delta < 0) {
        clearInterval(interval);
        setCountdown(countdownBase);
      }
    }, 1000);
  }, []);

  return (
    <Layout>
      <SubTitle>
        <h4>Cuenta regresiva</h4>
        <h4>Nuestra Boda</h4>
      </SubTitle>

      <Watch>
        <NumberCard number={countdown.days} label="Dias" />
        <NumberCard number={countdown.hours} label="Horas" />
        <NumberCard number={countdown.minutes} label="Minutos" />
        <NumberCard number={countdown.seconds} label="Segundos" />
      </Watch>
    </Layout>
  );
});

interface NumberCardProps {
  number: number;
  label: string;
}

const NumberCard = memo(({ number, label }: NumberCardProps) => {
  const numberString = number < 100 ? ("0" + number).slice(-2) : String(number);

  return (
    <div className="rounded-lg bg-[#EFEFEF] py-7 px-2 w-24 text-center mx-2 text-gray-700 font-sans">
      <div className="text-3xl mb-2">{numberString}</div>
      <div>{label}</div>
    </div>
  );
});

export default Countdown;