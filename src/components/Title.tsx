import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  background: '#e6ceb4',
  overflow: 'hidden',
  position: 'relative',
});

const Layout2 = styled('section', {
  height: '100%',
  background: '#FFF8F4',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  height: '100%',
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
  fontFamily: 'system-ui',
  letterSpacing: '5px'

});

const Subtitle2 = styled('p', {
  width: '100%',
  fontSize:'100px',
  margin: 0,
  fontWeight: '700',
  color: '#673e23',
  fontFamily: 'system-ui',
  fontStyle: 'italic'
});

const ImageLayout = styled('div', {
  width: '100%',
  background: '#e6ceb4',
  bottom: '-5px',
  textAlign: 'center',
  position: 'relative',
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
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
