import { ButtonGroup } from './components/ButtonGroup';
import { Container } from './components/Container';
import { Intro } from './components/Intro';
import { Logo } from './components/Logo';
import { PrimaryButton } from './components/PrimaryButton';
import { Register } from './components/Register';
import { SecondaryButton } from './components/SecondaryButton';
// #if VITE_QR_LOGIN=="true"
import { useState } from 'react';
import Confetti from 'react-confetti';
// #endif

const App = () => {
  // #if VITE_QR_LOGIN=="true"
  const [isLogged, setIsLogged] = useState(false);
  const qrLoginHandler = () => {
    setIsLogged(true);
    setTimeout(() => {
      setIsLogged(false);
    }, 5000);
  }
  // #endif

  return (
    <>
      {/* #if VITE_QR_LOGIN=="true" */}
      {isLogged && <Confetti numberOfPieces={400} gravity={0.25}/>}
      {/* #endif */}
      <Container>
        <Logo />
        <Intro/>
        <Register/>
        <ButtonGroup>
          <PrimaryButton>
            Login
          </PrimaryButton>
          {/* #if VITE_QR_LOGIN=="true" */}
          <SecondaryButton onClick={qrLoginHandler}>
          Login with QR
        </SecondaryButton>
          {/* #endif */}
        </ButtonGroup>
      </Container>
    </>
  )
}

export default App
