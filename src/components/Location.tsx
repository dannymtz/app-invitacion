import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#673e23',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});

const Title = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
  fontFamily: 'system-ui',
  letterSpacing: '5px'
});

const SubTitle = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'system-ui'
});

const Hora = styled('p', {
  color: '#9A673F',
  width: '20%',
  fontSize:'40px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'system-ui',
  marginLeft:'600px',
  background: '#091E27',
  borderRadius:"1em",
});

const Title2 = styled('p', {
  color: '#e6ceb4',
  width: '100%',
  fontSize:'40px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '500',
  lineHeight: 1.8,
  fontFamily: 'system-ui',
  letterSpacing: '5px',
  
});

const Direccion= styled('p', {
  color: '#e6ceb4',
  width: '100%',
  fontSize:'30px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'system-ui'
});


const Mapa = styled('div', {
    height: '400px',
    alignContent: 'space-around'
});

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <Section ref={ref}>
      <Layout>
        <Title>Ceremonia y Recepción</Title>
        <Hora>4:30 Hrs</Hora>
        <Title2>
          Ubicación
        </Title2>
        <Direccion>
          Av. San Jerónimo 263, Tizapán San Ángel,
          <br />
          Loreto y Campamento,Álvaro Obregón,
          <br />
          01090 Ciudad de México, CDMX
          <br/>
        </Direccion>
        <SubTitle>
          <Mapa>
            <iframe  
            style={{ width: isPortrait ? '100%' : '80%',
          height: '100%' }}
           src={config.locationMapImage}/>
          </Mapa>
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Location;
