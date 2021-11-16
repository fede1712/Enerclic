import React from 'react'
import Chart from 'react-apexcharts';

import { useFetchData } from '../../hooks/useFtechData'

export const GenerationStructureAssociatedEmissions = () => {

    const { data, loading } = useFetchData('generacion', 'estructura-generacion-emisiones-asociadas', 'year')
    const arr = []
    data.map(elm => arr.push(elm.type))

    const options = {
        chart: {
            width: '100%',
            id: 'basic-bar'
        },
        xaxis: {
            categories: arr
        },
        stroke: {
            curve: 'smooth',
            width: 0.5
        },
        colors: ['rgba(33, 192, 215, 1)'],
        dataLabels: {
            enabled: false
        },

    }

    const series = [{
        name: 'emisiones asociasdas',
        data: data.map(elm => elm.values[0].percentage.toFixed(3))
    }]

    return (
        <>
            <h3 className='d-flex justify-content-center col-12'>Emisiones asociadas según estructura de generación</h3>
            {
                loading === true ?
                    <div className='spinner-border d-flex justify-content-center' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                    :
                    <Chart
                        className='col-12'
                        options={options}
                        series={series}
                        type='area'
                        height='300px'
                    />
            }
        </>
    )
}
