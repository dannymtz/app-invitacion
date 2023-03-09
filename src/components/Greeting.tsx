import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: 'fit-content',
  background: '#e6ceb4',
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

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: '60px',//isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '400',
  lineHeight: 1.8,
  fontFamily: 'system-ui'
});

const SubTitle2 = styled('p', {
  color: '#9A673F',
  width: '100%',
  fontSize: '80px',//isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '500',
  lineHeight: 1.8,
  background: '#091E27',
  fontFamily: 'system-ui'
});

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
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
      <Section>
        <Layout>
          <SubTitle>
            Te invitamos a celebrar nuestra boda
          </SubTitle>
          <SubTitle2>            
            {config.weddingDate}
          </SubTitle2>
          <Image src={config.secondImage} />
        </Layout>
      </Section>
    </section>
  );
};

export default Greeting;
