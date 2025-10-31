import React from 'react';
import TrueFocus from '../text/TrueFocus';
import "./HomeComponent.css";
import DomeGallery from './DomeGallery';
import Footer from './Footer';

export default function HomeComponent() {
    return (
        <div className="home-container">
            <div className="truefocus-wrapper">
                <TrueFocus
                    sentence="Nişantaşı Sanat Akademisi"
                    manualMode={false}
                    blurAmount={3}
                    borderColor="grey"
                    animationDuration={1.5}
                    pauseBetweenAnimations={0.8}
                />
            </div>

            <div className="text-section">
                <p className="welcome-description">
                    Nişantaşı'nda Bir Sanat Okulu
                </p>
          
                    <h1 className="welcome-title">HOŞ GELDİNİZ</h1>
                
            </div>

            <div className="dome-section">
                <div className="dome-overlay">
                    <DomeGallery
                        fit={0.5}
                        fitBasis="auto"
                        minRadius={600}
                        grayscale={false}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}