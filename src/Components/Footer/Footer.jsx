import React from 'react'
import './footer.css'
import TranslateIcon from '@mui/icons-material/Translate';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='w-full'>
      <footer className="w-[92%] lg:w-[80%] mx-auto text-white/70 text-sm px-[10px] py-[30px]">

        <div className="flex items-center gap-6 pt-10 pb-4">
          <InstagramIcon/>
          <FacebookIcon/>
          <YouTubeIcon/>
        </div>

        <div className="pb-10">
          <a href="#">Questions? Contact us.</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-y-6 gap-x-4 pb-10">
          <div>
            <ul className="space-y-2">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Speed Test</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Legal Notices</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li><a href="#">Account</a></li>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Only on Netflix</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2">
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
        <button className="flex items-center gap-2 border border-white/40 px-4 py-2 text-white/80 hover:bg-white/10 rounded-full transition">
          <TranslateIcon/>

          <select
            className="bg-transparent text-white/80 outline-none"
            defaultValue="en"
          >
            <option value="en" className="text-black">English</option>
            <option value="am" className="text-black">Amharic</option>
          </select>
        </button>
        </div>

        <div className="pb-10">
          <p>Netflix Ethiopia</p>
        </div>

        <div className="w-full">
          <button 
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-red-600 via-red-700 to-red-700  py-2 px-6 rounded-full text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-700 cursor-pointer">
            <span>Get Started</span>
          </button>
        </div>

      </footer>

    </div>
  )
}

export default Footer