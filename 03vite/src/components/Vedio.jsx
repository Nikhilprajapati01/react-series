import React from "react";

function Vedio({ title, views, time, verify, channel }) {
  return (
    <>
      <div className="container">
         <img src="https://cdn.pixabay.com/photo/2024/08/28/09/05/gannet-9003524_1280.jpg" alt="egal" height={10} width={300}/>
         <div>{title}</div>
         <div className="channel">{channel}</div>
         <div className="views">{views}</div>

      </div>
    </>
  );
}
export default Vedio;