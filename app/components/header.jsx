
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

         
        </header></div>
    )
};
