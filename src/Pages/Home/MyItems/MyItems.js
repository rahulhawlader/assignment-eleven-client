
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Dress from "../Dress/Dress";

const MyItems = () => {
    // const { name, dressname } = item;

    const [user] = useAuthState(auth);
    // console.log(user);
    const [items, setItems] = useState([]);
    // console.log(items);
    useEffect(() => {
        const getItems = async () => {
            const url = `https://ancient-scrubland-73255.herokuapp.com/item?email=${user?.email}`;

            const { data } = await axios.get(url);
            // console.log(data);
            setItems(data)
        }
        getItems(items)
    }, [user?.email, items])

    return (
        <div>
            {
                items.map(item => <Dress
                    key={item._id}
                    dress={item}></Dress>)
            }
        </div>
    );
};

export default MyItems;