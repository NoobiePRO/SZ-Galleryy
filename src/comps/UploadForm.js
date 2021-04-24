import {useState} from "react";
import React from "react";
import ProgressBar from "../comps/ProgressBar";

const UploadForm = () => {
    const[file,setFile]=useState("");
    const[error,setError]=useState(null);
    const types= ['image/png','image/jpeg'];
    const changeHandler=(e)=>{
        let selected= e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setError("please select write extension file");
            setFile(null);
        }
    }
    return(
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>

            </label>
            <div className="output">
                {error && <div className="errorName">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;