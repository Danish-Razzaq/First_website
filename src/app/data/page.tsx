import { Numans } from "next/font/google";
import Link from "next/link";
const Data = async () => {

    const api = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const res = await api.json()
    // console.log(res);

    return (
        <div className="md:p-5 lg:p-5 p-2" >
            {res.map((item:any ,id:any) => {
                return (
                  <li>  <Link href={`/data/${item.id}`}>{`${item.title}`}</Link></li>
                )
            })}
        </div>
    )
};


export default Data;