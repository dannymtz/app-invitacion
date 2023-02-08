import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import { useLocation } from "react-router-dom"
const location = useLocation()
const params = new URLSearchParams(location.search)
console.log(params.get('invite'))


const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
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



const Confirmation = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');
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
      <Layout>
        <Title>Apreciable:</Title>
        <SubTitle>
          {config.invite[1]}
          <br />
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Confirmation;
