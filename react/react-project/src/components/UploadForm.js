// TODO: answer here
import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../api/config";

export default function UploadForm({ onSubmit }) {

  const [gambar, setgambar] = useState(null);
  const [kaption, setkaption] = useState("");
  const api_url=`${API_URL}/post/create`;

  const kirim = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", kaption);
    formData.append("image", gambar);

    await axios.post(api_url, formData, {
      withCredentials: true,
    });
    
    onSubmit();
  };

  const sigambar = (gambar) => {
    setgambar(gambar);
  };

  const sikaption = (kaption) => {
    setkaption(kaption);
  };

  return (
    <>
      <form onSubmit={(e) => kirim(e)} aria-label="Upload Form">
        <input
          type="teks"
          onChange={(e) => sikaption(e.target.value)}
          id="caption"
          name="caption"
          aria-label="Caption Input"
        />
        <input
          type="file"
          onChange={(e) => sigambar(e.target.files[0])}
          id="image"
          name="image"
          accept="image/png, image/jpg, image/gif"
          aria-label="Image Input"
        />
        <button aria-label="Submit Button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}