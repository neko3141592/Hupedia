import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Editor from '@monaco-editor/react';
import "../stylesheets/page.css"

const Edit =  () => {
    const {id} = useParams();
    const [data , setData] = useState('');
    const [text , setText] = useState('');
    const [previewText , setPreviewText] = useState('');
    const [isPreview , setIsPreview] = useState(false);
    useEffect (() => {
        Axios.get(`http://localhost:3001/api/get/page?name=${id}`)
        .then((res) => {
            setData(res.data);
            setText(res.data[0].html);
            setPreviewText(res.data[0].html);
        })
        .catch(error => {
            console.log("不明なエラーが発生しました");
        });
    },[]);
    const onClickAddText = () => {
        if(!isPreview) return;
        const newText = text.replace(/[\n\r]/g,"");
        console.log(newText);
        Axios.put(`http://127.0.0.1:3001/api/get/page/edit?name=${id}&text='${newText}'`)
        .catch((error) => {
            console.log("不明なエラーが発生しました");
        })
        .then((res) => {
            console.log(res);
        })
    }
    const onClickPreview = () => {
        setIsPreview(true);
        const newText = text.replace(/[\n\r]/g,"");
        setPreviewText(newText);
    }
    const renderText = (text) => {
        const __html = text;
        return { __html };
    };
    return (
        <div className='edit'>
            
            {
                (!data || data.length === 0)?
                (<div>Loading</div>):(
                    <div>
                        <h1>{data[0].title}を編集中</h1>
                        <hr/>
                        <div className='page-text' 
                            dangerouslySetInnerHTML={renderText(previewText)}
                        >
                        </div>
                        <br/>
                        <hr/>
                        <h2>html:</h2>
                        <textarea 
                            height="90px" 
                            className='editor'
                            onChange={(event) => {
                                setText(event.target.value);
                                setIsPreview(false);
                            }}
                        >
                            {data[0].html}
                        </textarea>
                    </div>
                )
            }
            <div className='buttons'>
                <button onClick={onClickAddText} className='ok'>OK</button>
                <button onClick={onClickPreview} className='ok'>Preview</button>
            </div>
            {(isPreview)?(<p>OKを押すと公開できます</p>):(<p>公開するにはプレビューをする必要があります</p>)}
        </div>
    );
}


export default Edit;