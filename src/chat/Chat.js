import React,{useState} from 'react'
import "./Chat.css"
import { Avatar,IconButton } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'

function Chat() {
    const [input,setInput] = useState("")

    const sendMessage = (e)=>{
        e.preventDefault()
        console.log(input)
        setInput("")
    }

    return (
        <div className = "chat">
            <div className="chatHeader">
                <Avatar />
                <div className="chatHeaderInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ....</p>
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
                <p className="chatMessage">
                    <span className="chatName">
                        Harsha
                    </span>
                    Hey Guys
                </p>
                <p className={`chatMessage ${true && "chatReciever"}`}>
                    <span className="chatName">
                        Harsha
                    </span>
                    Hey Guys
                    <span className="chatTimestamp">
                        3:52pm
                    </span>
                </p>
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
