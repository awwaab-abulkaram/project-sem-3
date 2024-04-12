import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import './Admin.css';
import PdfViewer from './PdfViewer';

const Admin2 = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [allPdf, setAllPdf] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        getPdf();
    }, []);

    const getPdf = async () => {
        const result = await axios.get("http://localhost:5500/get-files");
        console.log(result.data.data);
        setAllPdf(result.data.data);
    };

    const submitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        console.log(title, file);
        const result = await axios.post('http://localhost:5500/upload-files', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(result);
        if (result.data.status === "ok") {
            setOpenAlert(true);
            getPdf();
        }
    };

    const selectPdf = (pdf) => {
        setSelectedPdf(pdf);
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    return (
        <div>
            <form className='admin-box' onSubmit={submitImage}>
                <h3>Insert Articles :</h3>
                <input className='admin-form' type='text' placeholder='Title' required onChange={(e) => setTitle(e.target.value)} />
                <input className='admin-form' type='file' accept='application/pdf' required onChange={(e) => setFile(e.target.files[0])} />
                <button type='submit' className='secondarie-button'>Insert Articles</button>
            </form>
            <div className="uploaded">
                <h2>Uploaded Articles : </h2>
                <div className="output-div">
                    {allPdf === null ? "" : allPdf.map(data => {
                        return (
                            <div className="inner-div" key={data._id}>
                                <h6>Title: {data.title}</h6>
                                <button className="buttonss" onClick={() => selectPdf(data.pdf)}>Show Articles</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            {selectedPdf && <PdfViewer pdf={`http://localhost:5500/files/${selectedPdf}`} />}
            <Snackbar open={openAlert} autoHideDuration={6} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success">
                    Uploaded Successfully
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Admin2;
