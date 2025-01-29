// import { useState } from "react";
import { Users } from '../App';
// import { ProductData, Users } from '../App';

// interface myInfo {
//     name: string;
//     age: number;
//     isMarried: boolean;
//     productData: ProductData
//     users: Users
// }

// interface ProductData {
//     productData: ProductData;
// }
interface myInfo {
    user: Users;
}

// const Person = ({ name, age, isMarried, productData, users }: myInfo) => {
const Person = ({ user }: myInfo) => {
    console.log(user);
    // const [showInfo, setShowInfo] = useState<boolean | null>(false);

    // const toggleInfo = () => {
    //     setShowInfo(!showInfo)
    // }


    return (
        <div>
            <h3>Id: {user.id}</h3>
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address.street} | {user.address.geo.lat}</p>
            </div>
            <hr />
            {/* <p>{productData.name}</p>
            <p>{productData.price}</p>
            Person:
            {
                showInfo && <>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{isMarried ? "Married" : "Not married"}</p>
                </>
            }
            <br />
            <button onClick={toggleInfo}>Toogle</button> */}
        </div>
    );
};

export default Person;