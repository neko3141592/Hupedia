import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Axios from "axios";
import "../stylesheets/page.css"

const  Page =  () => {
    const {id} = useParams();
    const [data , setData] = useState('');
    useEffect (() => {
        Axios.get(`http://localhost:3001/api/get/page?name=${id}`)
        .then((res) => {
            setData(res.data);
        })
    },[]);
    const renderText = (text) => {
        const __html = text;
        return { __html };
    };
    return (
        <div className="page">
            {
                (!data || data.length === 0) ?
                (<div>Loading</div>):
                (
                    <div>
                        <p>記事一覧{' > '}{data[0].title}</p>
                        <h1 className="page-title">
                            {data[0].title}
                            <NavLink to='edit/' className={'edit-button'}>[編集]</NavLink>
                        </h1>
                    <hr></hr>
                        <div 
                            className="page-text"
                            id="page-text"
                            dangerouslySetInnerHTML={renderText(data[0].html)}
                        >
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Page;