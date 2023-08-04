import {AiFillDashboard} from 'react-icons/ai'
import { Link } from 'react-router-dom';

import {FaBolt, FaChartBar, FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaRegSun, FaStickyNote, FaWrench} from 'react-icons/fa'
function SideBar()
{
    return(
        <div className="bg-[#4E73DF] h-screen px-[25px]">
            <div className=" px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-gray-300/[0.3]">
               
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-gray-300/[0.3]'>
                <AiFillDashboard color='white'/>
                <p className='text-white text-[14px] leading-[20px] font-bold'>Dashboard</p>
            </div>
            <div className=' pt-[0.9375rem] border-b-[1px] border-gray-300/[0.3]'>
                <p className='text-[10px] font-extrabold leading[16px] text-white/[0.4]'>Interface</p>
                <div className=' flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className=' flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaChartBar color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className='flex items-center gap-[10px]'>
                        <FaRegCalendarAlt color='white'/>
                        <Link to = "/drivertable" className='text-[14px] leading-[20px] font-normal text-white hover:text-gray-300'>DriverTable</Link>
                </div>
            </div>


            <div className=' pt-[0.9375rem] border-b-[1px] border-gray-300/[0.3]'>
                <p className='text-[10px] font-extrabold leading[16px] text-white/[0.4]'>ADDONS</p>
                <div className=' flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Components</p>
                       
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className=' flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
                       
                    </div>
                    <FaChevronRight color='white'/>
                </div>
                <div className='flex items-center gap-[10px] py-[15px]'>
                        <FaRegCalendarAlt color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>
           
        </div>
    )
}
export default SideBar;