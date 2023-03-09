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
  color: '#673e23',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: '50px', //isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
  fontFamily: 'system-ui',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: '50px', //isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'system-ui',
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
            {config.bride.motherName} &amp; {config.bride.fatherName}
            <br/>
            Y
            <br/>
            {config.groom.motherName}
        </SubTitle>
      </Layout>
    </Section>
  );
};

export default Family;