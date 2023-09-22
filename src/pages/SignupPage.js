import React from 'react'


const SignupPage = (toggleSignUp) => {
  return (
    <div className="absolute rounded-xl top-36 left-[40%] shadow-xl p-6 space-y-4 "><div><div className=" text-center text-3xl font-semibold">Alto</div>
    <div className="text-sm font-bold">Name</div>
    <input  placeholder="Jamie Larison"
            className="h-12 w-[400px] rounded-lg p-2 border-solid border-gray-400 border-[1px]"></input></div>
   <div> <div className="text-sm font-bold">Email</div>
   <div> <input  placeholder="jamie@example.com"
            className="h-12 w-[400px] rounded-lg p-2 border-solid border-gray-400 border-[1px]"></input></div></div>
    <button className="bg-[#49a8e4] h-10 w-[400px] rounded-lg my-4 text-white">Sign up</button>
    <div className="text-center">Already a member? <a href="SignupPage"  className="text-[#49a8e4]">Sign in</a></div></div>

  )
}

export default SignupPage