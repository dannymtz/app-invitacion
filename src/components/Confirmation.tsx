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
  justifyContent: 'center'
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});


const Title = styled('p', {
  color: '#f6b08f',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const Texto = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: '30px',//isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const Button =  styled('button', {
  position:'relative',
  backgroundColor: '#091E27',
  cursor: 'pointer',
  width: '50%',
  height: '100px',
  color: 'White',
  lineHeight: '100px',
  textAlign: 'center',
  borderRadius:"1em",
  fontSize: '2em'
});

const SubTitle = styled('p', {
  color: '#c28a72',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
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
            Número de pases: {config.invite.find(e => e.id == index.value)?.numberInvite}
          </SubTitle>
        </Layout>
        <Button onClick={confirm}>
          Confirmar a Dani
        </Button>
        <Button onClick={confirmLiz}>
          Confirmar a Liz
        </Button>
      </Section>
    </section>
  );
};

export default Confirmation;
