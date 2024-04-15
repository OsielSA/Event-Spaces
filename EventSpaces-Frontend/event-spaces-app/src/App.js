import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='div-body text-center'>
        <div className='text-4xl sm:text-6xl font-extrabold  text-evsp-950 pt-5'>
          <h1>¡Próximamente!</h1>
        </div>
        <div className='flex justify-center'>
          <img src='/building-image.png' className='building-img' />
        </div>
        <div className='text-xl sm:text-2xl font-extrabold  text-evsp-950 pt-5'>
          <h1>Estamos en construcción, disculpe las molestias.</h1>
        </div>
      </div>
      <div className="div-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
