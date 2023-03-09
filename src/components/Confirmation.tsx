import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import queryString from 'query-string';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  background: '#673e23',
  overflow: 'hidden',
  position: 'relative',
  display: 'grid',
  justifyContent: 'center'
});

const Layout = styled('div', {
  width: '100%',
  color: '#763c31',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});
const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

const ImageLayout = styled('div', {
  width: '100%',
  background: '#DADADA',
  bottom: '-5px',
  textAlign: 'center',
  position: 'absolute',
});

const Title = styled('p', {
  color: '#f6b08f',
  width: '100%',
  fontSize:'70px',//isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '600',
  fontFamily: 'system-ui'
});

const Texto = styled('p', {
  color: '#9A673F',
  width: '60%',
  fontSize: '40px',//isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '400',
  fontFamily: 'system-ui',
  letterspacing: '6px',
  background:'#091E27',
  marginLeft: '150px',
  borderRadius:"1em",
});

const SubTitle = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: '40px', //isPortrait ? '1.2em' : '2em',
  margin: '0',
  fontWeight: '400',
  //lineHeight: 1.8,
  fontFamily: 'system-ui'


});

const SubTitle3 = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: '50px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '400',
  lineHeight: 1.8,
  fontFamily: 'system-ui'
});


const Button =  styled('button', {
  position:'relative',
  backgroundColor: '#091E27',
  cursor: 'pointer',
  width: '200px',
  height: '50px',
  color: '#9A673F',
  lineHeight: '6px',
  textAlign: 'center',
  borderRadius:"10px 30px",
  fontSize: '2em',
  border: '#091E27',
  fontFamily: 'system-ui',
  fontWeight: '600',
  
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
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
  function confirm() {
    window.open(
      "https://wa.me/+525549164152?text=Confirmo%20mi%20asistencia", "_blank");
  }
  return (
    <section
      ref={ref}
      style={{
        height: '100$',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Section>
        <Layout>
          <Texto>
            Apreciable:
          </Texto>
          <Title>{config.invite.find(e => e.id == index.value)?.familyName}</Title>
          <SubTitle>
            Número de pases: {config.invite.find(e => e.id == index.value)?.numberInvite}
          </SubTitle>
        
        <SubTitle3>
            Confirma tu asistencia:
        </SubTitle3>

          </Layout>
        <Button onClick={confirm} >
        Con el novio
        </Button>
      </Section>
    </section>
  );
};

export default Confirmation;
