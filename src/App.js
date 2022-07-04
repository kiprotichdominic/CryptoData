import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import useFetch from './useFetch';

function App() {


  const { data, loading, error } = useFetch("https://api.coincap.io/v2/assets")

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
      {crypto && <Home crypto={data} />}
      <Footer />
    </>
  );
}

export default App;
