
function CheckPositiveNumber({ number }) {
    if (number > 0) {
        return (
            <div style={{ color: 'green' }}>
                {parseFloat(number).toFixed(2)}%
            </div>
        )
    } else {
        return (
            <div style={{ color: 'red' }}>
                {parseFloat(number).toFixed(2)}%
            </div>
        )
    }
}

export default CheckPositiveNumber