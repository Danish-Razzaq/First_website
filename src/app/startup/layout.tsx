

import Link from "next/link";


const Startup = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex p-2 lg:p-10 md:p-7 ">
            <div className="flex flex-col gap-3 ">
                <div className="md:font-bold md:text-2xl md:p-4 lg:w-full md:w-full
        lg:font-bold lg:text-2xl lg:p-4 
         sm:p-2 sm:w-1/4">IF You Alredy user of this website then login otherwise sigin.</div>
                <button className="  bg-amber-700 hover:bg-amber-800 text-white md:text-2xl lg:text:3xl sm:1xl  sm:font-bold p-3 sm:p-1 rounded-full mx-3 md:w-28 lg:w-28 w-20   " >  <Link href="/startup/login" >Login</Link></button>
                <button className=" bg-emerald-600 hover:bg-emerald-700 text-white md:text-2xl lg:text:3xl sm:1xl  sm:font-bold p-3 sm:p-1 rounded-full mx-3 md:w-28 lg:w-28 w-20    " >  <Link href="/startup/sigin" >Sigin</Link></button>
            </div>
            <div>{children}</div>
        </div>
    );
};
export default Startup;