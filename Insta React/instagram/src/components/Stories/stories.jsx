import styled from "styled-components";
import React, { useEffect } from "react";
import { StoryContent } from "./story-content";
import { Link } from "react-router-dom";

export function Stories() {
  const Stories = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  position: relative;
  z-index: 1;
  display: flex;
}
    .story-button {
      left: 67%;
    }

    .story-button2 {
      left: 33%;
      background-color: #ccc;
    }

    .story-button,
    .story-button2 {
      position: sticky;
      display: flex;
      align-items: center;
      height: 22px;

      margin-right: -22px;
      color: #262626;
      cursor: pointer;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.103);
      font-size: 22px;
      border-radius: 50%;
      background-color: #fff;
    }
    .logo {
      padding: 15px;
      width: calc(5vw + 30px);
      position: relative;
    }

    .story {
      height: 100vh;
      width: 90vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;

      position: relative;
    }

    .close {
      width: calc(5vw + 30px);
      text-align: end;
      padding: 10px 15px;
      color: white;
      font-size: 40px;
    }

    .close a {
      text-decoration: none;
      color: white;
    }
    .StoryContent:nth-child(1),
    .StoryContent:nth-child(2) {
      background-color: #1a1a1a00;
    }

    .active {
      height: 96% !important;
      width: auto;
      position: sticky;
    }

    .story-button {
      left: 67%;
    }

    .story-button2 {
      left: 33%;
      background-color: #ccc;
    }

    .story-post {
      aspect-ratio: 9 / 16;
      margin: 0 20px;
      background-color: #262626;
      height: 44%;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      transition: 0.4s;
      position: relative;
    }


  `;

  useEffect(() => {
    // Alteração de título
    let title = document.querySelector("title");
    title.textContent = "Stories • Instagram";

    let story = document.querySelectorAll(".story-post");
    let storyBtn = document.querySelector(".story-button");
    let storyBtn2 = document.querySelector(".story-button2");
    let storyActive = document.querySelectorAll(".profile2");
    let storyActive2 = document.querySelectorAll(".interact");
    let storyActive3 = document.querySelectorAll(".profile-pic2");
    let width = 0;
    let j = 2;
    story[0].style.opacity = 0;
    story[1].style.opacity = 0;
    story[2].classList.add("active");
    if (story[2].classList.contains("active")) {
      storyActive[2].style.display = "flex";
      storyActive2[2].style.display = "flex";
      storyActive3[2].style.opacity = 0;
    }

    // Avança para o próximo story

    // Converter a função anonima para uma função normal e chamar ela usando click event e um set time out de 15s

    storyBtn.addEventListener("click", () => {
      if (j < story.length - 1) {
        width += story[0].clientWidth + 40;
        j++;
        let k = j - 1;

        Array.from(story).forEach((card) => {
          card.style.transform = `translate(-${width}px, 0)`;
        });

        story[k].classList.remove("active");
        story[j].classList.add("active");

        if (story[j].classList.contains("active")) {
          storyActive[j].style.display = "flex";
          storyActive2[j].style.display = "flex";
          storyActive3[j].style.opacity = "0";
          storyActive[k].style.display = "none";
          storyActive2[k].style.display = "none";
          storyActive3[k].style.opacity = "1";
        }
      }
      storyBtn2.style.backgroundColor = "#fff";
    });

    // Volta para o Story anterior

    storyBtn2.addEventListener("click", () => {
      if (j > 2) {
        j = j - 1;
        let l = j + 1;
        width = width - (story[1].clientWidth + 40);
        Array.from(story).forEach((card) => {
          card.style.transform = `translate(-${width}px, 0)`;
        });
        story[l].classList.remove("active");
        story[j].classList.add("active");

        if (story[j].classList.contains("active")) {
          storyActive[j].style.display = "flex";
          storyActive2[j].style.display = "flex";
          storyActive3[j].style.opacity = "0";
          storyActive[l].style.display = "none";
          storyActive2[l].style.display = "none";
          storyActive3[l].style.opacity = "1";
        }
      }
    });
  });

  useEffect(() => {});

  return (
    <Stories>
      <div className="logo">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/instagram-logo-branca.png"}
            alt="INSTAGRAM"
          />
        </Link>
      </div>

      <div className="story">
        <div className="story-button">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="story-button2">
          <i className="ri-arrow-left-s-line"></i>
        </div>

        <StoryContent
          name={"_giga"}
          img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          time={"1 h"}
          storyImg={process.env.PUBLIC_URL + "/images/giga-story.jpg"}
        ></StoryContent>

        <StoryContent
          name={"_giga"}
          img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          time={"1 h"}
          storyImg={process.env.PUBLIC_URL + "/images/true-hero-story.jpg"}
        ></StoryContent>

        <StoryContent
          name={"_giga"}
          img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          time={"1 h"}
          storyImg={process.env.PUBLIC_URL + "/images/giga-story.jpg"}
        ></StoryContent>

        <StoryContent
          name={"gigawoman"}
          img={process.env.PUBLIC_URL + "/images/woman-pic.jpg"}
          time={"12 h"}
          storyImg={process.env.PUBLIC_URL + "/images/01-woman.jpeg"}
        ></StoryContent>

        <StoryContent
          name={"truehero"}
          img={process.env.PUBLIC_URL + "/images/true-hero.jpg"}
          time={"13 h"}
          storyImg={process.env.PUBLIC_URL + "/images/true-hero-story.jpg"}
        ></StoryContent>

        <StoryContent
          name={"chadliator"}
          img={process.env.PUBLIC_URL + "/images/chadliator.jpg"}
          time={"15 h"}
          storyImg={process.env.PUBLIC_URL + "/images/chadliator2.jpg"}
        ></StoryContent>

        <StoryContent
          name={"not.king"}
          img={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          time={"16 h"}
          storyImg={process.env.PUBLIC_URL + "/images/notking.png"}
        ></StoryContent>

        <StoryContent
          name={"d.3nise"}
          img={process.env.PUBLIC_URL + "/images/woman-pic2.jpg"}
          time={"22 h"}
          storyImg={process.env.PUBLIC_URL + "/images/denise.jpg"}
        ></StoryContent>
      </div>
      <div className="close">
        <Link to="/">
          <i className="ri-close-fill"></i>
        </Link>
      </div>
    </Stories>
  );
}
