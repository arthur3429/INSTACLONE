import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import { StoryProfile } from "./story-profile";

export function Story() {
  const Story = styled.div`
    .story {
      max-width: 470px;
      width: 100%;
      height: 119px;
      display: flex;
      align-items: center;
      overflow-x: hidden;
      background-color: white;
      padding: 16px 0 16px 16px;
      margin: 30px 0 10px 0;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .story-button,
    .story-button2 {
      position: sticky;
      display: flex;
      align-items: center;
      height: 22px;
      left: 93%;
      margin-right: -22px;
      color: #262626;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.103);
      font-size: 22px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
    }

    .story-button2 {
      opacity: 0;
      left: 1%;
      box-shadow: -2px 2px 15px rgba(0, 0, 0, 0.2);
      z-index: 0;
    }

    .animate {
      opacity: 1 !important;
      transform: translateY(0);
      transition: opacity 75ms linear, transform 38ms ease-out;
    }
  `;

  useEffect(() => {
    // Uso do botão de avanço a direita
    const slide = document.querySelector(".story-button");

    slide.addEventListener("click", () => {
      const story = document.querySelector(".story");
      const slide2 = document.querySelector(".story-button2");
      story.scrollBy({ top: 0, left: 320, behavior: "smooth" });
      slide2.classList.add("animate");
      slide2.addEventListener("click", () => {
        story.scrollBy({ top: 0, left: -320, behavior: "smooth" });
        slide2.classList.remove("animate");
      });
    });
  }, []);

  return (
    <Story>
      <div className="story">
        <div className="story-button">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="story-button2">
          <i className="ri-arrow-left-s-line"></i>
        </div>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          name={"_giga"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/woman-pic.jpg"}
          name={"gigawoman"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/true-hero.jpg"}
          name={"truehero"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/chadliator.jpg"}
          name={"chadliator"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          name={"not.king"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/woman-pic2.jpg"}
          name={"d.3nise"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          name={"not.king"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          name={"not.king"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          name={"not.king"}
        ></StoryProfile>

        <StoryProfile
          src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          name={"not.king"}
        ></StoryProfile>
      </div>
    </Story>
  );
}
