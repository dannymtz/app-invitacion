import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#DADADA',
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
  fontWeight: '700',
  fontFamily: 'Roboto Serif',
  letterSpacing: '5px',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  verticalAlign: 'middle',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '30px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'Roboto Serif',
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
  maxHeight: '200px',
  alignContent: 'center',
  alignSelf: 'center'
});

const Content2 = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  maxHeight: '250px',
  alignContent: 'center',
  alignSelf: 'center'

});

const Title2 = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: '20px',//isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '400',
  fontFamily: 'Roboto Serif',
});



const IconRegalo = styled('div', {
  
});

const Image2 = styled('img', {
  width: '10%',
  height: '10%',
  alignItems: 'center'
});





type GreetingProps = {
  config: ConfigsType;
};

const Regalos = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <IconRegalo>
          <Image2 src={config.galleryImages[5]} />
        </IconRegalo>
        
        <Title>Mesa de regalos</Title>
        <Title2>*Da clic en cada logo</Title2>
        <br/>
        <Content>
        <a href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51136394'>
          <Image src={config.galleryImages[2]} />
        </a>
        </Content>
        <Content2>
        <a href='https://www.amazon.com.mx/wedding/lizeth-garc??a-daniel-martinez-ciudad-de-meacutexico-may-2023/registry/7N9BZZDTTGCD'> 
          <Image src={config.galleryImages[1]}/>
        </a>
        </Content2>
      </Layout>
    </Section>
  );
};

export default Regalos;