const Data = async ({ params }: { params: { dataApi: string } }) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.dataApi}`)
    const res = await api.json()
    // console.log(res);

    return (
        <div className="p-5 mx-7">
            <div className="font-bold text-2xl underline-offset-1  ">  Api Detaial</div>
          
            <p className=" md:w-1/2 lg:1/2">{res.body}</p>
        </div>
    );
};
export default Data;