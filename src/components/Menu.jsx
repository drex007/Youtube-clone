import React from 'react'
import logo from '../images/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import MdSubscriptions from '@material-ui/icons/Subscriptions'
import MdOutlineExplore from '@material-ui/icons/Explore'
import MdVideoLibrary from '@material-ui/icons/VideoLibrary'
import MdLibraryMusic from '@material-ui/icons/LibraryMusic'
import MdOutlineSportsBasketball from '@material-ui/icons/SportsBasketball'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import SettingsIcon from '@material-ui/icons/Settings'
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import ReportSharpIcon from '@material-ui/icons/ReportSharp';
import FlareSharpIcon from '@material-ui/icons/FlareSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';


const Menu = ({ darkMode, setDarkMode }) => {
    const handleBackground = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className={`flex-[0.2] h-screen text-white sticky top-0 ${darkMode ? 'bg-black ' : 'bg-white'}`}>
            <div className='flex mt-4 ml-4 space-x-1'>
                <img src={logo} alt="" srcset="" className='h-[30px] mt-2' />
                <h2 className={`text-xl ${darkMode ? 'text-white' : 'text-black'} hover:cursor-pointer font-semibold mt-2`}>YouTube</h2>
            </div>
            <div className='flex-col space-y-2 ml-4 mt-8'>
                <div className= 'flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <HomeIcon className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Home</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <MdOutlineExplore className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Explore</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer    hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <MdSubscriptions className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Subscription</p>
                </div>
                <div className='text-slate-600 pl-2 px-6 '>
                    <hr className='border border-neutral-800' />
                </div>
                <div className='rounded-sm pl-2 my-2 '>
                    <p className={`text-[13px] font-semi-bold ${darkMode ? 'text-white' : 'text-black'}`}>Sign in to like videos</p>
                    <p className={`text-[13px] font-semi-bold ${darkMode ? 'text-white' : 'text-black'}`}>comment, and subscribe</p>
                    <div className='flex justify-center space-x-4 border border-blue-400 px-4 py-2 rounded-sm mr-8 '>
                        <AccountCircleSharpIcon className='bg-blue-400' />
                        <p className='text-[15px] text-blue-400'>SIGN IN</p>
                    </div>
                </div>
                <div className='text-slate-600 pl-2 px-6 '>
                    <hr className='border border-neutral-800' />
                </div>
                <div className='space-x-2  py-2 '>
                    <p className='font-semibold   text-neutral-400'>BEST OF VIKTOR</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer    hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <MdVideoLibrary className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Library</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <MdLibraryMusic className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Music</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer    hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <SportsEsportsIcon className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Gaming</p>
                </div>
                <div className='flex space-x-2  hover:cursor-pointer  hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <MdOutlineSportsBasketball className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Sport</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <LiveTvSharpIcon className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Live</p>
                </div>
                <div className='flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <SettingsIcon className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Settings</p>
                </div>
                <div className='text-slate-600 pl-2 px-6 '>
                    <hr className='border border-neutral-800' />
                </div>
                <div className='flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <ReportSharpIcon className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Report</p>
                </div>


                <div
                onClick={handleBackground}
                className='flex space-x-2 hover:cursor-pointer   hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <FlareSharpIcon onClick={handleBackground} className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Light Mode</p>
                </div>
                <div 
                
                className='flex space-x-2  hover:cursor-pointer  hover:px-2 hover:transition ease-in-out delay-100 rounded-sm hover:bg-gray-600  py-2 '>
                    <ReportSharpIcon className={`${darkMode ? 'text-white' : 'text-black'}`} /> <p className={`font-light ${darkMode ? 'text-neutral-400' : 'text-black'}`}>Help</p>
                </div>


            </div>
        </div>
    )
}

export default Menu