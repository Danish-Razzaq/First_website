const Login = () => {
    return (
        <>
        <div className=" lg:p-20 md:p-14 p-8  space-y-8">
       

            <div><input type="input " placeholder="Enter Username " className=" border-2 p-2 " />  </div>
            <div><input type="input " placeholder="Enter Your Password " className=" border-2 p-2 " />  </div>
            <button className=" mx-11 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
        </div>
        </>

    )
}
export default Login;