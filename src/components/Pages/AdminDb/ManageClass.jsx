import useClass from "../../Hooks/useClass";


const ManageClass = () => {
    const [myclass] = useClass();
    console.log(myclass);
    return (
        <div>
            <h3>Manage Class admin pages : {myclass.length}</h3>
        </div>
    );
};

export default ManageClass;