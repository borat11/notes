import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { updateNote } from '../../features/noteSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Update = ({setVisible, editedTittle, editedDescription, editedId, setEditedDescription, setEditedTittle}) => {
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedValue = {
            id: editedId,
            tittle: editedTittle,
            description: editedDescription,
            createdAt: new Date().toString(),    
        };
        dispatch(updateNote(updatedValue));
            setVisible(false);
            toast.success('Note updated successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
            });
    };

    return (
        <>
        <Helmet><title>Update Note</title></Helmet>
            <ToastContainer />
            <div className='w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[rgba(255,255,255,0.8)]'>
                <div className='w-1/3 bg-gray-400 shadow-md rounded-md p-5'>
                    <div>
                        <div className='relative'>
                            <h1 className='font-mono text-black text-2xl'>Update your notes</h1>
                            <div 
                                className='absolute top-0 right-2 w-7 h-7 rounded-full bg-red-700 flex justify-center items-center cursor-pointer'
                                onClick={() => setVisible(false)}
                            >
                                <RxCross1 />
                            </div>
                        </div>
                        <input
                            placeholder='title'
                            className='w-full rounded-md border border-blue-700 p-2'
                            value={editedTittle}
                            onChange={(e) => setEditedTittle(e.target.value)}
                        />
                        <textarea
                            placeholder='description'
                            maxLength={400}
                            rows={5}
                            className='w-full rounded-md border border-blue-700 p-2 mt-3 resize-none'
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                        />
                        <button 
                            className='bg-[#268542] text-white text-base font-mono font-bold px-5 py-3 rounded-md mt-2'
                            onClick={handleEdit}
                        >
                            Update notes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;
