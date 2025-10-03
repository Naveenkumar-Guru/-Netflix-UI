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
  transition: transform 0.3s ease-in-out;

  img {
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .hover {
    position: absolute;
    top: -10rem;
    left: -2rem;
    width: 20rem;
    background-color: #181818;
    border-radius: 0.3rem;
    border: 1px solid gray;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    z-index: 99;
    transition: all 0.3s ease-in-out;
    padding-bottom: 0.8rem;
    overflow: hidden;
    transform: scale(1.02);

    .image-video-wrapper {
      position: relative;
      height: 150px;

      img,
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem 0.3rem 0 0;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .info-container {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      padding: 1rem;

      .movieName {
        color: white;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
      }

      /* Icon row */
      .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        /* Play, Like, Dislike, Add */
        .controls {
          display: flex;
          gap: 0.6rem;

          svg {
            color: white;
            border: 1px solid white;
            border-radius: 50%;
            font-size: 1.3rem;
            padding: 0.35rem;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
              background-color: rgba(255, 255, 255, 0.2);
              color: #b8b8b8;
            }
          }
        }

        /* Info (down arrow) */
        .info svg {
          color: white;
          font-size: 1.4rem;
          border: 1px solid white;
          border-radius: 50%;
          padding: 0.3rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            color: #b8b8b8;
          }
        }
      }

      /* Genres row */
      .genres {
        margin-top: 0.4rem;

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          color: gray;
          font-size: 0.85rem;
          padding: 0;
          margin: 0;

          li {
            list-style: none;
            position: relative;
            padding-right: 0.7rem;

            &:not(:last-child)::after {
              content: "•";
              position: absolute;
              right: 0.3rem;
              color: gray;
            }
          }
        }
      }
    }
  }
`;

export default Card;
