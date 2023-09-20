import React from "react";
// import Laptop from "../assets/laptop.jpg";
import NeuronRenderer from "./NeuronRenderer";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='w-2/3 flex justify-center items-center'>
          <NeuronRenderer />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>
            Neuron : The basic building block of brain
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Mental Disorders through Neuron
          </h1>
          <p>
            Mental disorders are complex conditions that affect millions of
            people worldwide. While their exact causes remain a subject of
            ongoing research, scientists have made significant strides in
            understanding the role of neurons in the development and
            manifestation of these disorders. Neurons, the fundamental building
            blocks of the nervous system, play a crucial role in our thoughts,
            emotions, and behaviors.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
