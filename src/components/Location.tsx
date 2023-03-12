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
  fontSize:'40px', //isPortrait ? '40px' : '40px',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'system-ui',
  marginLeft: '40%',
  marginRight: '40%',
  marginTop: '5%',
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
  margin: '0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'system-ui'
});
const IconoCopas = styled('div', {
  width: '10%',
  height: '10%',
  marginLeft: '45%',
  //marginRight: '10%',
  marginTop: '0%',
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
  width: '4%',
  maxWidth: '4%',
  alignItems: 'center'
});

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <Section ref={ref}>
      <Layout>
        <IconoCopas>
         <Image src={config.galleryImages[4]} />
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
