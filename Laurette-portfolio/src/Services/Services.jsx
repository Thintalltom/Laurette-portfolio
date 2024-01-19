import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className=" bgZinc mt-[10rem]" name="service">
      <p className="text-center sm:text-6xl xs:text-6xl lg:text-9xl text-zinc-800 font-light">
        {" "}
        SERVICES
      </p>
      <p className="text-center text-zinc-400 mt-4">
        I offer the following services :{" "}
      </p>
      <div className=" mt-[30px] cursor-pointer md:flex-col sm:flex-col xs:flex-col lg:flex-row xxl:flex-row flex justify-center items-center gap-[50px] mt-[20px]">
        <div className="  bg-zinc-950 w-[300px] h-[450px]">
          <img
            className="brightness-50 h-[200px]"
            src="https://plus.unsplash.com/premium_photo-1664298417425-16dfa061fdaa?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBtYW4lMjB3cml0aW5nfGVufDB8fDB8fHww"
          />
          <p className="text-center text-zinc-300 mt-[10px] font-bold text-lg">
            Ghost writing
          </p>
          <p className="text-zinc-300 font-light mt-[5px] p-4 text-center text-xs leading-loose">
          My ghostwriting service is arranged to bring your story 
          to life and also make your publishing dreams come true. 
          I can help write your cover letters, CVs, 
          and Statements of Intent at an affordable price.
          </p>
        </div>
        <div className="bg-zinc-950 w-[300px] h-[450px]">
          <img
            className="brightness-50 h-[200px]"
            src="https://images.unsplash.com/photo-1511161576033-13276ce03881?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwbWFuJTIwcmVhZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <p className="text-center text-zinc-300 font-bold mt-4">
            Proofreading/Editing
          </p>
          <p className="p-4 text-zinc-300 font-light text-center text-xs leading-loose">
          Few readers purchase a book without first reading a few pages.
           A good cover and a catchy title will grab their attention, 
           but clear, error-free writing will close the sale. 
           I will edit your text so it will be free from errors in spelling, 
          sentence structure, word order, grammar, punctuation, etc.
          </p>
        </div>
        <div className="bg-zinc-950 w-[300px] h-[450px]">
          <img
            className="brightness-50 "
            src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW4lMjBlZGl0aW5nJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <p className="text-center text-zinc-300 font-bold mt-4">Publishing</p>
          <p className="p-4 text-zinc-300 font-light text-center text-xs leading-loose">
          I pride myself on birthing awesome books, especially books 
            written by up-and-coming writers of African descent.
           I believe that everyone has a story to tell and
           that's why I help up-and-coming writers accomplish their goals.
          </p>
        </div>
        <div className="bg-zinc-950 w-[300px] h-[450px]">
          <img
            className="brightness-50"
            src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwbWFuJTIwY29uc3VsdGluZyUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
          />
          <p className="text-center text-zinc-300 font-bold mt-4">
            Coaching and Consulting Services
          </p>
          <p className="p-4 text-zinc-300 font-light text-center text-xs leading-loose ">
          I give up-and-coming writers one-on-one guidance for their work in progress. 
          I value writers at every level of their writing process. 
          Therefore, I provide them with resources to continue to improve their skills.
          </p>
        </div>
      </div>
      <div className="flex   justify-center items-center p-4 ">
      
      </div>
    </div>
  );
};

export default Services;
