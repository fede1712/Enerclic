import React from 'react'
import { EvolutioReNoRe } from './EvolutionReNoRe'
import { StructureGeneration } from './StructureGeneration'
import './GenerationData.css'
import { GenerationStructureAssociatedEmissions } from './GenerationStructureAssociatedEmissions'

export const GenerationData = () => {


    return (
        <div className='container-fluid'>
            <h2 className='d-flex justify-content-center'>Generación de Energía</h2>
            <div className='row d-flex justify-content-center'>
                <div className='data col-5 mt-5 mr-5' >
                    <StructureGeneration />
                </div>
                <div className='data col-5 mt-5'>
                    <EvolutioReNoRe />
                </div>

            </div>
            <div className='data d-flex justify-content-center row mt-5 mr-5 ml-5 mb-5'>
                <GenerationStructureAssociatedEmissions />
            </div>
        </div>
    )
}
