

import Image from 'next/image'
export default function Main(){

    return(
        <main className="flex flex-col bg-white justify-between p-24 relative " 
    style={{
      backgroundImage:`url('/bcgr.jpg')`,
      height:"80vh"
      }} >
    <div className="rounded-xl">
      <h2 className="text-red-600 text-5xl mr-9 mt-32 font-serif ">
        New Arrivals
      </h2>
      <h1 className="text-gray-900 text-6xl font-serif ml-1 mt-4">
        For Mother's Day!
      </h1>
      <h3 className="text-black mt-5 font-normal text-l">
        Exclusive Offer -10% Off This Week
      </h3>
      <button className="bg-red-700 text-sm mt-9 border-red-700 border-radius rounded-md border-8 ml-4 hover:bg-white hover:border-white hover:text-red-700 font-medium w-32 h-12">
        Shop Now
      </button>
      <div className="flex items-center justify-center min-h-screen container mx-auto absolute  ">
    <div className="grid drid-cols-1 md:grid-cols-2,  md:grid-cols-3">
        <div className="rounded-xl ">
            <div className=" flex flex-col -ml-16 -mt-80">
                <div className=" overflow-hidden">
                    <Image src="/banner-1.jpg "
                    className=' hover:scale-110 duration-500'
                     width={320}
                     height={500}
                     alt="Picture of the author"
                       />
                       <p className='absolute -mt-20 ml-24 text-white text-xl '>CAMELLIAS</p>
                       <button className=' absolute underline hover:text-red-700 text-white -mt-14 ml-28 text-sm'>SHOP NOW</button>
                </div>
            </div>
        </div>
        <div className="rounded-xl">
            <div className=" flex flex-col -pl-3 -mt-80">
                <div className="overflow-hidden">
                    <Image src="/banner-2.jpg"
                     className=' hover:scale-110 duration-500'
                     width={320}
                     height={500}
                     alt="Picture of the author"
                     
                       />
                       <p className='absolute -mt-20 ml-28 text-white text-xl '>BERGAMOT</p>
                       <button className=' absolute underline hover:text-red-700 text-white -mt-14 ml-32 text-sm'>SHOP NOW</button>
                </div>
            </div>
        </div>
        <div className="rounded-xl  ">
            <div className=" flex flex-col ml-12   -mt-80">
                <div className=" overflow-hidden">
                    <Image src="/banner-3.jpg"
                     className=' hover:scale-110 duration-500'
                     width={320}
                     height={500}
                     alt="Picture of the author"
                       />
                       <p className='absolute -mt-20 ml-20 text-white text-xl '>BOTTLEBRUSH</p>
                       <button className=' absolute underline hover:text-red-700 text-white -mt-14 ml-28 text-sm'>SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>
    
    </div>
     </div>
     </main>
    )
}