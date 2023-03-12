import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';


const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#e6ceb4',
  height: isPortrait ? '50%' : '140%',
  overflow: 'hidden',
  position: 'relative',
});


const Layout = styled('div', {
  width: '100%',
  height: isPortrait ? '60%' : '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
  maxHeight: '250px'
});

const TitleLayout = styled('p', {
  width: '100%',
  fontSize:'50px',
  margin: 0,
  fontWeight: '500',
  color: '#9A673F',
  background:'#091E27',
  fontFamily: 'Roboto Serif',
  letterSpacing: '5px'

});

const Subtitle2 = styled('p', {
  width: '100%',
  fontSize:'100px',
  margin: 0,
  fontWeight: '800',
  color: '#673e23',
  fontFamily: 'Great Vibes'
});

const ImageLayout = styled('div', {
  width: isPortrait ? '100%' : '100%',
  height: isPortrait ? '60%' : '100%',
  background: '#e6ceb4',
  bottom: '-5px',
  textAlign: 'center',
  position: 'relative',
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '50%',
  
});

type TitleProps = {
  config: ConfigsType;
};

const Title = ({ config }: TitleProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        gravity={0.2}
        colors={['#091E27', '#F8BBD0', '#9A673F']}
        recycle={false}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Layout>
          <TitleLayout>
          ¡Nos casamos!
          </TitleLayout>
          <br/>
          <Subtitle2>
            {config.bride.name} &amp; {config.groom.name}
          </Subtitle2>
          <ImageLayout>
          <Image src={config.titleImage} alt="Wedding Invitation Title Picutre" />
        </ImageLayout>
        </Layout> 
      </Section>
    </>
  );
};

export default Title;
