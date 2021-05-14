import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import NotesList from '../notes/NotesList';
import NoteList from '../notes/NotesList'
const Favorites = () => {
    useFirestoreConnect([{collection:'notes',where:['favorite','==',true],orderBy:['createdAt','desc'],storeAs:'favnotes'}])

    const favnotes=useSelector(state=>state.firestore.ordered.favnotes);
    console.log(favnotes)
    return (
       <NotesList notes={favnotes} />
    )
}

export default Favorites
