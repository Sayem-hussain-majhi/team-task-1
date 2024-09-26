import logo from '../assets/logo.png'

const SubHeader = () => {
   
    return (
       <>
        <div className=''>
        <div className="bg-[#183354] flex justify-around">
            <div className="flex text-gray-400 py-2 space-x-4">
                <p className="text-gray-200">Trending</p>
                <button>Button</button>
                <p >Here area brands and designers to look out for next year 2023</p>
            </div>
            <div className="text-white space-x-5 py-2">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
        </div>

        <div className="lg:w-4/5 sm:w-full mx-auto ">
          <div className='lg:flex justify-between my-8 '>
          <div className='lg:flex '>
           <div className="flex space-x-2 items-center">
                <i className="fa-regular fa-calendar-days"></i>
                <p>February 12, 2024</p>
            </div>
            <div className='flex items-center'>
                <div className='w-[48px]'>
                <img src={logo} alt="" />
                </div>
                <p className='font-bold text-4xl text-gray-800'>ZAIRA</p>
            </div>
           </div>
           <div className='flex text-xl items-center space-x-2 '>
             <i className="fa-regular fa-user"></i>
             <p>sign in</p>
           </div>
           <div className=''>
             <button className='py-2 px-6 rounded-md bg-red-400 text-white'>SUBSCRIBE</button>
           </div>
          </div>
        </div>

         <div className='border-t-2 drop-shadow-md shadow-md'>
         <div className='w-4/5 mx-auto lg:flex justify-between items-center'>
            <div className='text-3xl  '>
                <i className="fa-solid fa-bars border-2 py-4 px-3"></i>
            </div>
            <div className='font-semibold lg:flex items-center lg:space-x-3 lg:py-0 sm:py-5'>
                <article className='flex space-x-2 items-center'>
                <p className='text-red-400'>Home</p>
                <i className="fa-solid fa-angle-down text-red-400 mt-1"></i>
                </article>
                <p>About Us</p>
                <article className='flex space-x-2 items-center'>
                    <p>Features</p>
                    <i className="fa-solid fa-angle-down  mt-1"></i>
                </article>
                <article className='flex space-x-2 items-center'>
                <p>Categories</p>
                    <i className="fa-solid fa-angle-down  mt-1"></i>
                </article>
               <article> <p>Contact</p></article>
                
            </div>
            <div className=''>
                <input className='  py-2 px-6 rounded-full' type="search" placeholder='Search here...' />
                <i className="fa-solid fa-magnifying-glass  -ml-8 text-[22px] text-gray-500"></i>
            </div>
          </div>
         </div>
        </div>
        
       </>
    );
};

export default SubHeader;