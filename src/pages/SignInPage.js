import React from 'react'




const SignInPage = (toggleSignIn) => {
  return (
    

    <div> <div className="absolute rounded-xl top-36 left-[40%] shadow-xl p-6 ">
    <div className="text-4xl  font-bold text-center ">Sign in</div>
    <div className="mt-8 mb-2 text-sm font-semibold">Email</div>
    <div>
      <input
        placeholder="jamie@example.com"
        className="h-12 w-[400px] rounded-lg p-2 border-solid border-gray-400 border-[1px]"
      ></input>
    </div>
    <button className="bg-[#49a8e4] h-10 w-[400px] rounded-lg my-4 text-white">
      Continue
    </button>
    <div className="text-center">
      Don't have a account?
      <a href="SignupPage" className="text-[#49a8e4]">
        Sign up
      </a>
    </div>
  </div></div>
  )
}

export default SignInPage