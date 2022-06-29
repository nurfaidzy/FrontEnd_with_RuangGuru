// TODO: answer here
import React from "react"
import { useEffect, useState } from "react"

import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"
import LikeDislikeButton from "./LikeDislikeButton"

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  return <>
  <div aria-label="Post Card">
    <img src={image} alt="Post" width="100%" height="100%" aria-label="Post Image"/>
    <p aria-label="Post Caption" >{caption}</p>
    <p aria-label="Post User Name">{username}</p>
    <p aria-label="Post Date">{date}</p>
    <p>{userId} </p>
    <LikeDislikeButton/>
  </div>
</>
}
