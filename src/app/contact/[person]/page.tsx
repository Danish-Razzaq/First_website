const Contact = ({params}:{params:{person:string}}) => {
    return (

        <div className=" md:p-5 lg:p-5 p-1 font-mono">
            This is Info of {params.person}
        </div>
    );
};

export default Contact;
