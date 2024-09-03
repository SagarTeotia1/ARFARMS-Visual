// src/components/ScenarioCard.js
import React from 'react';

const ScenarioCard = ({ scenario, onClick, isExpanded }) => (
  <div className="bg-blue-100 border rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out">
    <div 
      className="p-4 cursor-pointer"
      onClick={() => onClick(scenario.id)}
    >
      <h2 className="text-xl font-bold mb-2 text-center text-black">{scenario.title}</h2>
      <p className="text-sm text-black mb-2 text-center">{scenario.category}</p>
      <img 
        src={scenario.image} 
        alt={scenario.title} 
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
    </div>
    {isExpanded && (
      <div className="p-4 bg-blue-50">
        <model-viewer
          src={scenario.model}
          alt={`3D model of ${scenario.title}`}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster={scenario.image}
          shadow-intensity="1"
          auto-rotate
          style={{width: '100%', height: '200px', margin: '0 auto'}}
        >
          <button slot="ar-button" className="ar-button">
            View in AR
          </button>
        </model-viewer>
        <p className="mt-4 mb-4 text-center text-sm text-black">{scenario.description}</p>
      </div>
    )}
  </div>
);

export default ScenarioCard;
