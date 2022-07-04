import { Route, Routes } from 'react-router-dom';
import './App.css';
import Exchanges from './components/Exchanges/Exchanges';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import useFetch from './useFetch';

function App() {


  const { data, loading, error } = useFetch(`${process.env.REACT_APP_CRYPTO_API_URL}/assets`)

  const { data: exchanges } = useFetch(`${process.env.REACT_APP_CRYPTO_API_URL}/exchanges`)


  if (loading) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
        <p className="w-1/3 text-center text-white">Getting all Crypto Data.</p>
      </div>
    )
  }
  if (error) {
    console.log(error)
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={crypto && <Home crypto={data} />} />
        <Route path='/exchanges' element={exchanges && <Exchanges exchanges={exchanges} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
