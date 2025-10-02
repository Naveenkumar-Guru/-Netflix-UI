import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Card = () => {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div>
          <div className="image-video-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
            />
          </div>
          <div className="info-container">
            <h3 className="movieName" onClick={() => navigate("/player")}>
              Red Notice
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="like" />
                <BsCheck title="Remove" from List />
                <AiOutlinePlus title="add to my List" />
              </div>
              <div className="info">
                <BiChevronDown title="more Info" />
              </div>
              <div className="genre">
                <ul>
                  <li>Action</li>
                  <li>Action</li>
                  <li>Action</li>
                  <li>Action</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: red;
`;
export default Card;
