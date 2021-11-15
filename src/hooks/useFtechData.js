import { useEffect, useState } from 'react'
import { getData } from '../services/getData'

export const useFetchData = (category, widget, query) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getData(category, widget, query)
            .then(elm =>
                setState({
                    data: elm,
                    loading: false
                })
            )
    }, [])

    return state
}


