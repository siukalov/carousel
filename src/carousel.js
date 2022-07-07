import React, { useState } from 'react';
import { Modal } from './modal'

export const Carousel = ({ children = [], open = false, onClose }) => {
    const [visibleItem, setVisibleItem] = useState(0);

    const handlePreviousImage = () => setVisibleItem((value) => {
        if (value - 1 < 0) {
            return children.length - 1
        } else {
            return value - 1
        }
    })

    const handleNextImage = () => setVisibleItem((value) => {
        if (value + 1 >= children.length) {
            return 0
        } else {
            return value + 1
        }
    })

    const isVisible = index => visibleItem === index ? 'visible' : 'hidden';

    return (
        <Modal open={open} onClose={onClose}>
            <div id="default-carousel" className="relative">
                <div className="relative overflow-hidden">
                    {children?.map((item, index) => (
                        <div key={item.id} className={`${isVisible(index)} duration-700 ease-in-out data-carousel-item h-[600px] flex justify-center items-center`}>
                            <img src={item.src} className="object-contain top-1/2 left-1/2 h-[600px]" alt="..." />
                        </div>
                    ))}
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePreviousImage}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextImage}>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>
        </Modal>
    );
};
