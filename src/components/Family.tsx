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

type FamilyProps = {
  config: ConfigsType;
};

const Family = ({ config }: FamilyProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Con la bendición de nuestros padres</Title>
        <SubTitle>
            {config.groom.motherName} &amp; {config.groom.fatherName}
            <br/>
            {config.bride.motherName}
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Family;