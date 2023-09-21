import React from "react";

const Newsletter = () => {
  return (
    <div className=" flex flex-col md:flex-row h-screen bg-black w-full ">
      <div className="h-full w-1/2 py-10">
        <h1 className="text-white  text-center md:text-5xl sm:text-3xl text-2xl font-bold py-2">
          Contact A Consultant
        </h1>
        <div className="flex flex-col justify-center items-center">
          <input
            className="m-4 p-3  flex w-2/3 md:w-1/2 rounded-md text-black"
            type="name"
            placeholder="Enter Your Name"
          />
          <input
            className="m-4 p-3  flex w-2/3 md:w-1/2 rounded-md text-black"
            type="email"
            placeholder="Enter Email"
          />
          <textarea
            className="m-4 p-3  flex w-2/3 md:w-1/2 rounded-md text-black"
            type="email"
            placeholder="Any message for us"
          ></textarea>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
            Notify Me
          </button>
        </div>
        <p className="text-white text-center">
          We care bout the protection of your data. Read our{" "}
          <span className="text-[#00df9a]">Privacy Policy.</span>
        </p>
      </div>
      <div className="h-full w-1/2 py-10">
        <h1 className="text-white text-center md:text-5xl sm:text-3xl text-2xl font-bold py-2">
          Some Health Tips
        </h1>
        <div className="flex flex-col justify-center items-center">
          <ul className="text-white list-disc w-3/4">
            <li className="text-white m-3">
              Regular exercise increases blood flow to the brain and promotes
              the growth of new brain cells.
            </li>
            <li className="text-white m-3">
              Engage in lifelong learning, whether it's through formal
              education, hobbies, or creative pursuits.
            </li>
            <li className="text-white m-3">
              Consume a diet rich in fruits, vegetables, whole grains, lean
              proteins, and healthy fats like omega-3 fatty acids found in fish.
            </li>
            <li className="text-white m-3">
              Aim for 7-9 hours of quality sleep per night to allow your brain
              to rest and consolidate memories.
            </li>
            <li className="text-white m-3">
              Chronic stress can harm the brain. Practice relaxation techniques
              like meditation, yoga, or deep breathing.
            </li>
            <li className="text-white m-3">
              Stimulate your mind with puzzles, games, reading, and learning new
              skills to keep your brain active.
            </li>
            <li className="text-white m-3">
              Stay updated on the latest research and information related to
              brain health.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
{
  /* <div className="w-full py-16 text-white px-4">
  <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
    <div className="lg:col-span-2 my-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
        Want tips & tricks to optimize your flow?
      </h1>
      <p>Sign up to our newsletter and stay up to date.</p>
    </div>
    <div className="my-4">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <input
          className="p-3 flex w-full rounded-md text-black"
          type="email"
          placeholder="Enter Email"
        />
        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
          Notify Me
        </button>
      </div>
      <p>
        We care bout the protection of your data. Read our{" "}
        <span className="text-[#00df9a]">Privacy Policy.</span>
      </p>
    </div>
  </div>
      
</div>; */
}
