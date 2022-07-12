import styled from "styled-components";
import React from "react";
import { Story } from "./story-container";
import { FeedPost } from "./feed-post";
import { Suggestions } from "./suggestions";
import { useEffect } from "react";

export function Main() {
  const Main = styled.main`
    position: relative;
    top: 55px;
    z-index: -9;
    width: 841px;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-areas: "a b";
    flex-direction: row;

    section {
      width: 470px;
      height: 100%;
      grid-area: a;
      overflow-y: auto;
    }

    aside {
      margin: 40px 30px;
      max-width: 310px;
      width: 100%;
      max-height: 500px;
      grid-area: b;
      position: fixed;
      left: 54%;
    }

    .space-between {
      display: flex;
      justify-content: space-between;
    }

    .suggestions .space-between {
      padding-bottom: 10px;
    }

    .suggestions .space-between p {
      font-weight: 600;
      font-size: 14px;
      color: #8e8e8e;
    }

    .suggestions .space-between a {
      font-size: 12px;
      font-weight: 600;
      color: #262626;
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

    .profile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .profile .profile-pic {
      display: flex;
      max-width: 300px;
      width: 100%;
    }

    .profile .profile-username {
      width: 100%;
      max-width: 110px;
      text-align: left;
      margin: auto 0;
    }

    .profile-username a,
    .likes h3 {
      font-size: 14px;
      font-weight: 600;
    }

    .likes h3 {
      margin: 5px 0 10px 0;
    }
    .profile-username p {
      font-size: 14px;
      width: 100%;
      color: #8e8e8e;
    }

    .profile .profile-pic img {
      margin-right: 20px;
    }

    .change {
      font-weight: 600;
      color: #0095f6;
      font-size: 12px;
      cursor: pointer;
    }

    .footer,
    .footer-about a {
      font-weight: 600;
      font-size: 12px;
      color: #c7c7c7;
      font-weight: 500;
    }

    .footer-about {
      margin: 30px 0 25px 0;
    }

    .footer ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    i,
    p {
      cursor: pointer;
    }
  `;

  useEffect(() => {
    let title = document.querySelector("title");
    title.textContent = "Instagram";
  }, []);
  return (
    <Main id="index-body">
      <section>
        <Story></Story>
        <FeedPost
          profileImg={process.env.PUBLIC_URL + "/images/true-hero.jpg"}
          name={"truehero"}
          postContent={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          description={"Can you feel my heart?"}
          likes={"25,243"}
          comments={"324"}
          time={"2"}
        ></FeedPost>

        <FeedPost
          profileImg={process.env.PUBLIC_URL + "/images/motoworld.jpg"}
          name={"motorcycleworld"}
          videoContent={process.env.PUBLIC_URL + "/images/02-bike.mp4"}
          description={"Sound test🔥🔥"}
          likes={"5,243"}
          comments={"121"}
          time={"7"}
        ></FeedPost>

        <FeedPost
          profileImg={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          name={"realgigachad"}
          id={"post2"}
          postContent={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          postContent2={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          videoContent={process.env.PUBLIC_URL + "/images/easteregg.mp4"}
          description={"chad"}
          showButtons={"show"}
          likes={"252,243"}
          comments={"3242"}
          time={"12"}
        ></FeedPost>
      </section>
      <aside>
        <div class="profile">
          <div class="profile-pic">
            <img
              src={process.env.PUBLIC_URL + "/images/my-profile-pic.jpeg"}
              alt="GC"
            />
            <div class="profile-username">
              <a href="profile.html">realgigachad</a>
              <p>Giga Berlin Chad</p>
            </div>
          </div>

          <div class="change">Mudar</div>
        </div>
        <div class="suggestions">
          <div class="space-between">
            <strong>
              <p>Sugestões para você</p>
            </strong>
            <a href="#">Ver tudo</a>
          </div>
          <Suggestions
            name={"realgigachad2"}
            img={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
          ></Suggestions>

          <Suggestions
            name={"notjiping"}
            img={process.env.PUBLIC_URL + "/images/chinad.jpg"}
          ></Suggestions>

          <Suggestions
            name={"steam_leader"}
            img={process.env.PUBLIC_URL + "/images/Screenshot_1.jpg"}
          ></Suggestions>

          <Suggestions
            name={"mega1woman"}
            img={process.env.PUBLIC_URL + "/images/woman-pic.jpg"}
          ></Suggestions>

          <Suggestions
            name={"realgigachad4"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Suggestions>
        </div>
        <div class="footer">
          <div class="footer-about">
            <a href="#">Sobre</a>
            <a href="#">•Ajuda</a>
            <a href="#">•Imprensa</a>
            <a href="#">•API</a>
            <a href="#">•Carreiras</a>
            <a href="#">•Privacidade•</a> <br />
            <a href="#">Termos</a>
            <a href="#">•Localizações</a>
            <a href="#">•Idioma</a>
          </div>
          <span>© 2022 INSTAGRAM FROM META</span>
        </div>
      </aside>
    </Main>
  );
}
