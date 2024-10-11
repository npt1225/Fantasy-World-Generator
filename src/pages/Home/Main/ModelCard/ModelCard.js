
import React, { useState } from 'react'
import axios from 'axios'
export default function ModelCard() {
    const [selectedModel, setSelectedModel] = useState('Standard');
    const [currentShape, setCurrentShape] = useState('edit_shape_1');
    const [selectedPriority, setSelectedPriority] = useState('Speed');
    const [isShapeOptionsVisible, setIsShapeOptionsVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState("https://storage.googleapis.com/a1aa/image/4JVe2aEmUfgMhUfRfv0bjysHyULEvfXSdJ21AccnOPiisfU5E.jpg");
    const [prompt, setPrompt] = useState(""); // New state for the prompt
    const handleModelClick = (model) => {
        setSelectedModel(model);
    };
    const handlePriorityClick = (priority) => {
        setSelectedPriority(priority);
    };
    const handleImageChange = (newImageSrc) => {
        setCurrentImage(newImageSrc);
    };

    const handleShapeClick = (shapeId) => {
        setCurrentShape(shapeId);
    };

    const toggleShapeOptions = () => {
      setIsShapeOptionsVisible(!isShapeOptionsVisible);
    };
  
    const handlePromptChange = (event) => {
        setPrompt(event.target.value); // Update prompt state
    };
    
async function generateImage(prompt) {
    try {
        console.log('Image URL:', prompt);
    } catch (error) {
        console.error('Error generating image:', error);
    }
}
    
    return (
        <div className="mt-4 flex flex-col md:flex-row space-x-0 md:space-x-8 model-card">
            <div className="model-card-container">
                <div className=" p-8 rounded-lg shadow-lg w-full md:w-[450px] form-left">
                    <div className="mb-4">
                        <label className="block text-lg font-medium" htmlFor="prompt">
                            Create an image from text prompt
                        </label>
                        <span className="model-input-col">
                            <textarea className="mt-1 block w-full p-2 bg-[#0d0c1d] border border-gray-700 rounded-md text-white .model-input-text-input" id="prompt" placeholder="Enter your prompt" type="text" defaultValue={""}   onChange={handlePromptChange} />
                        </span>
                    </div>
                    <div className="options-border" />
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-3">
                            Choose a model
                        </label>
                        <div className="image-models-container">
                            <button
                                id="modelStandardButton"
                                type="button"
                                onClick={() => handleModelClick('Standard')}
                                style={{ background: selectedModel === 'Standard' ? 'rgb(143, 55, 255)' : '' }}
                            >
                                Standard
                            </button>

                            <button
                                id="modelHdButton"
                                type="button"
                                onClick={() => handleModelClick('HD')}
                                style={{ background: selectedModel === 'HD' ? 'rgb(143, 55, 255)' : '' }}
                            >
                                HD
                            </button>

                            <button
                                id="modelGeniusModeButton"
                                type="button"
                                locked="true"
                                onClick={() => handleModelClick('Genius')}
                                style={{ background: selectedModel === 'Genius' ? 'rgb(143, 55, 255)' : '', position: 'relative' }}
                            >
                                <img id="imageGeniusLockedIcon" src="https://deepai.org/static/images/lock-icon.png" alt="locked" />
                                Genius
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-3">
                            Preference
                        </label>
                        <div className="image-models-priority-container">
                            <button
                                id="modelTurboButton"
                                type="button"
                                onClick={() => handlePriorityClick('Speed')}
                                style={{ background: selectedPriority === 'Speed' ? 'rgb(143, 55, 255)' : '' }}
                            >
                                Speed
                            </button>

                            <button
                                id="modelQualityButton"
                                type="button"
                                onClick={() => handlePriorityClick('Quality')}
                                style={{ background: selectedPriority === 'Quality' ? 'rgb(143, 55, 255)' : '' }}
                            >
                                Quality
                            </button>
                        </div>
                    </div>
                    <div className="options-border" />
                    <div className="mb-4">
                        <label className="block text-sm font-medium">
                            Choose a style
                        </label>
                        <div id="other-model-links">
                            <a
                                className="other-model-button"
                                onClick={() => handleImageChange("https://images.deepai.org/machine-learning-models/d2afc7b3120645308ced92110fac77ae/text2img-thumb.jpg")}
                            >
                                <img
                                    className="model-icon"
                                    src="https://images.deepai.org/machine-learning-models/d2afc7b3120645308ced92110fac77ae/text2img-thumb.jpg"
                                    alt="AI Image Generator"
                                />
                            </a>

                            <a
                                className="other-model-button"
                                onClick={() => handleImageChange("https://images.deepai.org/machine-learning-models/50c039053c6941528c5522e8db312af4/cute-creature-generator-thumb.jpg")}
                            >
                                <img
                                    className="model-icon"
                                    src="https://images.deepai.org/machine-learning-models/50c039053c6941528c5522e8db312af4/cute-creature-generator-thumb.jpg"
                                    alt="Cute Creature Generator"
                                />
                            </a>

                            <a
                                className="other-model-button"
                                onClick={() => handleImageChange("https://images.deepai.org/machine-learning-models/b529aefa83d842f080c0149cab9ed496/fantasy-world-generator-thumb.jpg")}
                            >
                                <img
                                    className="model-icon"
                                    src="https://images.deepai.org/machine-learning-models/b529aefa83d842f080c0149cab9ed496/fantasy-world-generator-thumb.jpg"
                                    alt="Fantasy World Generator"
                                />
                            </a>

                            <a
                                className="other-model-button"
                                onClick={() => handleImageChange("https://images.deepai.org/machine-learning-models/ab8cfbb6e29f41ad9316302a079ff715/cyberpunk-generator-thumb.jpg")}
                            >
                                <img
                                    className="model-icon"
                                    src="https://images.deepai.org/machine-learning-models/ab8cfbb6e29f41ad9316302a079ff715/cyberpunk-generator-thumb.jpg"
                                    alt="Cyberpunk Generator"
                                />
                            </a>

                            <a
                                className="other-model-button"
                                onClick={() => handleImageChange("https://images.deepai.org/machine-learning-models/1497856e7828430aa26fdaf073a08c92/anime-portrait-generator-thumb.jpg")}
                            >
                                <img
                                    className="model-icon"
                                    src="https://images.deepai.org/machine-learning-models/1497856e7828430aa26fdaf073a08c92/anime-portrait-generator-thumb.jpg"
                                    alt="Anime Portrait Generator"
                                />
                            </a>
                        </div>
                        <a className="all-other-models" href="/styles">
                            View all +100 styles
                        </a>
                    </div>
                    <div className="options-border" />
                    <div className="edit-buttons-container">
                        <button id="modelEditButton" type="button"  onClick={toggleShapeOptions}>Choose Shape<img className="downarrow" src="https://deepai.org/static/images/down-arrow.svg" /></button>
                        {isShapeOptionsVisible && (
                        <div id="suboutline-try-it" style={{ display: 'flex' }}>
                            <div id="shape-row">
                                <div
                                    className="imageShapeButton first-shape"
                                    id="edit_shape_1"
                                    onClick={() => handleShapeClick('edit_shape_1')}
                                    iscurrentshape={currentShape === 'edit_shape_1' ? 'True' : 'False'}
                                    style={{ background: currentShape === 'edit_shape_1' ? 'rgb(143, 55, 255)' : '' }}
                                >
                                </div>

                                <div
                                    className="imageShapeButton second-shape"
                                    id="edit_shape_2"
                                    onClick={() => handleShapeClick('edit_shape_2')}
                                    iscurrentshape={currentShape === 'edit_shape_2' ? 'True' : 'False'}
                                    style={{ background: currentShape === 'edit_shape_2' ? 'rgb(143, 55, 255)' : '', display: 'block' }}
                                >
                                </div>

                                <div
                                    className="imageShapeButton third-shape"
                                    id="edit_shape_3"
                                    onClick={() => handleShapeClick('edit_shape_3')}
                                    iscurrentshape={currentShape === 'edit_shape_3' ? 'True' : 'False'}
                                    style={{ background: currentShape === 'edit_shape_3' ? 'rgb(143, 55, 255)' : '' }}
                                >
                                </div>

                                <div
                                    className="imageShapeButton fourth-shape"
                                    id="edit_shape_4"
                                    onClick={() => handleShapeClick('edit_shape_4')}
                                    iscurrentshape={currentShape === 'edit_shape_4' ? 'True' : 'False'}
                                    style={{ background: currentShape === 'edit_shape_4' ? 'rgb(143, 55, 255)' : '', display: 'block' }}
                                >
                                </div>

                                <div
                                    className="imageShapeButton fifth-shape"
                                    id="edit_shape_5"
                                    onClick={() => handleShapeClick('edit_shape_5')}
                                    iscurrentshape={currentShape === 'edit_shape_5' ? 'True' : 'False'}
                                    style={{ background: currentShape === 'edit_shape_5' ? 'rgb(143, 55, 255)' : '' }}
                                >
                                </div>
                            </div>
                        </div>
                        )}
                        <div className="options-border" />
                        <button id="modelSubmitButton" type="button" onClick={() =>{generateImage(prompt)}}>Generate</button>
                    </div>
                </div>
                <div>
                    <img alt="Fantasy landscape with trees and a bridge in the background" className="rounded-lg shadow-lg" height={500} src={currentImage} width={560} />
                </div>
            </div>
        </div>
    )
}

