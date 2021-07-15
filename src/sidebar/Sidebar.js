import React,{useEffect, useState} from "react"
import "./Sidebar.css"
import {Avatar,IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "../sidebarChat/SidebarChat.js"
import db from "../firebase"
import { useStateValue } from "../stateProvider"

function Sidebar(){
    const[rooms,setRooms] = useState([])
    const[{ user },dispatch] = useStateValue();
    useEffect(()=>{
        const  unsubscribe = db.collection("Rooms").onSnapshot(snapshot =>{
                setRooms(snapshot.docs.map(doc => ({
                    id:doc.id,
                    data:doc.data(),
                })
            ))
        })

        return () => {
            unsubscribe();
        }
    },[])
    console.log(rooms)
    return(
        <div className="sideBar">
            <div className="sideBarHeader">
                <Avatar src={user?.photoURL} />
                <div className="sideBarHeaderRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebarSearch">
                <div className="sidebarSearchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or start new chat" style={{outline:"none"}}/>
                </div>
            </div>
            <div className="sideBarChat">
                <SidebarChat addNewChat={true}/>
                {rooms.map(room => 
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>)}
               
            </div>
        </div>
        
    )
}


export default Sidebar 
