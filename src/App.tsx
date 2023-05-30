import styled from 'styled-components';
import rtbPrepareImage from '../assets/rtb-prepare-image.jpg';
import logoPrepare from '../assets/logo-prepare.svg';
import './App.css';

function App() {
  return (
    <AppLayout>
      <Logo src={logoPrepare} alt="logo" />
      <BackgroundImage src={rtbPrepareImage} alt="background" />;
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.div``;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Logo = styled.img`
  position: absolute;

  max-height: 300px;
  min-width: 200px;
  width: 10%;
  height: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
