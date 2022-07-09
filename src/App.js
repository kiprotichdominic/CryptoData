import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Exchanges from './components/Exchanges/Exchanges';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import useFetch from './useFetch';

function App() {

  const [cryptoPrices, setCryptoPrices] = useState([])


  const { data, loading, error } = useFetch(`${process.env.REACT_APP_CRYPTO_API_URL}/assets`)

  const { data: exchanges } = useFetch(`${process.env.REACT_APP_CRYPTO_API_URL}/exchanges`)

  const pricesWs = new WebSocket(`${process.env.REACT_APP_WEBSOCKET_API_URL}`)

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WEBSOCKET_API_URL}`)

    const handler = (e) => {
      const response = JSON.parse(e.data);

      setCryptoPrices(cryptoPrices => [
        // ...cryptoPrices, // <-- shallow copy previous state
        response,          // <-- append new data
      ],);
    };
    // cryptoPrices.shift(0, 1);

    ws.addEventListener('message', handler);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        action: "subscribe_to_operations_activity",
        request_id: new Date().getTime(),
      }));
    };

    return () => {
      ws.removeEventListener('message', handler);
    };
  }, []);

  // console.log(operationsList);

  // pricesWs.addEventListener("open", e => {
  //   pricesWs.get(JSON.stringify(msg))
  // })
  // pricesWs.onmessage = function (msg) {
  //   // console.log(msg.data)
  //   let finalData = msg
  //   setCryptoPrices(msg)
  //   console.log(finalData.data);
  // }
  // console.log(data);

  // console.log(cryptoPrices.data);
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
        <Route path="/" element={crypto && <Home crypto={data} cryptoPrices={cryptoPrices} />} />
        <Route path='/exchanges' element={exchanges && <Exchanges exchanges={exchanges} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
