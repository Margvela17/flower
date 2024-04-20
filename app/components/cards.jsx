export default function Cards(){
    return(
         <section className='scroll mt-32'>
        <div>
          <div className='flex'>
            <h1 className='ml-16 text-xl font-bold'>Featured Products</h1>
            <p className='border-t-2 w-2/6 mt-4 ml-20'></p>
            <h3 className='ml-72 text-red-500'>All</h3>
            <a className='ml-5 cursor-pointer'>Winter</a> 
            <h3 className='ml-5'>Various</h3>
            <h3 className='ml-5'>Greens</h3>
          </div>
          <div className='flex justify-center mt-8'>
          <img className='' src='./product-1.jpg'></img>
          <p className='absolute left-44 text-red-500 text-2xl'>T</p>
          <img className='ml-5' src='./product-2.jpg'></img>
          <img className='ml-5' src='./product-3.jpg'></img>
          <img className='ml-5' src='./product-4.jpg'></img>
          </div>
        </div>
      </section>
   
    )
   
};


