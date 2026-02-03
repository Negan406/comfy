import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
    const [textRef, textVisible] = useScrollAnimation(0.2);
    const [leftImagesRef, leftImagesVisible] = useScrollAnimation(0.2);
    const [rightImageRef, rightImageVisible] = useScrollAnimation(0.2);

    return (
        <div className="p-24 flex flex-row items-center justify-center gap-16 relative bottom-15">

            {/* Texte */}
            <div
                ref={textRef}
                className={`flex flex-col gap-8 max-w-xl transition-all duration-1000 ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
            >
                <h2 className="text-lg text-yellow-600 font-bold relative top-5">
                    About Us
                </h2>

                <h1 className="text-black/80 text-7xl font-semibold mb-6">
                    Welcome to <span className="text-yellow-600">C</span>omfy hotel!
                </h1>

                <p className="text-black/70 text-2xl font-serif ">
                    At Comfy Hotel, we believe comfort is more than a place to stay—it's an experience. From thoughtfully designed rooms to attentive service and modern amenities, every detail is
                    crafted to make you feel relaxed, welcomed, and at home, wherever your journey takes you.
                </p>
            </div>

            {/* Images gauche */}
            <div
                ref={leftImagesRef}
                className={`flex flex-col gap-1 relative left-15 top-16 transition-all duration-1000 delay-200 ${leftImagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
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
            <div
                ref={rightImageRef}
                className={`overflow-hidden rounded-2xl border-2 border-gray-300 w-72 relative top-16 transition-all duration-1000 delay-400 ${rightImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
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
