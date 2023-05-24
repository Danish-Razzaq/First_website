import Link from "next/link";

const Contacts = () => {
    return (
        <div className="p-4  w-full  font-bold " >This is Contect page page of this website
            <li>

                <Link href="/contact/Office_NO" >Office NO</Link>
            </li>
            <li>
                <Link href="/contact/Home_NO" >Home NO</Link>
            </li>
            <li>

                <Link href="/contact/Phone_NO" >Phone NO</Link>
            </li>

        </div>);
};
export default Contacts;