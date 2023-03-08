import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import queryString from 'query-string';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  background: '#DADADA',
  overflow: 'hidden',
  position: 'relative',
  display: 'grid',
  justifyContent: 'center'
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
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
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const Button =  styled('button', {
  position:'relative',
  backgroundColor: 'Green',
  cursor: 'pointer',
  width: '400px',
  height: '100px',
  color: 'White',
  lineHeight: '100px',
  textAlign: 'center',
  borderRadius:"1em",
  fontSize: '2em'
});

const SubTitle = styled('p', {
  color: '#795548',
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
          <Title>{config.invite.find(e => e.id == index.value)?.familyName}</Title>
          <SubTitle>
            Número de pases: {config.invite.find(e => e.id == index.value)?.numberInvite}
          </SubTitle>
        </Layout>
        <Button onClick={confirm} >
          Confirmar
        </Button>
      </Section>
    </section>
  );
};

export default Confirmation;
