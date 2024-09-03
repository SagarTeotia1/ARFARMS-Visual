// import React, { useState, useEffect } from 'react';
// import './App.css';

// // Import new 3D model files and images
// import wheatModel from './assets/wheat.glb'; // Wheat model
// import paddyModel from './assets/rice_plant (1).glb'; // Paddy model
// import cornModel from './assets/rice farm.glb'; // Corn model
// import vegetablesModel from './assets/rice farm.glb'; // Vegetables model

// import wheatImage from './assets/OIP.jpg'; // Wheat image
// import paddyImage from './assets/OIP.jpg'; // Paddy image
// import cornImage from './assets/OIP.jpg'; // Corn image
// import vegetablesImage from './assets/OIP.jpg'; // Vegetables image

// import ScenarioCard from './components/ScenarioCard';

// const App = () => {
//   const scenarios = [
//     { id: 1, title: 'Wheat', image: wheatImage, model: wheatModel, description: 'Learn about Wheat and its cultivation process.', category: 'Wheat' },
//     { id: 2, title: 'Paddy', image: paddyImage, model: paddyModel, description: 'Explore the benefits and growing methods of Paddy.', category: 'Paddy' },
//     { id: 3, title: 'Corn', image: cornImage, model: cornModel, description: 'Understand the uses and farming techniques for Corn.', category: 'Corn' },
//     { id: 4, title: 'Vegetables', image: vegetablesImage, model: vegetablesModel, description: 'Discover various types of Vegetables and their cultivation.', category: 'Vegetables' },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [expandedScenario, setExpandedScenario] = useState(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
//     script.type = 'module';
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const categories = ['All', 'Wheat', 'Paddy', 'Corn', 'Vegetables'];

//   const filteredScenarios = scenarios.filter((scenario) =>
//     scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (selectedCategory === "All" || scenario.category === selectedCategory)
//   );

//   const toggleScenario = (id) => {
//     setExpandedScenario(expandedScenario === id ? null : id);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Crop Visualization</h1>
      
//       <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
//         <input
//           type="text"
//           placeholder="Search scenarios..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full sm:w-64 p-2 border rounded"
//         />
//         <select 
//           onChange={(e) => setSelectedCategory(e.target.value)} 
//           value={selectedCategory}
//           className="w-full sm:w-64 p-2 border rounded"
//         >
//           {categories.map((category) => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
//         {filteredScenarios.map((scenario) => (
//           <ScenarioCard
//             key={scenario.id}
//             scenario={scenario}
//             onClick={toggleScenario}
//             isExpanded={expandedScenario === scenario.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";

// Import your 3D model files here
import model1 from './assets/wheat.glb'; // Tulsi model
import model2 from './assets/wheat.glb'; // Mint model
import model3 from './assets/wheat.glb'; // Aloe Vera model
import model4 from './assets/wheat.glb'; // Ginger model

// Import your image files here
import image1 from './assets/OIP.jpg'; // Tulsi image
import image2 from './assets/OIP.jpg'; // Mint image
import image3 from './assets/OIP.jpg'; // Aloe Vera image
import image4 from './assets/OIP.jpg'; // Ginger image

const App = () => {
    const scenarios = [
        { id: 1, title: 'Tulsi', image: image1, model: model1, description: 'Learn about Tulsi and its medicinal benefits.', category: 'Tulsi', price: 20 },
        { id: 2, title: 'Mint', image: image2, model: model2, description: 'Explore the uses and health benefits of Mint.', category: 'Mint', price: 10 },
        { id: 3, title: 'Aloe Vera', image: image3, model: model3, description: 'Understand the healing properties and uses of Aloe Vera.', category: 'Aloe Vera', price: 25 },
        { id: 4, title: 'Ginger', image: image4, model: model4, description: 'Discover the medicinal properties and uses of Ginger.', category: 'Ginger', price: 30 },
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

    const categories = ['All', 'Tulsi', 'Mint', 'Aloe Vera', 'Ginger'];

    const filteredScenarios = scenarios.filter((scenario) =>
        scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || scenario.category === selectedCategory)
    );

    const handleBuy = (id) => {
        console.log(`Ordering scenario ${id}`);
        // Implement your order logic here
    };

    const toggleScenario = (id) => {
        setExpandedScenario(expandedScenario === id ? null : id);
    };

    return (
        <div className="container mx-auto px-4 py-8 lg:pl-64">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Medicinal Plants</h1>
            
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
                    <div key={scenario.id} className="bg-blue-100 border rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out">
                        <div 
                            className="p-4 cursor-pointer"
                            onClick={() => toggleScenario(scenario.id)}
                        >
                            <h2 className="text-xl font-bold mb-2 text-center text-black">{scenario.title}</h2>
                            <p className="text-sm text-black mb-2 text-center">{scenario.category}</p>
                            <img 
                                src={scenario.image} 
                                alt={scenario.title} 
                                className="w-full h-48 object-cover mb-4 rounded-md"
                            />
                        </div>
                        {expandedScenario === scenario.id && (
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
                                <div className="flex justify-center items-center mt-4">
                                    <span className="font-bold mr-4 text-black">₹{scenario.price.toFixed(2)}</span>
                                    <button 
                                        onClick={() => handleBuy(scenario.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;