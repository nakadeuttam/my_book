
import NoteContext from './noteContext';
const NoteState =(props)=> {
    
    return(
        /*   It specify that all children can access this state */
        <NoteContext.Provider value={{}}>
            {props.children}     
        </NoteContext.Provider>
    )
}
export default NoteState;