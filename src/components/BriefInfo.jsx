import React from "react";

const BriefInfo = () => {
  return (
    <div className=' flex flex-col md:flex-row h-full bg-black w-full '>
      <div className='h-full w-full md:w-1/2 py-10 m-3'>
        <h1 className='text-white m-3 text-center md:text-5xl sm:text-3xl text-2xl font-bold py-2'>
          Overview Of The Mental Disorders
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white text-center text-lg'>
            Mental illness, also called mental health disorders, refers to a
            wide range of mental health conditions — disorders that affect your
            mood, thinking and behavior. Examples of mental illness include
            depression, anxiety disorders, schizophrenia, eating disorders and
            addictive behaviors. Many people have mental health concerns from
            time to time. But a mental health concern becomes a mental illness
            when ongoing signs and symptoms cause frequent stress and affect
            your ability to function. A mental illness can make you miserable
            and can cause problems in your daily life, such as at school or work
            or in relationships. In most cases, symptoms can be managed with a
            combination of medications and talk therapy (psychotherapy).
          </p>
        </div>
      </div>
      <div className='h-full w-full md:w-1/2 py-10 m-3'>
        <h1 className='text-white text-center m-3 md:text-5xl sm:text-3xl text-2xl font-bold py-2'>
          Symptoms
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-white text-center w-4/5 font-semibold'>
            Signs and symptoms of mental illness can vary, depending on the
            disorder, circumstances and other factors. Mental illness symptoms
            can affect emotions, thoughts and behaviors. Examples of signs and
            symptoms include:
          </p>
          <ul className='text-white list-disc w-3/4'>
            <li className='text-white m-3'>Feeling sad or down</li>
            <li className='text-white m-3'>
              Confused thinking or reduced ability to concentrate
            </li>
            <li className='text-white m-3'>
              Excessive fears or worries, or extreme feelings of guilt
            </li>
            <li className='text-white m-3'>
              Extreme mood changes of highs and lows
            </li>
            <li className='text-white m-3'>
              Withdrawal from friends and activities
            </li>
            <li className='text-white m-3'>
              Significant tiredness, low energy or problems sleeping
            </li>
            <li className='text-white m-3'>
              Excessive anger, hostility or violence
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BriefInfo;
