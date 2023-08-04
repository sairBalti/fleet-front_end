import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa"

function Header({onClick}){
  return (
   
    <div className="flex justify-between p-[1rem]">
       
      <div className="flex">
      
        <input type="text" placeholder="Search" className="border-b-[2px] border-gray-300/[0.3] outline-none" />
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-center rounded w-[100px] h-[40px] mt-[1rem] ml-[1rem]"onClick={onClick} >Add Driver</button>
      </div>
    </div>
  )
}

export default Header
