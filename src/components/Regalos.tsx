import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: 'White',
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
  verticalAlign: 'middle',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '30px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});
const Image = styled('img', {
  width: '40%',
  maxWidth: '4600px',
  alignItems: 'center'
});

const Content = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  maxHeight: '150px',
  alignContent: 'center',
  alignSelf: 'center'
});

type GreetingProps = {
  config: ConfigsType;
};

const Regalos = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Mesa de regalos</Title>
        <Content>
        <a href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51136394'>
          <Image src={config.galleryImages[2]} />
        </a>
        </Content>
        <Content>
        <a href='https://www.amazon.com.mx/wedding/lizeth-garcía-daniel-martinez-ciudad-de-meacutexico-may-2023/registry/7N9BZZDTTGCD'> 
        <Image src={config.galleryImages[1]}/>
        </a>
        </Content>
        
      </Layout>
    </Section>
  );
};

export default Regalos;