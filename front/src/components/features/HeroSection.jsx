// src/components/features/Slider.jsx
// Hero Image de la page d'accueil

import { useState } from 'react';
import { useSlider } from '../../hooks/useSlider';
import heroImage from '../../assets/images/hero-image.webp';

function HeroSection() {

    return (
        <div className="absolute left-0 w-full h-[450px] overflow-hidden bg-black">
            {/* Hero image */}
            <div className="flex transition-transform duration-700 ease-in-out h-full">
                <div className="min-w-full h-full flex-shrink-0 relative">
                    <img
                        src={heroImage}
                        alt={"Description alternative de l'image"}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Overlay sombre + titre + texte */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-evenly z-10 text-white">
                <h1 className='text-white m-0 p-0 mt-12 tracking-widest'>
                    Gîte La Grange
                </h1>
                <p className='mx-2 m-0 px-2 max-w-4xl text-center italic tracking-wider'>Situé au cœur des Monts du Lyonnais, à 45 min à l'ouest de Lyon, le gîte de séjour LA GRANGE vous accueille pour une nuit, un week end ou une semaine.</p>
            </div>

        </div>
    );
}

export default HeroSection;