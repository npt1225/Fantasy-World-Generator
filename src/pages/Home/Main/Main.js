import React from 'react'
import Primis from './Primis/Primis'
import ModelCard from './ModelCard/ModelCard'

export default function Main() {
    return (
        <main className="flex flex-col items-center mt-16">
            <h1 className="text-4xl font-semibold text-center text-title">
                Fantasy World Generator
            </h1>
            <p className="mt-5 mb-3 text-2xl text-style">
                Generate an image in fantasy style.
            </p>

            {/* <Primis /> */}
            <ModelCard />
            <h5 className="check-gallery-button"><a href="/art" className="check-gallery">See what AI Art other users
                are creating!</a></h5>
        </main>
    )
}
