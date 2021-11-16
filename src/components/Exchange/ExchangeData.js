import React from 'react'
import { ExchangesBorders } from './ExchangesBorders'
import { ExchangeBordersProgrammed } from './ExchangeBordersProgrammed'

export const ExchangeData = () => {
    return (
        <div className='container-fluid'>
            <h2 className='d-flex justify-content-center'>Intercambios</h2>
            <div className='row d-flex justify-content-center'>
                <div className='data col-5 mt-5 mr-5' >
                    <ExchangesBorders />
                </div>
                <div className='data col-5 mt-5'>
                    <ExchangeBordersProgrammed />
                </div>

            </div>
            <div className='data d-flex justify-content-center row mt-5 mr-5 ml-5 mb-5'>
            </div>
        </div>
    )
}
