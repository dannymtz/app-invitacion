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
  color: '#9A673F',
  textAlign: 'center',
  justifyContent: "center",
  borderRadius:"1em",
  margin: '3.5%',
  background: '#091E27',
  fontFamily: 'system-ui',
  fontWeight: '400',
  fontSize:'40px'

});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
  background: '#b5855f'
});

const SubTitle = styled('p', {
  color: '#673e23',
  width: '100%',
  fontSize:'60px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '500',
  lineHeight: 1.8,
  fontFamily: 'system-ui',
  letterSpacing: '5px'
  });

  const Watch = styled('p', {
    color: '#b5855f',
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
    background: '#b5855f',
    overflow: 'hidden',
    position: 'relative',
  });

  const Image = styled('img', {
    width: isPortrait ? '100%' : '50%',
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
            <NumberCard number={countdown.days} label="Días" />
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