import React from 'react'
import NetflixLogoLg from '../../assets/images/Netflix-logo.png'
import NetflixLogoSm from '../../assets/images/Logosm.png'

const Header = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex justify-between items-center w-[92%] h-[80px] mx-auto px-[10px]'>

        {/* left header */}
        <div>
          {/* Logo for small screen Size */}
          <div className='lg:hidden'>
            <img src={NetflixLogoSm} alt="netflix-log" width="20" height={30}/>
          </div>
          {/* Logo for large screen Size */}
          <div className='hidden lg:block'>
            <img src={NetflixLogoLg} alt="netflix-log" width="148" height={30}/>
          </div>
        </div>
        {/* Right header */}

        <div>
          <div>
            <button className='bg-white text-black font-semibold py-[5px] px-[22px] rounded-3xl shadow hover:bg-gray-100 cursor-pointer'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header