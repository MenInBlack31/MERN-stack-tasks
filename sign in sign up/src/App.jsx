import { useState } from 'react'
import './App.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";  
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
function App() {

  const [switchLayout,setSwitchLayout] = useState(false)
  return (
    // Sign in page
    <div className='bg-slate-200 flex flex-col justify-center rounded-xl items-center min-h-screen'>
      {/* <h1 className='justify-center items-center text-3xl mb-2 font-bold'>Sign In/Sign Up</h1> */}
      <div className={`bg-[#FFF] ${switchLayout?"hidden":"grid"} h-[30rem] w-[50rem] rounded-xl grid grid-cols-2 shadow-lg mt-4`}>
         <div className='bg-orange-500 grid grid-col justify-center items-center text-center p-8 rounded-xl'>
          <h1 className='text-white text-3xl mb-2 font-bold'>Hello Friends!!</h1>
          <p className='text-white text-xl font-semibold'>Enter your personal details and start journey with us</p>
          <div className='text-white text-xl font-bold'><button className='w-32 h-12 border border-solid border-white rounded'
          onClick={
            ()=>setSwitchLayout(!switchLayout)
          }>Sign Up</button></div>
         </div>
         <div className='flex flex-col p-[2.5rem] gap-4 items-center'>
          <h1 className='text-black font-bold text-2xl'>SIGN IN</h1>
          <div className='grid grid-cols-4 gap-5 text-3xl'>
          <FcGoogle/>
          <FaFacebookSquare/>
          <CiLinkedin/>
          <FaGithub/>
          </div>
          <div className=''>
            <p className='text-l font-semibold'>Or Use your Account</p></div>
          <div>
          <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required />
                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
          </form>

          </div>
         </div>
      </div>


      {/* Sign Up Page */}
      <div className={`bg-[#FFF] ${!switchLayout?"hidden":"grid"} h-[30rem] w-[50rem] rounded-xl grid grid-cols-2 shadow-lg mt-4`}>
         <div className='bg-white-400 flex flex-col p-[2.5rem] gap-4 items-center  rounded-xl flex-nowrap'>
         <h1 className='text-black font-bold text-2xl'>CREATE ACCOUNT</h1>
         <div className='grid grid-cols-4 gap-5 text-3xl '>
          <FcGoogle/>
          <FaFacebookSquare/>
          <CiLinkedin/>
          <FaGithub/>
         </div>
         <div className=''>
            <p className='text-l font-semibold'>Or Use your Email for registration</p>
          </div>
          <div>
          <form className="max-w-md mx-auto">
          <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_user_name" id="floating_user_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
              <label for="floating_user_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required />
                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required />
                <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
          </form>

          </div>

         </div>
         <div className=' bg-orange-500 grid grid-col rounded-xl gap-4 justify-center items-center text-center p-8'>
            <h1 className='text-white text-3xl mb-2 font-bold'>Welcome Back!!</h1>
            <p className='text-white text-xl font-semibold text-center'>Please login with your personal info</p>
            <div>
              <button className='w-32 h-12 border border-solid border-white rounded text-white font-bold '
              onClick={
                ()=>setSwitchLayout(!switchLayout)
              }
              >Sign In</button>
            </div>
         </div>
      </div>


    </div>
  )
}

export default App


