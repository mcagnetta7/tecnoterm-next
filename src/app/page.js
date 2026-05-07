import Contatti from './components/Contatti';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Recensioni from './components/Recensioni';
import Servizi from './components/Servizi';

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Servizi/>
      <Contatti/>
      <Recensioni/>
      <Footer/>
      {/* Altri contenuti */}
    </>
  );
}