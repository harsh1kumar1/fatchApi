import {useEffect, useState} from "react";
import UserData__2 from "./Usedata__2";

const API = "https://api.tvmaze.com/search/shows?q=all";

const Table = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
            <th>ID</th>
                <th>Summary</th>
                
               
            </tr>
            </thead>
            <tbody>
            <UserData__2 users={users}/>
            </tbody>
        </table>
    </>
}

export default Table;