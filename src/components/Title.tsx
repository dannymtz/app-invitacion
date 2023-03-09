import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: isPortrait ? '60%' : '100%',
  background: '#b7a394',
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
  fontFamily: 'system-ui'

});

const Subtitle2 = styled('p', {
  width: '100%',
  fontSize:'95px',
  margin: 0,
  fontWeight: '500',
  color: '#9A673F',
  fontFamily: 'system-ui'
});

const ImageLayout = styled('div', {
  width: '100%',
  background: '#b7a394',
  bottom: '-5px',
  textAlign: 'center',
  position: 'relative',
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '60%',
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
