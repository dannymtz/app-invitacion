import { styled } from "@stitches/react";
import { memo, useEffect, useState } from "react";
import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const EVENT_DATE = "Mayo 27, 2023 04:30:00";
const COUNTDOWN_DATE = new Date(EVENT_DATE).getTime();

interface COUNTDOWNTYPE {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Box =  styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  justifyContent: "center",
  borderRadius:"1em",
  margin: '3.5%',
  background: '#FDFEFE'
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
  background: '#EFEBE9'
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize:'50px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  });

  const Watch = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: isPortrait ? '3em' : '4em',
    margin: '24px 0',
    fontWeight: '300',
    lineHeight: 1.8,
    display: 'flex',
    justifyContent:'center'
  }); 

  const Section = styled('section', {
    height: '70%',
    background: '#EFEBE9',
    overflow: 'hidden',
    position: 'relative',
  });

  const Image = styled('img', {
    width: isPortrait ? '100%' : '40%',
  });

const countdownBase: COUNTDOWNTYPE = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

type GreetingProps = {
  config: ConfigsType;
};

const Countdown =  ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
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
    <section ref={ref}
    style={{
      height: '100$',
      background: onScreen ? '#EFEBE9' : '#DADADA',
      overflow: 'hidden',
      position: 'relative',
      transition: 'background 1s ease-in',
    }}>
        <Section>
        <Layout>
          <SubTitle>
            Solo faltan:
          </SubTitle>
          <Image src={config.galleryImages[3]} />
          <Watch>
            <NumberCard number={countdown.days} label="Dias" />
            <NumberCard number={countdown.hours} label="Horas" />
            <NumberCard number={countdown.minutes} label="Minutos" />
            <NumberCard number={countdown.seconds} label="Segundos" />
          </Watch>
        </Layout>
      </Section>
    </section>
    
    
  );
};

interface NumberCardProps {
  number: number;
  label: string;
}

const NumberCard = memo(({ number, label }: NumberCardProps) => {
  const numberString = number < 100 ? ("0" + number).slice(-2) : String(number);
  return (
    <Box>
      <div>{numberString}</div>
      <div>{label}</div>
    </Box>
  );
});

export default Countdown;