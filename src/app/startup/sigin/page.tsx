const Sigin = () => {
    return (
        <div className=" lg:p-20 md:p-14 p-8  space-y-8">
        <div><input type="input " placeholder="Enter Your Name " className=" border-2 p-2 " />  </div>
        <div><input type="input " placeholder="Enter Your Email " className=" border-2 p-2 " />  </div>
        <div><input type="input " placeholder="Enter Your Password " className=" border-2 p-2 " />  </div>
        <div><input type="input " placeholder="Re-Enter Your Password " className=" border-2 p-2 " />  </div>
        <button className=" mx-11 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Sigin
        </button>
    </div>

    );
};

export default Sigin;