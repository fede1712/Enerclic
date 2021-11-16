import React from 'react'
import Chart from 'react-apexcharts';

import { useFetchData } from '../../hooks/useFtechData'

export const IreIndustry = () => {

    const ireGeneral = useFetchData('demanda', 'ire-general', 'month')
    const ireIndustry = useFetchData('demanda', 'ire-industria', 'month')
    const ireServices = useFetchData('demanda', 'ire-servicios', 'month')
    const ireoOthers = useFetchData('demanda', 'ire-otras', 'month')

    const options = {
        labels: ireGeneral.data.map(elm => elm.type),
        colors: ['rgba(225, 78, 202, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)'],
        stroke: { width: 0.5 },
        legend: {
            labels: {
                colors: ['#000000']
            }
        }
    }

    const series = [{
        name: 'Ire general',
        data: ireGeneral.data.map(elm => elm.values[0].percentage.toFixed(3)),
    },
    {
        name: 'Ire industria',
        data: ireIndustry.data.map(elm => elm.values[0].percentage.toFixed(3))
    },
    {
        name: 'Ire Servicios',
        data: ireServices.data.map(elm => elm.values[0].percentage.toFixed(3))
    },
    {
        name: 'Ire otros',
        data: ireoOthers.data.map(elm => elm.values[0].percentage.toFixed(3))
    }]
    return (
        <>
            <h3 className='d-flex justify-content-center'>Indice general, industrial, servicios y otros </h3>

            {ireGeneral.loading === true || ireIndustry.loading === true || ireServices.loading === true || ireoOthers.loading === true ?
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
