import React from 'react'
import {useFirestoreConnect,isLoaded,isEmpty} from 'react-redux-firebase';
import {useSelector} from 'react-redux'
import moment from 'moment'
const NoteDetail= (props) => {
    const id=props.match.params.id;
    useFirestoreConnect([{collection:'notes',doc:id}]);
    const note=useSelector(({firestore:{data}})=>data.notes&&data.notes[id]);
    const noteMarkup=!isLoaded(note)?(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Loading...
                    </span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey lighten-4 green-text">
                    <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>

    ):isEmpty(note)?(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Note Content is Empty
                    </span>
                    
                </div>
                <div className="card-action grey lighten-4 green-text">
                    <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    ):(
        <div className="container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        {note.title}
                    </span>
                    <p>{note.content}</p>
                </div>
                <div className="card-action grey lighten-4 green-text">
                    <div>{moment(note.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
    return noteMarkup
}

export default NoteDetail
