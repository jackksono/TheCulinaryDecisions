import React, {useState} from 'react'
import { useClickAway } from '@uidotdev/usehooks'
import emailjs from '@emailjs/browser'

const ContactUs = (props) => {

  const [ data, setData ] = useState({name:"", email:"", phone:""})
  const [ message, setMessage ] = useState()
  const [ result, showResult ] = useState(false)
  const [ validEmail, setValidEmail ] = useState(false)
  
  const Result = () => {
    return (
        <p>Your message has been successfully sent!</p>
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

    

  const sendMail = (e) => { //EmailJS documentation
    // console.log(e)
    e.preventDefault()
    if(!validEmail) {
        emailjs
    .sendForm('', '', e.target, '') //(Service key, templateID, target, PK)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    setData("")
    setMessage("")
    showResult(true)
  }
  else (setValidEmail(true))
  };

  return props.trigger ? (
    <div className="fixed z-10 lg:mt-40 overflow-auto lg:inset-x-0 justify-center lg:mx-auto w-84 lg:w-1/2 lg:h-[720px] items-center bg-white bg-opacity-80 rounded-xl box-shadow-inset-0--3em-3em-opacity-10" ref={clickAway} >
       
        <form className="" method="post" onSubmit={sendMail}>
            <div className='flex justify-end pr-5 text-2xl text-black'>    
                <button  onClick={() => props.setTrigger(false)}>X</button>
            </div>
            <h1 className="flex justify-center pl-10 pr-10 text-2xl font-extrabold text-black lg:text-4xl font-Montserrat">Contact Our Team</h1>
            
                
            <div className="pl-6 text-lg italic text-black">
                <span className="pl-3 text-sm font-bold text-black lg:flex lg:text-2xl font-Montserrat">Name:</span>
                <input className="flex justify-center p-1 m-1 lg:m-3 border-2 h-[25px] lg:h-auto border-black border-solid  w-11/12 text-md lg:text-lg focus:outline-none focus:border-2 focus:border-solid focus:shadow-2xl bg-opacity-90 rounded-xl" 
                type='text' name='name' id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
            </div>

            <div className="pl-6 text-lg italic text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Email:</span>
                <input className="flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto border-2  border-black border-solid lg:text-lg focus:outline-none rounded-xl focus:border-solid focus:shadow-2xl" 
                type='email' name='email' id="" onChange={twoCalls}  value={data.email} placeholder="example@gmail.com"/>
                <h2 className= "font-semibold text-center text-red-900 underline text-md ">{validEmail ? <EmailResponse/> : null }</h2>  {/*Hidden message has been sent*/}
            </div>

            <div className="pl-6 text-lg italic text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Phone Number:</span>
                <input className="flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto text-md lg:text-lg border-2 border-black border-solid focus:outline-none rounded-xl focus:border-solid focus:shadow-2xl" 
                type='phone' name='phone' id="" onChange={handleChange} value={data.phone} placeholder="+1 (xxx)-xxx-xxxx"/>
            </div>

            <div className="pl-6 text-lg italic text-black lg:pt-2">
                <span className="pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat">Message:</span>
                <textarea className="flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[75px] lg:h-auto text-md lg:text-lg border-2 border-black border-solid focus:outline-none  rounded-xl focus:border-solid focus:shadow-2xl" 
                name='message' id='' cols='30' rows='7' onChange={messageChange} value={message} placeholder="Enter message here..."/>
            </div>
            
            <h2 className= "justify-center pb-2 text-lg text-center text-white">{result ? <Result/> : null}</h2>
            
            <div className="items-center justify-center text-center">
                <button className="w-1/5 lg:text-xl p-2 h-[40px] text-white lg:w-1/4 bg-black rounded-xl hover:text-black hover:bg-stone-300" type='submit'>Send</button>
            </div>    
         </form>  
    </div>
    ): ""
}

export default ContactUs