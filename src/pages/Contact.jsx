import React, { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import  {Canvas}  from "@react-three/fiber";
import Fox from '../models/Fox'
import  Loader  from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";


const Contact = () => {
  const fromRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  

  const [isloading,setIsLoading] = useState(false)
  const [currentAnimation,setcurrentAnimation] = useState('idle')

  const { alert,showAlert ,hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleFocus = () => setcurrentAnimation('walk');

  const handleBlur = () => setcurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setcurrentAnimation('hit');

    emailjs.send(
   'service_a2b0wla',
    'template_vyjkhdu',
      {
        from_name: form.name,
        to_name: 'Harsh',
        from_email: form.email,
        to_email: 'mynameisharsh143@gmail.com',
        message:form.message
      },
     
      'hQUKqpOWEfrp2iqnd'
    ).then(() => {
      setIsLoading(false)
      showAlert({show:true,text:'message sent successfully', type:'success'})

      setTimeout(() => {
        setcurrentAnimation('idle')
        setForm({name:'',email:'',message:''})
      }, [3000])
      
      //success
      setcurrentAnimation('idle')
      //hide alert
    }).catch((error) => {
      setIsLoading(false)
      setcurrentAnimation('idle')
      console.log(error)
      showAlert({show:true,text:'i didnt recxive your message', type:'danger'})

    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert{...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
          type = "submit"
          className="btn"
          disabled={isloading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >

            {isloading ? 'Sending...': 'Send Message'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">

<Canvas
 camera={
  {
    position:[0,0,5],
    fov:75,
    near:0.1,
    far:1000
  }
 }
>
  <directionalLight intensity={2.5}
  position={[0,0,1]}
  />
  <ambientLight intensity={0.5}/>

 <Suspense >
  <Fox 
  currentAnimation={currentAnimation}
       position={[0.5,0.35,0]}
       rotation={[12.6,-0.6,0]}
       scale={[0.5,0.5,0.5]}
  />
 </Suspense>
</Canvas>

</div>
    </section>
  );
};

export default Contact;
