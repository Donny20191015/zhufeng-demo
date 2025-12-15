import { use, useEffect, useId, useState } from "react";
import { mockData } from "../assets/Service";

const InterviewPromise = () => {
    // const [user, setUser] = useState({});    // 获取用户的数据
    const [user, setUser] = useState([]);       // 获取多个用户的数据
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    /* // 获取用户的数据
    useEffect(() => { 
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
                console.log(response);
                if (!response) setError("No user data found");
                const data = {
                    id: response.id,
                    name: response.name,
                    email: response.email,
                    phone: response.phone,
                    website: response.website
                }

                setUser(data);
            } catch (err) {
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <span>Id: {user.id}, </span>
            <span>Name: {user.name}, </span>
            <span>Email: {user.email}</span>
        </div>
    ); */

    
    // 获取多个用户的数据
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 不推荐这样使用，会阻塞下面的请求
                // const r1 = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
                // const r2 = await fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json());
                // const r3 = await fetch("https://jsonplaceholder.typicode.com/users/3").then(res => res.json());
                const responses = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
                    fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json()),
                    fetch("https://jsonplaceholder.typicode.com/users/3").then(res => res.json())
                ]);
                console.log(responses);

                setUser(responses);
            } catch (error) {
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <span>users: {user.length}</span>
            {
                user.map((item) => {
                    return <div key={item.id}>
                        <span>Id: {item.id}, </span>
                        <span>Name: {item.name}, </span>
                        <span>Email: {item.email}</span>
                    </div>
                })
            }

            {/* {
                user.map((item) => (
                    <div key={item.id}>
                        <span>Id: {item.id}, </span>
                        <span>Name: {item.name}, </span>
                        <span>Email: {item.email}</span>
                    </div>
                ))
            } */}
        </div>
    );
}
export default InterviewPromise;