import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../features/noteSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddNotes = (e) => {
        e.preventDefault();
        if (tittle !== "" && description !=="")  {
            const newNote = {
                id: Date.now().toString(32),
                tittle, // corrected the property name here
                description,
                createdAt: new Date().toString(),
            };
            toast.success('Note added successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                });
            setTittle("")
            setDescription("")
            dispatch(addNote(newNote)); 

        } else {
            toast.error('Please fill up the fields ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                });
        }
        // pass the newNote object to the addNote action
    };

    return (
        <>
        <Helmet><title>Home</title></Helmet>
        <ToastContainer/>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-1/4 bg-gray-400 shadow-md rounded-md px-4 py-4 box-border mb-4'>
                <div>
                    <h1 className='font-mono text-black text-2xl'>Add your notes</h1>
                    <input
                        placeholder='title'
                        onChange={(e) => setTittle(e.target.value)} // receive and use the event object
                        value={tittle}
                        className='w-full rounded-md border border-blue-700 p-2'
                    />
                    <textarea
                        placeholder='description'
                        onChange={(e) => setDescription(e.target.value)} // receive and use the event object
                        maxLength={400}
                        rows={5}
                        value={description}
                        className='w-full rounded-md border border-blue-700 p-2 mt-3 resize-none'
                    />
                    <button onClick={handleAddNotes} className='bg-[#333] text-white text-base font-mono font-bold px-5 py-3 rounded-md mt-2'>Save note</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
