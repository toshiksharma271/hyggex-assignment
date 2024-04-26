const navbar = () =>{
    
return(
    <>
        <div className="flex ml-10 mt-5 justify-between">
        <div >
            <img src="logo.svg" alt="logo" className="h-39 w-191" />
        </div>
        <div className="w-full min-w-screen overflow-x-hidden flex justify-end mr-10">
            <ul className="flex justify-end">
                <li className="mx-5" >Home</li>
                <li className="mx-5">Flashcard</li>
                <li className="mx-5">Contact</li>
                <li className="mx-5">FAQ</li>
                <li className="mx-5 bg-blue-800 rounded-full w-20 -pt-1 text-center  p-1 mb-1 text-white ">Login</li>
            </ul>
        </div>
        </div>
        <div className="p-10 ">
            <img src="dashboard.svg" alt="hero" className="h-30 " />
        </div>
        <div>
            <img src="math.svg" alt="hero" className="h-30 p-10" />
        </div>
        <div className="flex justify-center">
            <img src="title1.svg" alt="hero" className="h-30 p-10" />
            
        </div>
        <div className="flex justify-center">
            <img src="main.svg" alt="hero" className="h-30 p-10" />
        </div>
        <div className="flex justify-between">
        <div>
            <img src="logo2.svg" alt="hero" className="h-30 p-10" />
        </div>
        <div className="pt-10">
            <img src="nearlogo.svg" alt="hero" className="h-30 p-10" />
        </div>
        </div>
        <div className="p-10">
            <img src="FAQ.svg" alt="hero" className="h-30 p-10" />
        </div>
        <div className="ml-10 -mt-5">
            <img src="last.svg" alt="hero" className="h-30 p-10" />
        </div>
       
        

        </>
        

    )
}
export default navbar;