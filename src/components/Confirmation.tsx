import { styled } from '@stitches/react';
import { useRef } from 'react';
import { ConfigsType } from '../configs';
import queryString from 'query-string';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  background: '#673e23',
  overflow: 'hidden',
  display: 'block',
  justifyContent: 'center',
 
});

const Layout = styled('div', {
  width: '100%',
  color: '#763c31',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});


const Title = styled('p', {
  color: '#f6b08f',
  width: '100%',
  fontSize:'80px',
  margin: '24px',
  fontWeight: '600',
  fontFamily: 'Great Vibes'
});

const Texto = styled('p', {
  color: '#9A673F',
  width: '100%',
  fontSize: '50px',//isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontFamily: 'Roboto Serif',
  background:'#091E27',
  //marginLeft: isPortrait ? '300px' : '300px',
  fontWeight: '500',
  letterSpacing: '5px'
});



const SubTitle = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: '40px', //isPortrait ? '1.2em' : '2em',
  margin: '0',
  fontWeight: '400',
  //lineHeight: 1.8,
  fontFamily: 'Roboto Serif'


});

const SubTitle3 = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: '50px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '400',
  lineHeight: 1.8,
  fontFamily: 'Roboto Serif'
});


const Button =  styled('button', {
  position:'relative',
  backgroundColor: '#091E27',
  cursor: 'pointer',
  width: '30%',
  height: '50px',
  color: '#9A673F',
  lineHeight: '6px',
  textAlign: 'center',
  borderRadius:"10px 30px",
  fontSize: '2em',
  border: '#091E27',
  fontFamily: 'Roboto Serif',
  fontWeight: '600',
  
});

const ImagePases = styled('img', {
  width: '3%',
  maxWidth: '3%',
  alignItems: 'center'
});



type GreetingProps = {
  config: ConfigsType;
};

let index: { value: null | number } = {
  value :  1
};

const json = queryString.parse(window.location.search);
index.value =  parseInt(json.invite as string);


console.log(index.value);

const Confirmation = ({ config }: GreetingProps) => { 
  const ref = useRef<HTMLSelectElement>(null);
  function confirm() {
    window.open(
      "https://wa.me/+525549164152?text=Confirmo%20mi%20asistencia", "_blank");
  }
  function confirmLiz() {
    window.open(
      "https://wa.me/+525581079633?text=Confirmo%20mi%20asistencia", "_blank");
  }
  return (
    <section
      ref={ref}>
      <Section>
        <Layout>
          <Texto>
            Apreciable:
          </Texto>
          <Title>{config.invite.find(e => e.id == index.value)?.familyName}</Title>
          <SubTitle>
            No. de pases: {config.invite.find(e => e.id == index.value)?.numberInvite} adultos .  
            <ImagePases src={config.galleryImages[10]} />
          </SubTitle>
        
        <SubTitle3>
            Confirma tu asistencia con:
        </SubTitle3>
        <Button onClick={confirm} >
          El novio
        </Button>
        <Button onClick={confirmLiz}>
          La novia
        </Button>
        <br />
        <br />
        </Layout>
      </Section>
    </section>
  );
};

export default Confirmation;
