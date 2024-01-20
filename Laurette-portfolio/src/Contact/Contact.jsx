import React,{useRef, useState} from "react";
import {
  FaTwitterSquare,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  const isGmailAddress = (message) => {
    // Use a regular expression to check if the email is a valid Gmail address
    const gmailRegex = /@gmail\.com$/;
    return gmailRegex.test(message);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    // Check if the email is a valid Gmail address
    if (!isGmailAddress(message)) {
   
      return;
    }

    setLoading(true);
    emailjs.sendForm('service_ahp1dwa', 'template_7c21dti', form.current, 'eb_3WUJ-TThePsnGZ')
    .then((result) => {
          console.log(result.text);
          setUser(result)
          console.log(result);
          // Display success message for a few seconds (e.g., 3000 milliseconds)
          setTimeout(() => {
            setUser(null);
          }, 3000);
        
      }, (error) => {
          console.log(error.text);
      }).finally(() => {
        setLoading(false)
  
      });
  };

  
  return (
    <div className="mt-[3rem] p-[20px]  ">

       

      <p className="text-center font-light">Subscribe for newsletter </p>
     
      <div className="bg-zinc-450 p-4 flex-col gap-[50px]   flex items-center justify-center ">
        <div className="border-[0.1px]   p-4 flex justify-center items-center flex-col ">
      
          <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center xs:flex-col gap-[10px] lg:flex-row xxl:flex-row md:flex-row'>
         
          <input
            type="email"
            className=" text-white bg-transparent border-[0.1px]  lg:w-[300px] xs:w-[250px]  p-[5px] rounded-sm"
            name="message"
            placeholder="Enter Email"
          />
          <button  className="bg-white text-zinc-950 w-[100px] p-[5px] rounded-sm font-light ">
          {loading ? "Loading 🤗" : "Subscribe"}
          </button>
    
          </form>
         
        </div>
        {user != null ? ( <div className="text-white  p-[20px]">Thank you for subscribing 😊 </div>) : (<p></p>)}
      </div>
      <p className="text-center mt-[20px] text-zinc-400 font-light">
        Connect with me on <a>Amazon.com</a>
      </p>
      <div className="flex justify-center mt-4 items-center gap-[30px]">
        <a className="text-5xl cursor-pointer" href="https://twitter.com/ETH_Aaina"  target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
        <a className="text-5xl cursor-pointer" href="https://www.facebook.com/officialeth.aina?mibextid=9R9pXO" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a
          className="text-5xl cursor-pointer"
          href="https://www.linkedin.com/in/aina-temitope-emmanuel-eth-aina-7190a720b/"
          target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a className="text-5xl cursor-pointer" href="https://instagram.com/eth.aina?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"  target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <a href="https://twitter.com/tomideofGod" className="text-center mt-[20px] font-extralight" target="_blank" rel="noopener noreferrer" > <p className="text-center mt-[20px]">developed by @tofG</p></a>
     
    </div>
  );
};

export default Contact;
