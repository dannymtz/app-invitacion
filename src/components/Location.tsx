import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EBF5FB',
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
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

const Hora = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize:'30px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

const Title2 = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize:'50px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

const Direccion= styled('p', {
  color: '#795548',
  width: '100%',
  fontSize:'30px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
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
