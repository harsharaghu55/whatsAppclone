import React,{ useState, useEffect } from 'react'
import db from '../firebase'
import "./Chat.css"
import { useParams } from 'react-router-dom'
import { Avatar,IconButton } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import firebase from 'firebase'
import { useStateValue } from '../stateProvider'

function Chat() {
    const [input,setInput] = useState("")
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if(roomId){
            db.collection("Rooms").doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })

            db.collection("Rooms").doc(roomId).collection("Messages").orderBy("timestamp","asc").onSnapshot((snapshot)=>setMessages(snapshot.docs.map((doc)=>doc.data()))
            )
        }
    }, [roomId])
   
    const sendMessage = (e)=>{
        e.preventDefault()
        console.log(input)

        db.collection('Rooms').doc(roomId).collection('Messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("")
    }

    return (
        <div className = "chat">
            <div className="chatHeader">
                <Avatar />
                <div className="chatHeaderInfo">
                    <h3>{roomName}</h3>
                    <p>{new Date(
                        messages[messages.length-1]?.timestamp?.toDate()).toUTCString
                    ()}</p>
                </div>
                <div className="chatHeaderRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                
                </div>
            </div>
            <div className="chatBody">
                {messages.map(message => (
                <p className={`chatMessage ${message.name === user.displayName && "chatReciever"}`}>
                    <span className="chatName">
                        {message.name}
                    </span>
                    {message.message}
                    <span className="chatTimestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))} 
            </div>
            <div className="chatFooter">
                <InsertEmoticonIcon />
                <form>
                    <input 
                        type="text" 
                        placeholder="Type your message here" value={input}
                        onChange={(e)=>{
                            e.preventDefault()
                            setInput(e.target.value)
                        }}
                    />
                    <button type="submmit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
