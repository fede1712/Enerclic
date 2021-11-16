import React from 'react'
import Chart from 'react-apexcharts'
import { useFetchData } from '../../hooks/useFtechData'

export const ExchangeBordersProgrammed = () => {
    const france = useFetchData('intercambios', 'francia-frontera-programado', 'year')
    const portugal = useFetchData('intercambios', 'portugal-frontera-programado', 'year')
    const morocco = useFetchData('intercambios', 'marruecos-frontera-programado', 'year')
    const andorra = useFetchData('intercambios', 'andorra-frontera-programado', 'year')


    const options = {
        labels: france.data.map(elm => elm.type),
        colors: ['rgba(225, 78, 202, .2)', 'rgba(33, 192, 215, .2)', 'rgba(217, 158, 43, .2)', 'rgba(205, 58, 129, .2)'],
        stroke: { width: 0.5 },
        legend: {
            labels: {
                colors: ['#000000']
            }
        }
    }
    const series = [{
        name: 'Francia',
        data: france.data.map(elm => elm.values[0].percentage.toFixed(2)),
    },
    {
        name: 'Portugal',
        data: portugal.data.map(elm => elm.values[0].percentage.toFixed(2))
    },
    {
        name: 'Marruecos',
        data: morocco.data.map(elm => elm.values[0].percentage.toFixed(2))
    },
    {
        name: 'Andorra',
        data: andorra.data.map(elm => elm.values[0].percentage.toFixed(2))
    }]

    console.log(series)

    return (
        <>
            <h3 className='d-flex justify-content-center'>Intercambios programados</h3>
            {
                france.loading === true || portugal.loading === true || morocco.loading == true || andorra.loading === true ?
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
