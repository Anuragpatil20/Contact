import React, { useState } from 'react'

function Contact() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("")
    const [errors , setErrors] = useState({});


    const handleNameChange = (e) => {
        const value = e.target.value
        setName(value)

        if(value.length >= 2) {
            setErrors((prevErrors) => ({ ...prevErrors , name:""}));
        }
    }

    const handleMessageChange = (e) =>{
        const value = e.target.value
        setMessage(value)

        if(value.length >=2) {
            setErrors((prevErrors) => ({ ...prevErrors ,  message:""}));
        }
    }

    
    const handleEmailChange = (e) => {
       const value = e.target.value
       setEmail(value)

       if (/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0){
            alert("Sent message successfully...")
            console.log("name", name)
            console.log("Email", email)
            console.log("Message", message)

        }else{
            setErrors(validationErrors)
        }
    };

      const validate = () => {
        const error = {};

        if(!name){
           error.name = "Name is Required";
        }

        if (!email){
            error.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Invalid Email Format";
        }

        if(!message){
            error.message = "Message is required";
        }

        return error;
      }

  return (
    <div>
    
    <section class="bg-blue-50 dark:bg-slate-800    bg-[url('https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg')] bg-cover" id="contact">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8  lg:py-20">

    <h1 class="text-4xl text-center font-bold uppercase tracking-wide text-blue-600 dark:text-blue-200 ">
    <img className='flex h-10 w-10 items-cente mx-auto ' src='https://cdn-icons-png.flaticon.com/128/16617/16617786.png' />
            Contact
        </h1>
        <div class="flex items-stretch justify-center mb-10">
            <div class="grid md:grid-cols-2">
                <div class="h-full mt-25">
                
                    
                    <ul class="mb-6 md:mb-0">
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center  text-gray-50">
                                <img src='https://cdn-icons-png.flaticon.com/128/12522/12522440.png'/>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-white dark:text-white">Our Address
                                </h3>
                                <p class="text-yellow-600  text-bold dark:text-slate-400">numetry technologies</p>
                                <p class="text-yellow-600  text-bold dark:text-slate-400">Yerawada, Pune, Pune District, Maharashtra</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center  text-gray-50 mt-4">
                                <img src='https://cdn-icons-png.flaticon.com/128/8898/8898833.png'/>
                            </div>
                            <div class="ml-4 mb-4 mt-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-white text-bold dark:text-white">Contact
                                </h3>
                                <p class="text-yellow-600  text-bold dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                <p class="text-yellow-600  text-bold dark:text-slate-400">Mail: numetrytec@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center  text-gray-50  mt-4">
                                <img src='https://cdn-icons-png.flaticon.com/128/9058/9058693.png'/>
                            </div>
                            <div class="ml-4 mb-4 mt-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 text-white text-bold dark:text-white">Working
                                    hours</h3>
                                <p class="text-yellow-600  text-bold dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12 mt-7" id="form">
                   
                    <form id="contactForm " onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase text-white  text-bold tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border text-white font-semibold border-white hover:bg-gray-700 py-2 pl-2 pr-4 shadow-md white:text-white sm:mb-0" name="name" value={name} onChange={handleNameChange}/>
                                    {errors.name && <div className='text-red-500'>{errors.name}</div>}
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-white text-white py-2 pl-2 font-semibold pr-4 shadow-md hover:bg-gray-700 dark:text-gray-300 sm:mb-0" name="email" value={email} onChange={handleEmailChange}/>
                                    {errors.email && <div className='text-red-500'>{errors.email}</div>}
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-white text-white py-2 font-semibold pl-2 pr-4 shadow-md hover:bg-gray-700 dark:text-gray-300 sm:mb-0" value={message} onChange={handleMessageChange}></textarea>
                                {errors.message && <div className='text-red-500'>{errors.message}</div>}
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full bg-transpernt hover:bg-blue-800 duration-100 mb-2 w-full rounded-md border   text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Contact