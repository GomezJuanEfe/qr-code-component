import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { QrCard } from './components/QrCard/QrCard';


function App() {
  const info = {
    img: './img/image-qr-code.png',
    title: 'Improve your font-end skills by building projects',
    text: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
  }

  return (
    <>
      <Header>QR Code Component</Header>
      <Main>
        <QrCard
          imgSrc={info.img}
          title={info.title}
          text={info.text}
        />
      </Main>
      <Footer
        webLink={'www.gomezjuanefe.com'}
        name={'Juan Felipe'}
      />
    </>
  )
}

export { App }