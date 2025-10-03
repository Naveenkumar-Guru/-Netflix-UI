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
              <div className="genres">
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
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  background-color: red;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10px;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18v;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    transition: 0ms.3s ease-out;
    .image-video-wrapper {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      //this i using for icons
      .icons {
        display: flex;
        justify-content: space-between;
        .controls {
          display: flex;
          gap: "0.5rem";
        }

        svg {
          color: white;
          border: 0.1rem solid white;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: #b8b8b8;
          }
        }
      }
      .genres {
        display: flex;
        ul {
          display: flex;
          gap: 1rem;
        }
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;

export default Card;
