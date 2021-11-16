import React from 'react'
import Chart from 'react-apexcharts';

import { useFetchData } from '../../hooks/useFtechData'

export const StructureGeneration = () => {

    const { data, loading } = useFetchData('generacion', 'estructura-generacion', 'year')


    const options = {
        series: data.map(elm => elm.values[0].percentage),
        labels: data.map(elm => elm.type),
        colors: ['rgba(116, 72, 194, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)', 'rgba(156, 153, 204, .2)', 'rgba(225, 78, 202, .2)'],
        stroke: { width: 0.5 },
        legend: {
            labels: {
                colors: ['#000000']
            }
        }
    }
    const series = data.map(elm => elm.values[0].percentage)


    return (
        <>
            <h3 className='d-flex justify-content-center'>Estructura de generación</h3>
            {loading === true ?
                <div className='spinner-border d-flex justify-content-center' role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>
                :
                <Chart
                    options={options}
                    series={series}
                    type='donut'
                    width='500'
                    height='500'
                />
            }
        </>
    )
}
