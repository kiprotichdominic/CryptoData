import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                if (!response) {
                    setLoading(true)
                } else {
                    setLoading(false)
                    setData(response.data)
                }
            })
            .catch(error => {
                setError(error)
            })
    }, []);

    // const fetchCrypto = () => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then((response) => {
    //             if (!response) {
    //                 setLoading(true)
    //             } else {
    //                 setLoading(false)
    //                 setData(response.data)
    //             }
    //         })
    //         .catch(error => {
    //             setError(error)
    //         })

    // };

    // useEffect(() => {
    //     setLoading(true)
    // fetch(url)
    //     .then(res => res.json())
    //     .then((response) => {
    //         if (!response) {
    //             setLoading(true)
    //             console.log("Fetching Data");
    //         }
    //         else {
    //             setLoading(false)
    //             setData(response.data)
    //         }
    //     })
    //     .catch(error => {
    //         setError(error)
    //     })
    // }, [])

    return { data, loading, error }

}

export default useFetch