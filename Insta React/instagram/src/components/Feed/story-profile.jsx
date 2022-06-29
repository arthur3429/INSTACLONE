import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
export function StoryProfile(props) {
  const StoryProfile = styled.div`
    .story-profile {
      padding: 0 5px;
      margin: 0 2px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .story-profile:nth-child(1) {
      margin-left: 0 !important;
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
    }

    .border-story img {
      margin-left: 2px;
      margin-top: 2px;
      cursor: pointer;
    }

    .profile-pic img {
      height: 58px;
      width: 58px;
      border-radius: 50px;
      background-color: white;
      padding: 2px;
    }

    .profile-username {
      font-size: 12px;
      max-width: 74px;
      text-align: center;
    }
  `;

  return (
    <StoryProfile>
      <Link to="stories">
        <div className="story-profile">
          <a>
            <div className="profile-pic border-story">
              <img src={props.src} alt="GC" />
            </div>
          </a>
          <div className="profile-username">{props.name}</div>
        </div>
      </Link>
    </StoryProfile>
  );
}
