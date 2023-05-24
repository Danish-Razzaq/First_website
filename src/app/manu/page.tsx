import Link from "next/link";
const Manu =()=>{
    return( <div className="md:p-5 lg:p-5 p-2  font-bold " >
        
        <li><Link href="/manu/detail1">Detail1</Link></li>
        <li><Link href="/manu/detail2">Detail2</Link></li>
        <li><Link href="/manu/detail3">Detail3</Link>
        </li>
        
       </div>
       
       );

};
export default Manu;