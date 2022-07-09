import convertToInternationalCurrencySystem from '../../utils/convertCurrency';
import percentageFormater from '../../utils/percentageFormater';



export default function CryptoTable({ crypto, cryptoPrices }) {
    const updatedKeys = cryptoPrices[0] ? Object.keys(cryptoPrices[0]) : null
    const updatedValues = cryptoPrices[0] ? Object.values(cryptoPrices[0]) : null
    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-5 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Crypto</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the Cryptocurrencies.
                    </p>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Rank
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Market Cap
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Supply
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Change(24Hr)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {crypto?.map((item) => (
                                        <tr key={item.id}
                                        className={`${item.priceUsd < item.updatedPrices} ? "flashgreen-pricechange" : "flashred-pricechange"}`}
                                        >
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{item.rank}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{item.name}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">
                                                    $<PriceKey
                                                        currPrice={item.priceUsd}
                                                        updatedIds={updatedKeys}
                                                        updatedPrices={updatedValues}
                                                        coinId={item.id}
                                                    />
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                                                <div className="text-gray-900">
                                                    $ {convertToInternationalCurrencySystem(item.marketCapUsd)}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">
                                                    $ {convertToInternationalCurrencySystem(item.supply)}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">
                                                    {percentageFormater(item.changePercent24Hr)}%
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function PriceKey({ currPrice, updatedIds, updatedPrices, coinId }) {
    const index = updatedIds?.indexOf(coinId)
    if (index != null && index >= 0) {
        return updatedPrices[index]
    }
    return convertToInternationalCurrencySystem(currPrice)
}
 