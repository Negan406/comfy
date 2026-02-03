import React from 'react';

function About() {
    return (
        <div className="p-24 flex flex-row items-center gap-16">
            
            {/* Texte */}
            <div className="flex flex-col gap-8 max-w-xl">
                <h2 className="text-lg text-yellow-600 font-bold relative top-5">
                    About Us
                </h2>

                <h1 className="text-black/80 text-7xl font-semibold mb-6">
                    Welcome to <span className="text-yellow-600">C</span>omfy hotel!
                </h1>

                <p className="text-black/70 text-2xl font-serif ">
                   At Comfy Hotel, we believe comfort is more than a place to stay—it’s an experience. From thoughtfully designed rooms to attentive service and modern amenities, every detail is
                    crafted to make you feel relaxed, welcomed, and at home, wherever your journey takes you.
                </p>
            </div>

            {/* Images gauche */}
            <div className="flex flex-col gap-4 relative left-15 top-16">
                {["ph2.jpg", "ph3.jpg"].map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl border-2 border-gray-300">
                        <img
                            src={img}
                            alt="Hotel"
                            className="w-72 transition-transform duration-500 ease-out hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Image droite */}
            <div className="overflow-hidden rounded-2xl border-2 border-gray-300 w-75 relative top-16">
                <img
                    src="ph1.jpg"
                    alt="Hotel"
                    className="w-80 transition-transform duration-500 ease-out hover:scale-105"
                />
            </div>

        </div>
    );
}

export default About;
