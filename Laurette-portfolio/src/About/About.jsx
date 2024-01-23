import React from "react";
import './About.css'
import aina from '../assets/aina.jpg'
const About = () => {
  return (
    <div name="about">
      <div className=" p-4 bgZinc  ">
        <div className="flex lg:flex-row sm:flex-col xs:flex-col md:flex-col">
          <div className="text-sm leading-loose  p-[5px]  gap-4">
            <p className=''>
              Hi. My name is Aina  Temitope Emmanuel. I am a wordsmith. My pseudonym
              is E.T.H...AINA. I studied  English at the University of Ibadan, Oyo
              State, South West, Nigeria.  </p>
            <p> Writing gives me the freedom to create a
              world where I set the rules, where the characters act the way I  want
              them to, a world where everything is exactly how I want it to be and I
              know that I am the one who controls everything.</p>
            <p> I began writing at
              only a few years of age. I have published four books (Obinze the
              Fearless Boy, Heart to Heart, My Country is Insane, and Everything
              That Makes Me Cry), and some of my writings have appeared in Poetry
              Potion, Visual Verse, and other literary magazines.</p>
            <p> I live in Lagos,
              South West, Nigeria but grew up in Ikole Ekiti, Ekiti State, South
              West, Nigeria and its influence is clearly noticeable in my poems. </p>
            <p className='italic'>I
              enjoy writing about the clichéd themes of typical "Nigerian
              Literature" — corruption, injustice, immorality, poverty, bigotry,
              terrorism, Western exploitation, gender inequality, and others.</p>
            <p>In my
              current role as a Book Publisher at McLaureate Press, I supervise all
              editorial activities, including developing editorial storyboards and
              managing and directing ghostwriters’ and editors’ tasks. I also
              solicit and receive submissions of fiction, poetry, non-fiction, and
              academic books. In addition to that, I oversee all aspects of book
              production and operation, including advertising, editorial, and
              circulation. Finally, I liaise with printers and others to ensure each
              phase is completed properly throughout the publishing process.</p>
            <p>As the
              Content Writer at Musaroq Nigeria Limited (Heritage Center),
              Ifako-Ijaye, Lagos from September 2021 to October 2022, I used
              storytelling techniques to write content for newsletters to promote
              products and services. I also wrote and edited high-quality content
              and visually impactful programs under deadline pressure with an
              exciting, captivating, and authentic approach and I also crafted
              SEO-friendly content for websites and blog posts to increase organic
              traffic. </p>
            <p> While working as a Creative Writer at Emirates Publishers,
              Somolu, Lagos, Nigeria, from September 2019 to August 2021, I wrote
              short stories and narrative non-fiction as well as advertising
              material for use in promoting the sale of goods and services. Most
              importantly, I chose and followed targeted styles, grammatical
              approaches, and narrative voices for each piece and I utilized
              exceptional writing skills to produce engaging and error-free content.</p>
            <p>  Also, as a freelance writer, I've had some ghostwriting clients. All
              of them are influencers in their industry or areas of specialization
              wanting to write memoirs, business proposals, professional CVs, and
              letters of introduction.</p>
            <p>Finally, I am a seasoned teacher. I have been
              teaching English and Literature-in-English for decades. As a teacher,
              I improve students' English grammar and vocabulary levels through
              written and interactive activities. </p>
            <p className="mt-[20px] italic "> Nice meeting you.</p>
          </div>
          <div className=" lg:w-[100rem]   xs:w-[90vw] flex items-center">
            <img src={aina} className="w-[500px] h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
