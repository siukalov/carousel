import React, { useState } from 'react';
import './app.css';
import { Carousel } from './carousel'

const images = [
  { id: '1', src: 'https://via.placeholder.com/1920x1080.png?text=image-1' },
  { id: '2', src: 'https://via.placeholder.com/1280x720.png?text=image-2' },
  { id: '3', src: 'https://via.placeholder.com/1080x1920.png?text=image-3' },
  { id: '4', src: 'https://via.placeholder.com/1920x1080.png?text=image-4' },
  { id: '5', src: 'https://via.placeholder.com/1080x1920.png?text=image-5' },
  { id: '6', src: 'https://via.placeholder.com/2560x1444.png?text=image-6' },
  { id: '7', src: 'https://via.placeholder.com/500x500.png?text=image-7' },
]

export function App() {
  let [isOpen, setIsOpen] = useState(false)


  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="flex items-center bg-slate-300 mt-5 justify-center w-1/2 h-[60px]">Search</div>
      <div className="w-1/2 h-[600px] bg-slate-300 mt-5 flex flex-col justify-between">
        <div className="h-full">
          <div className="flex items-center justify-center h-full">Invoice #1</div>
        </div>
        <div className="flex justify-end p-2 h-fit bg-slate-600">
          <button className="px-4 py-2 bg-green-400 rounded-lg" onClick={() => setIsOpen(true)}>View pictures</button>
        </div>
      </div>
      <div className="w-1/2 h-[600px] bg-slate-300 mt-5 flex flex-col justify-between">
        <div className="h-full">
          <div className="flex items-center justify-center h-full">Invoice #2</div>
        </div>
        <div className="flex justify-end p-2 h-fit bg-slate-600">
          <button className="px-4 py-2 bg-green-400 rounded-lg" onClick={() => setIsOpen(true)}>View pictures</button>
        </div>
      </div>
      <Carousel open={isOpen} onClose={() => setIsOpen(false)}>{images}</Carousel>
    </div>
  );
}


