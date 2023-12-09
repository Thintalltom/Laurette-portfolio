import React from "react";

const About = () => {
  return (
    <div name='about'>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col  p-4 justify-around gap-[20px] ">
        <div className="font-extralight lg:text-7xl xs:text-5xl text-zinc-800">
          <p>eth.aina</p>
          <p>Bio</p>
        </div>
        <div className="text-center  flex justify-center items-center">
          ____________________
        </div>
        <div className="font-extralight text-zinc-300  gap-4">
          <p className="indent-8">
            Aina Temitope Emmanuel, affectionately known as Eth.Aina, is a
            prolific writer, esteemed publisher, and dedicated author who has
            left an indelible mark on the literary landscape. Born with a love
            for words and a knack for storytelling, Eth.Aina has seamlessly
            blended his passion for literature with a commitment to making the
            world of writing more accessible to others.{" "}
          </p>
          <p>
            {" "}
            Hailing from Lagos, Nigeria, Eth.Aina embarked on his academic
            journey at the prestigious University of Ibadan, where he pursued a
            Bachelor's degree in English. It was during his time at this
            venerable institution that he honed his skills as a wordsmith and
            cultivated a deep appreciation for the nuances of language and
            literature.
          </p>
          <p className="indent-8">
            {" "}
            After earning his BA in English, Eth.Aina delved into the world of
            publishing and authorship, where he quickly made a name for himself.
            As a publisher, he has been at the forefront of bringing diverse and
            compelling stories to the public, contributing significantly to the
            rich tapestry of Nigerian literature.
          </p>
          <p className="indent-8">
            Beyond his professional endeavors, Eth.Aina remains deeply engaged
            with the literary community. He actively participates in initiatives
            aimed at promoting literacy, supporting emerging writers, and
            fostering a love for reading. His impact extends beyond the pages of
            his books, leaving an enduring legacy in the hearts and minds of
            those he has inspired.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
