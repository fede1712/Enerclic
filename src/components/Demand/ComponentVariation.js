import React from 'react'
import Chart from 'react-apexcharts';

import { useFetchData } from '../../hooks/useFtechData'

export const ComponentVariation = () => {

    const { data, loading } = useFetchData('demanda', 'variacion-componentes', 'month')
    const movileComponents = useFetchData('demanda', 'variacion-componentes-movil', 'month')


    const options = {

        labels: data.map(elm => elm.type),
        colors: ['rgba(225, 78, 202, .2)', 'rgba(33, 192, 215, .2)'],
        stroke: { width: 0.5 },
        legend: {
            labels: {
                colors: ['#000000']
            }
        }
    }

    const series = [{
        name: 'Variación de componentes',
        data: data.map(elm => elm.values[0].percentage.toFixed(3)),
    },
    {
        name: 'Variación de componentes movil',
        data: movileComponents.data.map(elm => elm.values[0].percentage.toFixed(3))
    }]

    return (

        <>
            <h3 className='d-flex justify-content-center col-12'>Variación de componentes / movil</h3>
            {loading === true || movileComponents.loading === true ?
                <div className='spinner-border d-flex justify-content-center' role='status'>
                    <span className='sr-only'>Loading...</span>
                </div>
                :
                <Chart
                    options={options}
                    series={series}
                    type='bar'
                    width='500'
                    height='500'
                />
            }

        </>
    )
}
