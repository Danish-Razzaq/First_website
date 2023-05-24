

const Manu = ({params}:{params:{detail:string}}) => {
    return (
        <div className="p-5">
            This is Manu {params.detail};
        </div>
    );
};

export default Manu;
