import Image from 'next/image'
export default function Header(){
    
    return(
        <div className="flex justify-between bg-white text-2xl pt-8 h-24">
        <h1 className="flex justify-start text-4xl text-black pl-24">Phuler</h1>
        
        <header className="flex justify-end">
          
          <a className="text-black text-xl mr-12 hover:text-red-600">Home</a>
          <a className="text-black text-xl mr-12 hover:text-red-600">About</a>
          <a className="text-black text-xl mr-12 hover:text-red-600">Shop</a>
          <a className="text-black text-xl mr-12 hover:text-red-600">Blog</a>
          <a className="text-black text-xl mr-12 hover:text-red-600">Pages</a>
          <a className="text-black text-xl mr-12 hover:text-red-600">Contact</a>

          <div className="flex items-center justify-center min-h-screen container mx-auto">
    <div className="grid drid-cols-1 md:grid-cols-2">
        <div className="rounded-xl shadow-lg">
            <div className=" flex flex-col ">
                <div className="rounded-xl overflow-hidden">
                    <Image src="/fb1.jpg"
                     width={250}
                     height={500}
                     alt="Picture of the author"
                       />
                </div>
            </div>
        </div>
    </div>
    
    </div>
        </header></div>
    )
};
