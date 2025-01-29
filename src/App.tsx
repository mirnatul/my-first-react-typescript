import { useEffect, useState } from 'react';
import './App.css'
import Person from './components/Person';

// export interface ProductData {
//   name: string;
//   price: number;
// }

export interface Users {
  id: number;
  name: string;
  email: string;
  address: Address;
}
interface Address {
  street: string;
  geo: Geo;
}
interface Geo {
  lat: string
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  // let name: string = "Lipon";
  // let num: number = 34;
  // let isMarried: boolean = false;

  // let ages: number[] = [1, 2, 3, 4]

  // const productData: ProductData = {
  //   name: "apple",
  //   price: 120000
  // }


  return (
    <>
      <div>{users.length}</div>
      <div>
        {

          // users.map(user => <Person key={Math.random()} productData={productData} name={"lipon"} age={22} isMarried={false} />)
          users.map(user => <Person key={user.id} user={user} />)
        }
      </div>
    </>
  )
}

export default App
