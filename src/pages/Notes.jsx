import { formatDistance } from 'date-fns';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../features/noteSlice';
import Update from '../components/Update';

const Notes = () => {
  const perRow = 3
  const [next,setNext] = useState(perRow)
  const [visible,setVisible] = useState(false)
  const [editedTittle,setEditedTittle] = useState("")
  const [editedDescription,setEditedDescription] = useState("")
  const [editedId,setEditedId] = useState()

  const { notes } = useSelector((state) => state.note);
  const dispatch =useDispatch()
  const handleDelete=(id)=>{
    dispatch(deleteNote(id))
  }
  const handleLoadMore=()=>{
    setNext((prev)=>prev+3)
  }
const handleUpdate=(note)=>{
  setVisible(true)
  setEditedTittle(note.title)
  setEditedDescription(note.description)
  setEditedId(note.id)
}
if(visible){
  return <Update setVisible={setVisible}
                  editedTittle={editedTittle}
                  editedDescription={editedDescription}
                  editedId={editedId}
                  setEditedTittle={setEditedTittle}
                  setEditedDescription={setEditedDescription}/>
}

  return (
    <>
      <Helmet><title> notes </title></Helmet>
      <div className='container'>
        <div className='grid grid-cols-3 gap-3 mt-5'>
          {notes.slice(0,next) .map((note) => (
            <div key={note.id} className='shadow-md bg-gray-400 rounded-md px-4 py-3 border border-slate-900 items-center justify-end'>
              <h3 className='font-mono text-xl font-bold'>{note.title}</h3>
              <p className='font-sans font-normal text-lg'>{note.description}</p>
              <span className='text-base font-mono text-slate-500'>{formatDistance(note.createdAt, new Date(), { addSuffix: true })}</span>

              <div className='flex items-center justify-end gap-x-3'>
                <button 
                className='px-5 py-2 text-white font-medium rounded-md bg-green-400'
                onClick={()=>handleUpdate(note)}
                >update</button>
                <button className='px-5 py-2 text-white font-medium rounded-md bg-red-500'
                onClick={()=>handleDelete(note.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {notes.length > next && (<div className='my-4'>
          <button className='bg-blue-500 rounded-md px-2 py-1'onClick={handleLoadMore}>
            load more</button>
        </div>)}
      </div>
    </>
  );
};

export default Notes;
