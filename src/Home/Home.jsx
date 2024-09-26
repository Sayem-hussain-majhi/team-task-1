
import img1 from '../assets/man2.jfif'
import juta from '../assets/juta.jfif'
import plen from '../assets/plen.png'
import Footer from "../Footer/Footer";
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'



const Home = () => {
    return (
        <>
        <div className="w-4/5 mx-auto mt-10">
            <div className="lg:flex">
                {/* left side first part */}
                <div className="lg:w-[80%] sm:w-full">

                 <div className=" lg:flex">
                    {/* left box  */}
                    <div className="lg:w-[27%] sm:w-full border-r-2 pr-5 ">
                        {/* box 1 */}
                        <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                        </div>
                        <hr className="my-4"/>
                         {/* box 2 */}
                         <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src={img2}  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                        </div>
                    </div>
                    {/* middle box */}
                    <div className="lg:w-[70%] sm:w-full  mx-auto px-3">
                    <div className="w-full">
                            <img className="w-full" src={img3} alt="img1"  />
                     </div>
                     <article className="flex justify-center my-4">
                     <p className="pt-[1px] border-2  justify-center inline-block">POLITICS</p>
                     </article>
                     <h1 className="text-3xl font-bold text-center">Beyond Algorithms Skills Of Designers That AI Cant Replicate</h1>
                     <div className="flex justify-center my-3 space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-clock"></i>
                            <p className="text-[10px]">20 min</p>
                            </div>
                           </div>
                           <p className="text-center text-gray-700 mb-5">In grammar, an article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability</p>
                    </div>
                 </div>

                 <div className="my-10 bg-gray-300 p-4 py-9 mr-6">
                    <article className="flex space-x-5">
                        <p className="text-2xl font-bold">Traveling Agents For You</p>
                        <button className="bg-gray-900 text-white rounded-full font-bold py-2 px-4">See Details</button>
                    </article>
                 </div>

                 <div className="flex items-center space-x-3">
                    <p className="text-gray-900 font-bold">POLITICS</p>
                    <div className="border-2 p-[2px] w-[88%] h-1 pr-10"></div>
                 </div>

                 <div className="lg:flex mt-5 ">
                    <div className="lg:flex gap-4 lg:w-[70%] w-full">
                        <div className="lg:w-[55%] sm:s-full">
                            <img className="w-full" src={img3} alt="" />
                        </div>
                        <article className="lg:w-[45%] sm:w-full">
                         <div className="">
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                           <article >
                                <p className="text-gray-600 py-2"> industrys standard dummy text ever since the 1500s, when an unknown printer took  </p>
                               <div className="flex justify-start">
                               <button className="border-2 px-3 py-1 text-[14px] font-bold">READ MORE <i className="fa-solid fa-up-right-from-square text-red-600 text-[12px] ml-1"></i></button>
                               
                               </div>
                           </article>
                         </div>
                        </article>
                    </div>
                    <div className="border-l-2 pl-5 p-2 
                    lg:w-[30%] sm:w-full">
                    <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-[2px]">POLITICS</p>
                            <h1 className="font-bold 
                            text-[14px]  text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-1">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-[2px]">POLITICS</p>
                            <h1 className="font-bold 
                            text-[14px]  text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-1">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-[2px]">POLITICS</p>
                            <h1 className="font-bold text-[14px] text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-1">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                    </div>
                    </div>
                 </div>

                 <div className="flex items-center space-x-3">
                    <p className="text-gray-900 font-bold">Todays Hot Spot</p>
                    <div className="border-2 p-[2px] w-[80%] h-1 pr-10"></div>
                 </div>
                 <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 my-5 mr-3">
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                 </div>

                </div>

                {/* right side first part */}
                <div className="lg:w-[25%] sm:w-full mt-7 border-l-2 pl-3  ">
                    <div className="border-2 p-1"></div>
                    <p className="font-bold text-2xl my-2">Top Stories</p>

                    <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-1">POLITICS</p>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        <div className="w-[30%]  ">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                            <img src={img1} />
                            </div>
                            </div>
                          
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-1">POLITICS</p>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        <div className="w-[30%]  ">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                            <img src={img1} />
                            </div>
                            </div>
                          
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-1">POLITICS</p>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        <div className="w-[30%]  ">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                            <img src={img1} />
                            </div>
                            </div>
                          
                        </div>
                    </div>
                    <hr className="my-4"/>
                     <div className="flex items-center">
                        <div>
                            <p className="text-[10px] mb-1">POLITICS</p>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        <div className="w-[30%]  ">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                            <img src={img1} />
                            </div>
                            </div>
                          
                        </div>
                    </div>

                    <div className="mt-8 w-[100%]">
                        <img className="w-full" src={juta} alt="" />
                    </div>

                    <div className="border-2 p-1 bg-black mt-8"></div>
                    <p className="font-bold text-2xl my-2">Top Stories</p>
                    <div className="flex items-center my-4 bg-gray-100 py-4 px-3">
                        <article className="flex">
                        <p className="font-bold text-xl text-gray-400 mr-3">1.</p>
                        <div>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        </article>
                    </div>
                    <div className="flex items-center my-4 bg-gray-100 py-4 px-3">
                        <article className="flex">
                        <p className="font-bold text-xl text-gray-400 mr-3">2.</p>
                        <div>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        </article>
                       
                    </div>
                    <div className="flex items-center my-4 bg-gray-100 py-4 px-3">
                        <article className="flex">
                        <p className="font-bold text-xl text-gray-400 mr-3">3.</p>
                        <div>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        </article>
                       
                    </div>
                    <div className="flex items-center my-4 bg-gray-100 py-4 px-3">
                        <article className="flex">
                        <p className="font-bold text-xl text-gray-400 mr-3">4.</p>
                        <div>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        </article>
                    </div>
                    <div className="flex items-center my-4 bg-gray-100 py-4 px-3">
                        <article className="flex">
                        <p className="font-bold text-xl text-gray-400 mr-3">5.</p>
                        <div>
                            <h1 className="font-bold text-gray-500">Lessons Learned As A Designer-Founder</h1>
                            <div className="flex space-x-2 items-center mt-2">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                        </div>
                        </article>
                       
                    </div>
                </div>
            </div>

            <div className="bg-gray-300 p-4 py-9 lg:w-4/6 sm:w-full mx-auto my-10">
            <article className="flex space-x-5">
                        <p className="text-2xl font-bold">Modern Technology First Here</p>
                        <button className="bg-gray-900 text-white rounded-full font-bold py-2 px-4">See Details</button>
                    </article>
            </div>



            <div className=" items-center ">
                   <div className="flex justify-between">
                   <p className="text-gray-900 font-bold py-1">Editors Picks</p>
                   <div className="text-xl space-x-2 text-red-400">
                   <i className="fa-regular fa-circle-left"></i>
                   <i className="fa-regular fa-circle-right"></i>
                   </div>
                   </div>

                    <div className="border-2  w-[100%] h-1  p-1"></div>
                 </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 my-5 ">
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                    <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[10px]">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                           </div>
                    </div>
                 </div>

            {/* second part container */}
          <div className="lg:flex gap-5 py-10">
              {/* left side second part */}
              <div className="lg:w-[75%] sm:w-full">
               <div className=" items-center ">
                   <div className="flex justify-between">
                   <p className="text-gray-900 font-bold py-1">Top News</p>
                   </div>
                    <div className="border-2  w-[100%] h-1  p-1"></div>
               </div>
               <div className="flex mt-5 ">
                    <div className="lg:flex gap-4 items-center w-[100%]">
                        <div className="lg:w-[80%] sm:w-full">
                            <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="" />
                        </div>
                        <article className="lg:w-[45%] sm:w-full">
                         <div className="">
                            <p className="text-[14px] pb-2">BUSINESS</p>
                            <h2 className="font-bold pb-3 text-xl">Online Learning: Pros and Cons Learn Easy Pros and Cons Learn Easy</h2>
                           <div className="flex space-x-7 ">
                           <div className='flex text-sm items-center space-x-2'>
                            <i className="fa-regular fa-user"></i>
                            <p className="text-[12px] py-1">BY ADMIN</p>
                            </div>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[12px] py-1">February 12, 2024</p>
                            </div>
                           </div>
                           <article >
                                <p className="text-gray-600 py-3"> industrys standard dummy text ever since the 1500s, when an unknown printer took  when an unknown printer took  when an unknown printer took </p>
                               <div className="flex justify-start">
                               <button className="border-2 px-3 py-1 text-[14px] font-bold">READ MORE <i className="fa-solid fa-up-right-from-square text-red-600 text-[12px] ml-1"></i></button>
                               
                               </div>
                           </article>
                         </div>
                        </article>
                    </div>
               </div>
               {/* 3 box's */}
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-10 ">
                <div className="flex gap-1 items-center">
                    <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                    </div>
                    <div className="w-[80%]">
                        <img className="w-full" src={img3} alt="img1"  />
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                    </div>
                    <div className="w-[80%]">
                        <img className="w-full" src={img4} alt="img1"  />
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                    </div>
                    <div className="w-[80%]">
                        <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                    </div>
                </div>
              </div>

              <div className="bg-gradient-to-tr from-[#F2DFFB] p-4 py-9  my-10">
            <article className="flex space-x-5">
                        <p className="text-2xl font-bold">Modern Technology First Here</p>
                        <button className="bg-gray-900 text-white rounded-full font-bold py-2 px-4">See Details</button>
                    </article>
            </div>

            <div className=" items-center ">
                   <div className="flex justify-between">
                   <p className="text-gray-900 font-bold py-1">Sports</p>
                   </div>
                    <div className="border-2  w-[100%] h-1  p-1"></div>
            </div>
            <div className="flex mt-5 ">
                    <div className="w-[100%] lg:flex gap-5">
                        <div className="lg:w-[60%] sm:w-full">
                        <div className=" mb-5">
                            <img className="w-full" src={img3} alt="" />
                        </div>
                        <article className="w-[100%]">
                         <div className="">
                            <p className="text-[14px] pb-2">BUSINESS</p>
                            <h2 className="font-bold pb-3 text-xl">Online Learning: Pros and Cons Learn Easy Pros and Cons Learn Easy</h2>
                           <div className="">
                         
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[12px] py-1">February 12, 2024</p>
                            </div>
                           </div>
                         </div>
                        </article>
                        </div>
                       <div className="lg:w-[40%] sm:w-full space-y-6">
                        <div className=" flex gap-3  items-center">
                        <div className="w-[60%] ">
                        <img className="w-full" src="https://i.ibb.co.com/NSdHf2p/img1.webp" alt="img1"  />
                        </div>
                        <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                        </div>
                        </div>
                        <div className="flex gap-3  items-center">
                        <div className="w-[60%] ">
                        <img className="w-full" src={img4} alt="img1"  />
                        </div>
                        <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                        </div>
                        </div>
                        <div className="flex gap-3  items-center">
                        <div className="w-[60%] ">
                        <img className="w-full" src={img2} alt="img1"  />
                        </div>
                        <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                        </div>
                        </div>
                        <div className="flex gap-3  items-center">
                        <div className="w-[60%] ">
                        <img className="w-full" src={img3} alt="img1"  />
                        </div>
                        <div>
                    <p className="text-[10px] ">BUSINESS</p>
                        <h2 className="font-bold text-[14px] pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                    <div className="flex space-x-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-[10px]">February 12, 2024</p>
                    </div>
                        </div>
                        </div>
                       </div>

                    </div>
               </div>

               

            </div>

            {/* right side second part */}
            <div className="lg:w-[25%] sm:w-full border-l-2 pl-3">
                    <div className="bg-[#183354]   text-gray-200 p-5 text-center mt-3">
                        <h2 className="font-semibold text-2xl pb-2">Daily NewsLatter</h2>
                        <p className="text-[14px]">Get All The Top Stories From Blogs To Keep Track</p>
                        <input className="bg-gray-100 py-2 px-5 rounded-md my-2 w-full" type="email" name="email" placeholder="Enter your e-mail" id="" />
                        <button className="bg-red-500 py-2 px-5 rounded-md my-2 w-full">SUBSCRIBE NOW</button>
                        <div className="flex gap-2 mt-3">
                            <input type="checkbox" name="" id="" />
                            <p className="text-gray-400 text-[12px]">i agree to the terms and conditions</p>
                        </div>
                    </div>

                <div className=" items-center mt-10 mb-5">
                   <div className="flex justify-between">
                   <p className="text-gray-900 font-bold py-1">BUSINESS</p>
                   </div>
                    <div className="border-2  w-[100%] h-1  p-1"></div>
                </div>
                {/* box 1 */}
                <div className="">
                            <div className="w-[100%]">
                            <img className="w-full" src={img4} alt="img1"  />
                            </div>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                            <hr className="my-3"/>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                            <hr className="my-3"/>
                            <p className="text-[14px] pt-2">BUSINESS</p>
                            <h2 className="font-bold pb-2">Online Learning: Pros and Cons Learn Easy</h2>
                            <div className="flex space-x-2 items-center">
                            <i className="fa-regular fa-calendar-days"></i>
                            <p className="text-[10px]">February 12, 2024</p>
                            </div>
                          
                </div>

                <div className="w-full mt-4 ">
                    <img className="w-full h-[50%]" src={plen} alt="" />
                </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgb(232,241,241)] p-20 w-full my-10">
            <div className="w-4/5 mx-auto text-center space-y-4">
                <p className="text-gray-700 font-bold text-xl">Get Subscribe To Our Latest News And Updates</p>
                <div className="space-x-3 ">
                    <input className="lg:py-2 px-6 rounded-lg" type="name" placeholder="name"/>
                    <input className="py-2 px-6 rounded-lg" type="email" placeholder="e-mail"/>
                   <button className="py-2 px-4 rounded-lg bg-red-600 text-gray-200">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Home;


