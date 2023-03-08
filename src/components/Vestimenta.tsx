import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#DADADA',
  overflow: 'hidden',
  position: 'relative',
  maxHeight: '1000px',
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize:'50px', //isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const Title2 = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: '40px',//isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const Title3 = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: '50px',//isPortrait ? '2.5em' : '3.5em',
    margin: 0,
    fontWeight: '500',
  });

  const Title4 = styled('p', {
    color: '#795548',
    width: '100%',
    fontSize: '20px',//isPortrait ? '2.5em' : '3.5em',
    margin: 0,
    fontWeight: '500',
  });

type GreetingProps = {
  config: ConfigsType;
};

const Vestimenta = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Código de Vestimenta</Title>
        <Title2>Formal</Title2>
        <br/>
        <Title3>Respetuosamente: NO niños</Title3>
        <Title4>*Solo Constanza</Title4>
      </Layout>
    </Section>
  );
};

export default Vestimenta;