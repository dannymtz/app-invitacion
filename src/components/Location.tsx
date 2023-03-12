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
  fontWeight: '800',
  fontFamily: 'Roboto Serif',
  letterSpacing: '5px'
});

const SubTitle = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'Roboto Serif'
});

const Hora = styled('p', {
  color: '#9A673F',
  width: '30%',
  fontSize:'50px', //isPortrait ? '40px' : '40px',
  fontWeight: '900',
  lineHeight: 1.8,
  fontFamily: 'Roboto Serif',
  marginLeft: '35%',
  marginRight: '30%',
  marginTop: '5%',
  background: '#091E27',
  borderRadius:"1em",
});

const Title2 = styled('p', {
  color: '#e6ceb4',
  width: '100%',
  fontSize:'50px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '500',
  lineHeight: 1.8,
  fontFamily: 'Roboto Serif',
  letterSpacing: '5px',
  
});

const Direccion= styled('p', {
  color: '#e6ceb4',
  width: '100%',
  fontSize:'30px', //isPortrait ? '1.2em' : '2em',
  margin: '0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'Roboto Serif'
});
const IconoCopas = styled('div', {
  
});

const Mapa = styled('div', {
    height: '400px',
    alignContent: 'space-around'
});

type LocationProps = {
  config: ConfigsType;
};
const Image = styled('img', {
  width: '40%',
  maxWidth: '4600px',
  alignItems: 'center'
});

const Image2 = styled('img', {
  width: '10%',
  maxWidth: '10%',
  alignItems: 'center'
});

const Image3 = styled('img', {
  width: '10%',
  maxWidth: '10%',
  alignItems: 'center'
});

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <Section ref={ref}>
      <Layout>
        <IconoCopas>
         <Image3 src={config.galleryImages[4]} />
        </IconoCopas>

        <Title>Ceremonia y Recepción</Title>
        <Hora>4:30 Hrs</Hora>
        
        <Title2>
          <Image2 src={config.galleryImages[6]} /> Ubicación
        </Title2>
        <Direccion>
          Av. San Jerónimo 263, Tizapán San Ángel,
          <br />
          Loreto y Campamento,Álvaro Obregón,
          <br />
          01090 Ciudad de México.
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
