import React, { Component } from "react";
import data from "../../data/videos.json";
import AsideCard from "../AsideCard/AsideCard";

function nextVideos(video) {
  return (
    <>
      <img className="aside__image" src={video.image} alt={video.title} />
      <p>{video.title}</p>
      <p>{video.channel}</p>
    </>
  );
}

class Aside extends Component {
  state = {
    data : data
  };
    
  render() {
      console.log(data);
    return (<div>Next Video</div>,
    {
    data.map (video) => (
        <AsideCard
          key={index}
          image={data.image}
          title={data.title}
          channel={data.channel}
        />
      ));
    })
  }
}

export default Aside;
