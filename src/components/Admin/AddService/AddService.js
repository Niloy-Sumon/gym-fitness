import React, { useState } from 'react';
import AdminSidebar from '../Sidebar/AdminSidebar';

const AddService = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('email', info.email);

        fetch('https://tranquil-everglades-13091.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
        <AdminSidebar></AdminSidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Service</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Service Title</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Service Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddService;