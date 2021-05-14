export const addNote=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favourite:false,
            createdAt:new Date()
        })
        .then(()=>{
            console.log("Add note successfully")
        })
        .catch((err)=>{
            console.log(err);

        })
    }
}
    export const deleteNote=(note)=>{
        return(dispatch,getState,{getFirestore})=>{
            const firestore=getFirestore()
            firestore.collection('notes').doc(note.id)
            .delete()
            .then(()=>{
                console.log("Deleted")
            })
            
            
            .catch((err)=>{
                console.log(err);
    
            })
        }
    }

    export const toggleFav=(note)=>{
        return(dispatch,getState,{getFirestore})=>{
            const favStatus=!note.favorite;
            const firestore=getFirestore()
            firestore.collection('notes').doc(note.id)
            .update({
                favorite:favStatus
            })
            .then(()=>{
                console.log("fav toggled successfully")
            })
            .catch((err)=>{
                console.log(err);
    
            })
        }
    }

    export const updateNote=(note)=>{
        return(dispatch,getState,{getFirestore})=>{
            const favStatus=!note.favorite;
            const firestore=getFirestore()
            firestore.collection('notes').doc(note.id)
            .update({
                title:note.title,
                content:note.content
            })
            .then(()=>{
                console.log("fav toggled successfully")
            })
            .catch((err)=>{
                console.log(err);
    
            })
        }
    }


