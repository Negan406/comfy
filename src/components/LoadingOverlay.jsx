import React from "react";
import { motion } from "framer-motion";

const LoadingOverlay = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative">
                {/* Animated Rings */}
                <motion.div
                    className="h-24 w-24 rounded-full border-4 border-ca8a04/20"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute inset-0 h-24 w-24 rounded-full border-t-4 border-ca8a04 shadow-[0_0_15px_rgba(202,138,4,0.5)]"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Text Animation */}
                <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <span className="text-xl font-light tracking-widest text-[#ca8a04] uppercase">
                        Comfy
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingOverlay;
