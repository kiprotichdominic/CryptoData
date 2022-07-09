import convertToInternationalCurrencySystem from './convertCurrency'

function GetRealTimePriceData({ currPrice, updatedIds, updatedPrices, coinId }) {
    const index = updatedIds?.indexOf(coinId)
    if (index != null && index >= 0) {
        return updatedPrices[index]
    }
    return convertToInternationalCurrencySystem(currPrice)
}

export default GetRealTimePriceData