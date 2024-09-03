import React, { useState, useEffect } from 'react';
import './App.css';

// Import new 3D model files and images
import wheatModel from './assets/rice farm.glb'; // Wheat model
import paddyModel from './assets/rice farm.glb'; // Paddy model
import cornModel from './assets/rice farm.glb'; // Corn model
import vegetablesModel from './assets/rice farm.glb'; // Vegetables model

import wheatImage from './assets/OIP.jpg'; // Wheat image
import paddyImage from './assets/OIP.jpg'; // Paddy image
import cornImage from './assets/OIP.jpg'; // Corn image
import vegetablesImage from './assets/OIP.jpg'; // Vegetables image

import ScenarioCard from './components/ScenarioCard';

const App = () => {
  const scenarios = [
    { id: 1, title: 'Wheat', image: wheatImage, model: wheatModel, description: 'Learn about Wheat and its cultivation process.', category: 'Wheat' },
    { id: 2, title: 'Paddy', image: paddyImage, model: paddyModel, description: 'Explore the benefits and growing methods of Paddy.', category: 'Paddy' },
    { id: 3, title: 'Corn', image: cornImage, model: cornModel, description: 'Understand the uses and farming techniques for Corn.', category: 'Corn' },
    { id: 4, title: 'Vegetables', image: vegetablesImage, model: vegetablesModel, description: 'Discover various types of Vegetables and their cultivation.', category: 'Vegetables' },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedScenario, setExpandedScenario] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const categories = ['All', 'Wheat', 'Paddy', 'Corn', 'Vegetables'];

  const filteredScenarios = scenarios.filter((scenario) =>
    scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || scenario.category === selectedCategory)
  );

  const toggleScenario = (id) => {
    setExpandedScenario(expandedScenario === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Crop Visualization</h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search scenarios..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 p-2 border rounded"
        />
        <select 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          value={selectedCategory}
          className="w-full sm:w-64 p-2 border rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {filteredScenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            onClick={toggleScenario}
            isExpanded={expandedScenario === scenario.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
