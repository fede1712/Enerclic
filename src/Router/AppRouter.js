import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DemandData } from '../components/Demand/DemandData';
import { ExchangeData } from '../components/Exchange/ExchangeData';
import { EvolutioReNoRe } from '../components/Generation/EvolutionReNoRe';
import { GenerationData } from '../components/Generation/GenerationData';
import { Home } from '../components/Home/Home';


export const AppRouter = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/demanda' element={<DemandData />} />
            <Route path='/generacion' element={<GenerationData />} />
            <Route path='/intercambios' element={<ExchangeData />} />
            <Route path='/transporte' element={<EvolutioReNoRe />} />
            <Route path='/mercados' element={<EvolutioReNoRe />} />
        </Routes>

    )
}
