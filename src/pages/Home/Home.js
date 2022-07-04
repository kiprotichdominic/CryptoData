import CryptoTable from '../../components/CryptoTable/CryptoTable'

function Home({ crypto }) {
    return (
        <>
            <CryptoTable crypto={crypto} />
        </>
    )
}

export default Home