import Image from 'next/image'
export default function maincard(){
    return(
        <div className="flex items-center justify-center min-h-screen container mx-auto absolute  ">
    <div className="grid drid-cols-1 md:grid-cols-2,  md:grid-cols-3">
        <div className="rounded-xl mr-16">
            <div className=" flex flex-col pl-16 ">
                <div className=" overflow-hidden">
                    <Image src="/fb1.jpg "
                    className=' hover:scale-110'
                     width={250}
                     height={500}
                     alt="Picture of the author"
                       />
                       
                </div>
            </div>
        </div>
        <div className="rounded-xl">
            <div className=" flex flex-col pl-24">
                <div className="overflow-hidden">
                    <Image src="/fb1.jpg"
                     className=' hover:scale-110'
                     width={250}
                     height={500}
                     alt="Picture of the author"
                       />
                </div>
            </div>
        </div>
        <div className="rounded-xl  ">
            <div className=" flex flex-col pl-28">
                <div className=" overflow-hidden">
                    <Image src="/fb1.jpg"
                     className=' hover:scale-110'
                     width={250}
                     height={500}
                     alt="Picture of the author"
                       />
                </div>
            </div>
        </div>
    </div>
    
    </div>
    )
}