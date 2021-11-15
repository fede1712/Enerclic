import React from 'react'
import Chart from 'react-apexcharts';
import { useFetchData } from '../../hooks/useFtechData'

export const EvolutioReNoRe = () => {

    const { data, loading } = useFetchData('generacion', 'evolucion-renovable-no-renovable', 'year')

    const options = {
        series: data.map(elm => elm.values[0].percentage),
        labels: data.map(elm => elm.type)
    }
    const series = data.map(elm => elm.values[0].percentage)
    return (
        <>
            {loading === true ?
                <p>loading</p>
                :
                <Chart
                    options={options}
                    series={series}
                    type='donut'
                    width='500'
                />
            }
        </>
    )
}