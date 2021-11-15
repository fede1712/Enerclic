import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EvolutioReNoRe } from '../components/Generation/EvolutionReNoRe';
import { Home } from '../components/Home/Home';


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/generacion' element={<EvolutioReNoRe />} />
            </Routes>
        </Router>
    )
}
