import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";

const Search = () => {
    const [data , setData] = useState([]);
    const location = useLocation().search;
    const query = new URLSearchParams(location);
    const name = query.get('text');
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/search?text=${name}`)
        .then((res) => {
            setData(res.data);
        })
    } , []);
    return (
        <div className="search-text">
            <p>検索{' > '}"{name}"</p>
            {
                (!data || data.length === 0) ?
                (<h1>検索結果はありません</h1>):
                (
                    <div>
                        <h1>"{name}"の検索結果({data.length}件)</h1>
                    {
                        data.map((items) => {
                            return(
                            <NavLink 
                                to={`/pages/${items.id}`}
                                key={items.id}
                            >
                                <p className="search-item">{items.title}</p>
                            </NavLink>
                            );
                        })
                    }
                    </div>
                )
            }
        </div>
    );
}

export default Search;