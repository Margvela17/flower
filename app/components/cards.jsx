
import Image from 'next/image'

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
    <div className="grid drid-cols-1 md:grid-cols-2">
        <div className="rounded-xl shadow-lg">
            <div className=" flex flex-col ">
                <div className="rounded-xl overflow-hidden">
                    <Image src="/flower1.png"
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

export default Card;