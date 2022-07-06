import CryptoTable from '../../components/CryptoTable/CryptoTable'

function Home({ crypto, cryptoPrices }) {
    return (
        <>
            <CryptoTable crypto={crypto} cryptoPrices={cryptoPrices} />
        </>
    )
}

export default Home