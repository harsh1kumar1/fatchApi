import {useEffect, useState} from "react";
import UserData from "./UserData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                <th>score</th>
                <th>url</th>
                <th>show-details</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
        <a href="/summary" class="fcc-btn">Summary</a>
        
    </>
}

export default Table;