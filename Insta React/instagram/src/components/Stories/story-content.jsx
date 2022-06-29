import styled from "styled-components";
import React from "react";

export function StoryContent(props) {
  const StoryContent = styled.div`
    progress-bar {
      height: 3px;

      width: 90%;
      background-color: rgba(255, 255, 255, 0.411);
      margin: 10px auto;
    }

    .my-bar {
      width: 1%;
      background-color: green;
      height: 3px;
    }

    .progressbar {
      background-color: rgba(255, 255, 255, 0.8);
    }

    .progressbar .inner {
      height: 3px;
      border-radius: 2px;
      animation: progressbar-countdown;

      animation-duration: 40s;

      animation-iteration-count: 1;

      animation-fill-mode: forwards;

      animation-play-state: paused;

      animation-timing-function: linear;
    }

    @keyframes progressbar-countdown {
      0% {
        width: 100%;
        background-color: #fff;
      }
      100% {
        width: 0%;
        background-color: #fff;
      }
    }

    .profile2 {
      display: none;
      flex-direction: column;
      width: 100%;
      position: absolute;
      z-index: 1;
    }

    .profile-info {
      display: flex;
      align-items: center;
      margin: 10px 15px;
      color: #fff;
    }

    .profile-info img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
    }

    .profile-info a {
      font-size: 14px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      margin: 0 10px;
    }

    .profile-info span {
      opacity: 0.6;
    }

    .controls {
      display: flex;
      align-items: center;
      color: #fff;
      margin-right: 15px;
      font-size: 20px;
    }

    .controls i {
      margin-right: 10px;
      cursor: pointer;
    }

    .story-content {
      left: 0%;
      top: 0%;
      position: absolute;
      z-index: 0;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .story-content video {
      width: 100%;
    }

    .story-content img {
      width: 100%;
      height: 100%;
      aspect-ratio: 9 / 16;
      border-radius: 8px;
    }

    .interact {
      width: 100%;
      color: white;
      font-size: 24px;
      display: none;
      align-items: center;
      padding: 10px;
      position: absolute;
      bottom: 1%;
      z-index: 1;
    }

    .interact input {
      width: 100%;
      padding: 10px;
      border: 1px solid white;
      border-radius: 20px;
      background-color: transparent;
    }

    .interact input::placeholder {
      color: #fff;
      opacity: 0.8;
      padding-left: 10px;
    }

    .interact i {
      margin: 0 5px;
      font-size: 26px;
      cursor: pointer;
    }

    .interact i:hover {
      color: rgba(0, 0, 0, 0.4);
    }

    .interact-icons {
      display: flex;
    }

    .space-between {
      display: flex;
      justify-content: space-between;
    }

    .border-story {
      height: 62px;
      width: 62px;
      background: radial-gradient(
        circle at 33% 100%,
        #fed373 4%,
        #f15245 30%,
        #d92e7f 62%,
        #9b36b7 85%
      );
      border-radius: 50%;
      margin: auto;
      position: absolute;
      top: 40%;
    }

    .border-story img {
      margin-left: 2px;
      margin-top: 2px;
      cursor: pointer;
    }

    .profile-pic2 img {
      height: 58px;
      width: 58px;
      border-radius: 50px;
      background-color: #262626;
      padding: 2px;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.39);
      text-decoration: none;
      font-weight: 600;
    }

    .text a {
      color: white;
      text-decoration: none;
    }
  `;

  return (
    <StoryContent className="story-post">
      <div className="profile2">
        <div class="progress-bar">
          <div id="progressbar2"></div>
        </div>
        <div class="space-between">
          <div class="profile-info">
            <img src={props.img} alt="pic" />
            <a>{props.name}</a>
            <span>{props.time}</span>
          </div>
          <div class="controls">
            <i class="ri-pause-line"></i>
            <i class="ri-volume-mute-fill"></i>
            •••
          </div>
        </div>
      </div>
      <div class="story-content">
        <img src={props.storyImg} alt="" />
      </div>
      <div class="interact">
        <input type="text" placeholder={"Responder a " + props.name} />
        <div class="interact-icons">
          <i class="ri-heart-line"></i>
          <i class="ri-send-plane-line"></i>
        </div>
      </div>
      <div class="profile-pic2 border-story">
        <img src={props.img} alt="GC" />
        <div class="text">
          <a href="#">{props.name}</a>
          <span>{props.time}</span>
        </div>
      </div>
    </StoryContent>
  );
}

// <div class="profile">

// </div>
