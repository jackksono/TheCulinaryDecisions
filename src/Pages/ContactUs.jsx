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
        <p className='text-xs text-black sm:text-base'>Your message has been successfully sent!</p>
    )
  }

  const clickAway = useClickAway(() => {
    const close = () => props.setTrigger(false);
    close()
  });

  const EmailResponse = () => {
    return (
        <p >**Please enter a valid email**</p>
    )
  }

  const messageChange = (e) => {
      setMessage(e.target.value)
  }

  // const onChangeValidEmail = () => {
  //   let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (re.test(data.email)) {setValidEmail(false)}
  //   else setValidEmail(true)
  // }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'email') {
      let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setValidEmail(!re.test(value));
  }

    setData({...data, [name]:value}) 
  }

  // const twoCalls = (e) => {
  //     onChangeValidEmail();
  //     handleChange(e)
  // }

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
    <div className="fixed z-20 overflow-auto inset-x-0 justify-center mx-auto w-3/4 sm:w-1/2 h-[450px] sm:h-[700px] items-center bg-white  rounded-xl box-shadow-inset-0--3em-3em-opacity-10" 
    ref={clickAway}
    >
        <form className="" method="post" onSubmit={(e) => sendMail(e, serviceRequested)}>
            <div className='flex justify-end pr-5 text-2xl text-black font-Montserrat '>    
                <button className='hover:text-stone-300' onClick={() => props.setTrigger(false)}>X</button>
            </div>
            <h1 className="flex justify-center text-xl font-extrabold text-black sm:text-4xl font-Montserrat">Business Inquiries</h1> 
            <div className="pt-3 pl-6 text-black sm:pt-0">
                <span className="flex pl-3 text-xs font-bold text-black sm:text-lg font-Montserrat">Name  <span className='sm:text-sm'>(required)</span></span>
                <input 
                  className="flex justify-center p-1 m-1 sm:m-1 border-2 h-[20px] sm:h-auto border-black border-solid font-Montserrat w-11/12 text-xs sm:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl rounded-xl" 
                  type='text' 
                  name='name' 
                  id=""
                  onChange={handleChange} 
                  value={data.name} 
                  placeholder="Enter name"
                  required
                 />
            </div>

            <div className="pl-6 text-black sm:pt-2">
                <span className="flex pl-3 text-xs font-bold sm:text-lg font-Montserrat">Email <span className='sm:text-sm'>(required)</span></span>
                <input 
                  className="flex justify-center w-11/12 p-1 m-1 sm:m-1 h-[20px] sm:h-auto border-2 font-Montserrat text-xs border-black border-solid sm:text-lg focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl" 
                  type='email' 
                  name='email' 
                  id="" 
                  onChange={handleChange}  
                  value={data.email} 
                  placeholder="example@gmail.com"
                  required>
                </input>
               
                <h2 className= "font-semibold text-center text-red-900 underline text:sm sm:text-base font-Montserrat">{validEmail ? <EmailResponse/> : null }</h2> 
            </div>

            <div className="pl-6 text-black sm:pt-2">
                <span className="flex pl-3 text-xs font-bold sm:text-lg font-Montserrat">Phone Number:</span>
                <input className="flex justify-center p-1 m-1 sm:m-1 border-2 h-[20px] sm:h-auto border-black border-solid font-Montserrat w-11/12 text-xs sm:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl rounded-xl" 
                type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
            </div>

            <div className="pl-6 text-black sm:pt-2">
                <span className="flex pl-3 text-xs font-bold sm:text-lg font-Montserrat">Service Requested <span className='sm:text-sm'>(required)</span></span>
                  <input className="relative flex justify-center w-11/12 p-1 m-1 sm:m-1 h-[20px] font-Montserrat sm:h-auto text-xs sm:text-lg border-2 border-black border-solid focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl" 
                    type='serviceRequested' 
                    name='serviceRequested' 
                    id="" 
                    onClick={toggle}
                    onChange={handleChange} 
                    value={serviceRequested} 
                    placeholder="List of Services..."
                    required>
                  </input>
                  <RiArrowDropDownLine 
                    className='arrow absolute sm:text-[100px] text-black transform -translate-y-6 sm:-translate-y-1/2 right-0 mr-12 sm:pb-12 sm:mr-12 sm:cursor-pointer hover:text-gray-400'
                    onClick={toggle}>
                  </RiArrowDropDownLine>
                  <GrFormClose 
                    className='close hidden absolute sm:text-[80px] text-black transform -translate-y-5 sm:-translate-y-1/2 right-0 pb-1 mr-10 sm:pb-12 sm:mr-16 sm:cursor-pointer hover:text-gray-400'
                    onClick={toggle}>
                  </GrFormClose>
                  <div className='justify-center pt-0 pl-1 sm:pl-4'>
                    <div className='items-center hidden w-1/2 text-[8px] bg-white border border-black sm:text-base toggle rounded-xl'>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Brand Marketing'); toggle()}}>Brand Marketing</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Event Planning'); toggle()}}>Event Planning</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Food and Beverage Consulting'); toggle()}}>Food and Beverage Consulting</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Hospitality Consulting'); toggle()}}>Hospitality Consulting</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Merchandising'); toggle()}}>Merchandising</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Nightlife Consulting'); toggle()}}>Nightlife Consulting</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Open Venue Protocol'); toggle()}}>Open Venue Protocol</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Sourcing'); toggle()}}>Sourcing</ul>
                      <ul className='flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white' onClick={() => {setServiceRequested('Other'); toggle()}}>Other</ul>
                    </div>
                  </div>
            </div>

            <div className="pl-6 text-black align-baseline sm:pt-2">
                <span className="flex pl-3 text-xs font-bold sm:text-lg font-Montserrat">Message <span className='sm:text-sm'>(required)</span></span>
                <textarea 
                  className="flex justify-center w-11/12 p-1 m-1 sm:m-1 h-[75px] font-Montserrat sm:h-auto text-xs sm:text-lg border-2 border-black border-solid focus:outline-none focus:border-4 rounded-xl focus:border-solid focus:shadow-2xl" 
                  name='message' 
                  id='' 
                  cols='30' 
                  rows='5' 
                  onChange={messageChange} 
                  value={message} 
                  placeholder="Enter message here..."
                  required>
                </textarea>
            </div>
            
            <h2 className= "justify-center pb-2 text-xs text-center text-white sm:text-sm lg:text-lg">{result ? <Result/> : null}</h2>
            
            <div className="items-center justify-center text-centerv sm:py-2">
                <button className="w-1/5 sm:text-xl text-sm p-2 h-[40px] text-white sm:w-1/4 bg-black rounded-xl hover:text-black hover:bg-stone-300" type='submit'>Send</button>
            </div>    
         </form>  
    </div>
    ): ""
}

export default ContactUs