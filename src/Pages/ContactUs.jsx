import React, {useState} from 'react'
import { useClickAway } from '@uidotdev/usehooks'
import emailjs from '@emailjs/browser'
import { RiArrowDropDownLine } from "react-icons/ri"
import { GrFormClose } from 'react-icons/gr'

const ContactUs = (props) => {

  const [ data, setData ] = useState({name:"", email:"", phone:""})
  const [ serviceRequested, setServiceRequested ] = useState("")
  const [ message, setMessage ] = useState()
  const [ result, showResult ] = useState(false)
  const [ validEmail, setValidEmail ] = useState(false)
  
  const Result = () => {
    return (
        <p className='text-black'>Your message has been successfully sent!</p>
    )
  }

  const clickAway = useClickAway(() => {
    const close = () => props.setTrigger(false);
    close()
  });

  const EmailResponse = () => {
    return (
        <p>**Please enter a valid email**</p>
    )
  }

  const messageChange = (e) => {
      setMessage(e.target.value)
  }

  const onChangeValidEmail = () => {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (re.test(data.email)) {setValidEmail(false)}
    else setValidEmail(true)
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]:value}) 
  }

  const twoCalls = (e) => {
      onChangeValidEmail();
      handleChange(e)
  }

  const toggle = () => {
    const open = document.querySelector('.toggle')
    open.classList.toggle('hidden')
    const arrow = document.querySelector('.arrow');
    arrow.classList.toggle('hidden');
    const close = document.querySelector('.close')
    close.classList.toggle('hidden')
  }

    

  const sendMail = (e, serviceRequested) => { //EmailJS documentation
    
    // console.log(e)
    e.preventDefault()
    if(!validEmail) {
        emailjs
    .sendForm('service_nznrnso', 'template_5kja3h8', e.target, '5Gj3usQUeUTfCkRdY') //(Service key, templateID, target, PK)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   
    
    e.target.reset();
    setData("")
    setMessage("")
    setServiceRequested("")
    showResult(true)
  }
  else (setValidEmail(true))
  };

  return props.trigger ? (
    <div className="fixed z-10 lg:mb-28 overflow-auto lg:inset-x-0 justify-center lg:mx-auto w-84 lg:w-1/2 lg:h-[820px] items-center bg-white bg-opacity-80 rounded-xl box-shadow-inset-0--3em-3em-opacity-10" ref={clickAway} >
       
        <form className="" method="post" onSubmit={(e) => sendMail(e, serviceRequested)}>
            <div className='flex justify-end pr-5 text-2xl text-black'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
            <h1 className="flex justify-center text-2xl font-extrabold text-black lg:text-4xl font-Montserrat">Business Inquiries</h1>
            
                
            <div className="pl-6 text-lg text-black">
                <span className="pl-3 text-sm font-bold text-black lg:flex lg:text-2xl font-Montserrat">Name:</span>
                <input className="flex justify-center p-1 m-1 lg:m-3 border-2 h-[25px] lg:h-auto border-black border-solid  w-11/12 text-md lg:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl bg-opacity-90 rounded-xl" 
                type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
            </div>

            <div className="pl-6 text-lg text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Email:</span>
                <input className="flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto border-2  border-black border-solid lg:text-lg focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl" 
                type='email' name='email' id="" onChange={twoCalls}  value={data.email} placeholder="example@gmail.com"/>
                <h2 className= "font-semibold text-center text-red-900 underline text-md ">{validEmail ? <EmailResponse/> : null }</h2> 
            </div>

            <div className="pl-6 text-lg text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Phone Number:</span>
                <input className="flex justify-center p-1 m-1 lg:m-3 border-2 h-[25px] lg:h-auto border-black border-solid  w-11/12 text-md lg:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl bg-opacity-90 rounded-xl" 
                type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
            </div>

            <div className="pl-6 text-lg text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Service Requested:</span>
                  <input className="relative flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto text-md lg:text-lg border-2 border-black border-solid focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl" 
                    type='serviceRequested' 
                    name='serviceRequested' 
                    id="" 
                    onClick={toggle}
                    value={serviceRequested} 
                    placeholder="List of Services...">
                  </input>
                  <RiArrowDropDownLine 
                    className='arrow absolute lg:text-[120px] text-black transform lg:-translate-y-1/2 lg:right-0 lg:mb-10 lg:pb-16 lg:mr-12 lg:cursor-pointer'
                    onClick={toggle}>
                  </RiArrowDropDownLine>
                  <GrFormClose 
                    className='close hidden absolute lg:text-[100px] text-gray-500 transform lg:-translate-y-1/2 lg:right-0 lg:mb-10 lg:pb-16 lg:mr-16 lg:cursor-pointer'
                    onClick={toggle}>
                  </GrFormClose>
                  <div className='justify-center lg:pl-4'>
                    <div className='items-center hidden w-1/2 bg-white border border-black toggle rounded-xl'>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Brand Marketing'); toggle()}}>Brand Marketing</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Event Planning'); toggle()}}>Event Planning</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Food and Beverage Consulting'); toggle()}}>Food and Beverage Consulting</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Hospitality Consulting'); toggle()}}>Hospitality Consulting</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Merchandising'); toggle()}}>Merchandising</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Nightlife Consulting'); toggle()}}>Nightlife Consulting</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Open Venue Protocol'); toggle()}}>Open Venue Protocol</ul>
                      <ul className='flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Sourcing'); toggle()}}>Sourcing</ul>
                    </div>
                  </div>
            </div>

            <div className="pl-6 text-lg text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Message:</span>
                <textarea className="flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[75px] lg:h-auto text-md lg:text-lg border-2 border-black border-solid focus:outline-none focus:border-4 rounded-xl focus:border-solid focus:shadow-2xl" 
                name='message' id='' cols='30' rows='7' onChange={messageChange} value={message} placeholder="Enter message here..."/>
            </div>
            
            <h2 className= "justify-center pb-2 text-lg text-center text-white">{result ? <Result/> : null}</h2>
            
            <div className="items-center justify-center text-centerv lg:py-2">
                <button className="w-1/5 lg:text-xl p-2 h-[40px] text-white lg:w-1/4 bg-black rounded-xl hover:text-black hover:bg-stone-100" type='submit'>Send</button>
            </div>    
         </form>  
    </div>
    ): ""
}

export default ContactUs