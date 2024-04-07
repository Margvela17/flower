


export default function Main(){

    return(
        <main className="flex flex-col  justify-between p-24" 
    style={{
      backgroundImage:`url('/bcgr.jpg')`,
      height:"80vh"
      }} >
        <div>
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
    </div>
    </main>
    )
}