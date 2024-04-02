import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Admin.css'

const Admin = () => {
    const [title,setTitle]=useState('')
    const [file,setFile]=useState('')
    const [allImage, setAllImage] = useState(null)

    const showPdf = (pdf) => {
        window.open(`http://localhost:5500/files/${pdf}`,"_blank","noreferer")
    }

    useEffect(() => {
        getPdf();
        }, []);
        const getPdf = async () => {
        const result = await axios.get("http://localhost:5500/get-files");
        console.log(result.data.data);
        setAllImage(result.data.data);
        }
    const submitImage = async(e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title",title);
        formData.append("file",file);
        console.log(title,file);
        const result = await axios.post('http://localhost:5500/upload-files',formData,{
            headers:{"Content-Type": "multipart/form-data"},
        })
        console.log(result)
        if (result.data.status == "ok") {
            alert("Uploaded Successfully!")
            getPdf()
        }
    }
  return (
    <div> 
        <form className='admin-box' onSubmit={submitImage}>
            <h3>Insert Articles :</h3>
            <input  className='admin-form' type='text' placeholder='Title' required onChange={(e)=> setTitle(e.target.value)}/>
            <input className='admin-form' type='file' accept='application/pdf' required onChange={(e)=> setFile(e.target.files[0])}/>
            <button type='submit' className='secondary-button'>Insert Articles</button>
        </form>
        <div className="uploaded">
            <h2>Uploaded Articles : </h2>
            <div className="output-div">
                {allImage== null ? "" : allImage.map(data => {
                    return(
                        <div className="inner-div">
                        <h6>Title: {data.title}</h6>
                        <button className="buttonss" onClick={()=> showPdf(data.pdf)}>Show Articles</button>
                        </div>
                    )
                })}
                
            </div>
            </div>
    </div>
  )
}

export default Admin