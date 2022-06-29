// TODO: answer here
import axios from "axios";
import React, {useState} from "react";
import { API_URL } from '../api/config';

export default function LikeDislikeButton({id, isLiked, isDisliked, likeCount, dislikeCount}) 
{

    const [hsuka,sethsuka]=useState(likeCount);
    const [hndasuka,sethndasuka]=useState(dislikeCount);

    const apiUrl = `${API_URL}/post/${id}`;

    const jikasuka=()=>
    {
        if (isLiked===true)
        {
            sethsuka(hsuka-1);
            sethndasuka(hndasuka);
            axios.get(`${apiUrl}/unlike`, {withCredentials: true})
        }
        else if (isLiked===false)
        {
            sethsuka(hsuka+1);
            sethndasuka(hndasuka-1);
            axios.get(`${apiUrl}/like`, {withCredentials: true})
        }
    }

    const jikandasuka=()=>
    {
        if (isDisliked===true)
        {
            sethsuka(hsuka);
            sethndasuka(hndasuka-1);
            axios.get(`${apiUrl}/undislike`, {withCredentials: true})
        }
        else if (isDisliked===false)
        {
            sethsuka(hsuka-1);
            sethndasuka(hndasuka+1);
            axios.get(`${apiUrl}/dislike`, {withCredentials: true})
        }
    }


    return(
        <>
            <button onClick={jikasuka} aria-label="Like Button" >Like</button>
            <button onClick={jikandasuka} aria-label="Dislike Button" >Dislike</button>
            <p aria-label="Like Count">{hsuka}</p>
            <p aria-label="Dislike Count">{hndasuka}</p>

        </>
    )
}