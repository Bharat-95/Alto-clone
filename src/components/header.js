import React, { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import SignupPage from  '../pages/SignupPage'
import SignInPage from "../pages/SignInPage"
import { Link } from "gatsby"


const Header = () => {
  const [searchOpen, SetSearchOpen] = useState(false)
  const [SignIn, SetSignIn] = useState(false)
  const [SignUp, SetSignUp] = useState(false)

  const toggleSearch = () => {
    SetSearchOpen(!searchOpen)
  }
  const toggleSignIn = () => {
    SetSignIn(!SignIn)
  }
  const toggleSignUp = () => {
    SetSignUp(!SignUp)
  }
  return (
    <div className="flex m-5 items-center">
      <ul className="text-2xl font-extrabold p-4">
        <Link to='/' className="pr-6">Alto</Link>
      </ul>
      <ul className="flex space-x-6 font-semibold">
        <Link to='/Home'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Styleguide'>Style guide</Link>
        <Link to='/Author'>Author</Link>
        <Link to='/Collection'>Collection</Link>
      </ul>
      <ul className="flex ml-[45%] items-center space-x-6">
        <li>
          <AiOutlineSearch
            size={22}
            className="cursor-pointer relative"
            onClick={toggleSearch}
          />
        </li>
        {searchOpen && (
          < div className="flex rounded-lg">
            <AiOutlineSearch/>
            <input
              placeholder="Search posts, tags and authors"
              className="w-[30%] h-16 absolute top-36 left-[35%] p-4 shadow-xl justify-center ">
            </input>
          </div>
        )}
        <li
          className="font-semibold cursor-pointer relative"
          onClick={toggleSignIn}
        >
          Sign in
        </li>
        {SignIn && <SignInPage/>}
        <button className="bg-[#49a8e4] text-white rounded-3xl m-2 px-4 py-2 relative" onClick={toggleSignUp}>
          Subscribe
        </button>
        {SignUp && <SignupPage/>}
      </ul>
     
    </div>
  )
}

export default Header
