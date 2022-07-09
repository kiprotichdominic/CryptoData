function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        callback(true);
    } else {
        img.onload = () => {
            callback(true);
        };

        img.onerror = () => {
            callback(false);
        };
    }
}

function GetCryptoIcon({ coinSymbol }) {
    const icon = typeof coinSymbol === 'string' ? coinSymbol.toLowerCase() : '';
    let cryptoIcon = `https://assets.coincap.io/assets/icons/${icon}@2x.png`
    if (icon === 'ustc') {
        let icon = 'ust'
        let cryptoIcon = `https://assets.coincap.io/assets/icons/${icon}@2x.png`
        return cryptoIcon
    } else {
        return (
            <img className="h-10 w-10 rounded-full"
                src={cryptoIcon}
                alt=""
            />
        )
    }
}

export default GetCryptoIcon