import { useState } from "react";
import Axios from "axios";

const New = () => {
    const [title , setTitle] = useState('');
    const [text , setText] = useState('');
    const [previewText , setPreviewText] = useState('');
    const [isPreview , setIsPreview] = useState(false);
    const onClickAddNew = () => {
        const newText = text.replace(/[\n\r]/g,"");
        console.log(newText);
        Axios.post(`http://127.0.0.1:3001/api/post/page/new?title=${title}&text=${newText}`)
        .catch((error) => {
            console.error(error);
        })
        .then((res) => {
            // navigate(`/pages/${id}`);
            // window.location.reload();
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
        <div className="new">
            <h1>"{title}"を作成中</h1>
            <hr/>
            <div className='page-text' 
                dangerouslySetInnerHTML={renderText(previewText)}
            >
            </div>
            <br/>
            <hr/>
            <h2>記事のタイトル:</h2>
            <input 
                type="text" 
                className="new-title"
                onChange={(event) => {setTitle(event.target.value)}}
            />
            <h2>html:</h2>
            <textarea 
                height="90px" 
                className="editor"
                onChange={(event) => {setText(event.target.value)}}
            >
            </textarea>
            <div className='buttons'>
                <button onClick={onClickAddNew} className='ok'>OK</button>
                <button onClick={onClickPreview} className='ok'>Preview</button>
            </div>
            {(isPreview)?(<p>OKを押すと公開できます</p>):(<p>公開するにはプレビューをする必要があります</p>)}
        </div>
    );
}

export default New;