import React from 'react'
import { ComponentVariation } from './ComponentVariation'
import { IreIndustry } from './IreIndustry'

export const DemandData = () => {
    return (
        <div className='container-fluid'>
            <h2 className='d-flex justify-content-center'>Demanda de energía</h2>
            <div className='row d-flex justify-content-center'>
                <div className='data col-5 mt-5 mr-5 mb-5' >
                    <ComponentVariation />
                </div>
                <div className='data col-5 mt-5 mb-5'>
                    <IreIndustry />
                </div>
            </div>
        </div>
    )
}
