import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Editor from '@monaco-editor/react';

const Edit =  () => {
    const {id} = useParams();
    const [data , setData] = useState('');
    const [text , setText] = useState('');
    useEffect (() => {
        Axios.get(`http://localhost:3001/api/get/page?name=${id}`)
        .then((res) => {
            setData(res.data);
            setText(res.data[0].html);
        })
        .catch(error => {
            console.log("不明なエラーが発生しました");
        });
    },[]);
    const onClickAddText = () => {
        const newText = text.replace(/[\n\r]/g,"");
        console.log(newText);
        Axios.put(`http://127.0.0.1:3001/api/get/page/edit?name=${id}&text='${newText}'`)
        .catch((error) => {
            console.log("不明なエラーが発生しました");
        });
    }
    return (
        <div>
            {
                (!data || data.length === 0)?
                (<div>Loading</div>):(
                    <div>
                        <h1>{data[0].title}を編集中</h1>
                        <hr/>
                        <textarea 
                            height="90px" 
                            className='editor'
                            onChange={(event) => setText(event.target.value)}
                        >
                            {data[0].html}
                        </textarea>
                    </div>
                )
            }
            <button onClick={onClickAddText} className='ok'>完了</button>
        </div>
    );
}


export default Edit;