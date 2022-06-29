import styled from "styled-components";
import { React, useEffect } from "react";

export function FeedPost(props) {
  const FeedPost = styled.div`
    background-color: #fff;

    .post,
    .post img {
      max-width: 470px;
      max-height: 470px;

      width: 100%;
      height: 100%;
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

    .likes .profile-username {
      max-width: 400px !important;
      text-align: left;
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

    .post-4-5 {
      max-height: 580px !important;
    }

    .post video {
      max-width: 470px;
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }

    .post {
      display: flex;
      overflow-x: hidden;
    }

    .boxx i:hover {
      color: rgb(142, 142, 142);
    }

    .profile-info .profile {
      padding: 10px;
      margin: 0 !important;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px 8px 0 0;
    }

    .profile-info .boxx {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-top: none;
      border-radius: 0 0 8px 8px;
    }

    .post-interactions {
      font-size: 24px;
      padding: 5px 10px;
    }

    .post-interaction-icons i {
      margin-right: 4px;
    }

    .likes {
      padding: 0 10px;
    }

    .likes .profile-username {
      display: flex;
    }

    .likes .profile-username p {
      margin-left: 10px;
      padding: 0 !important;
    }

    .likes p {
      color: #8e8e8e;
      font-size: 14px;
      padding: 6px 0;
    }

    .likes span {
      font-size: 10px;
      color: #8e8e8e;
    }

    .comment {
      padding: 10px;
      align-items: center;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      margin-top: 10px;
    }

    .comment-input {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 24px;
    }

    .comment-input input {
      width: 80%;
      margin-left: 5px;
      border: none;
    }

    .comment-input input::placeholder {
      color: #8e8e8e;
    }

    .feed-post {
      margin-bottom: 10px;
    }

    .change {
      font-weight: 600;
      color: #0095f6;
      font-size: 12px;
      cursor: pointer;
    }

    .feed-post .profile-info .profile .profile-pic .border-story {
      width: 36px;
      height: 36px;
      margin-right: 12px !important;
    }

    .suggested-accounts .profile .profile-pic img,
    .feed-post .profile-info .profile .profile-pic img {
      height: 34px;
      width: 34px;
      padding: 1px !important;
      margin: 1px;
      background-color: white;
      margin-right: 12px !important;
      border-radius: 50%;
    }

    .space-between {
      display: flex;
      justify-content: space-between;
    }

    .hide {
      display: none;
    }

    .show {
      display: block !important;
    }

    .profile-info {
      position: relative;
    }

    .story-button,
    .story-button2 {
      position: absolute;
      display: flex;
      align-items: center;
      height: 22px;
      z-index: 1;
      margin-right: -22px;
      color: #262626;
      cursor: pointer;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.103);
      font-size: 22px;
      border-radius: 50%;
      background-color: #fff;
    }

    #post-btn1 {
      top: 40%;
      right: 6%;
    }

    #post-btn2 {
      opacity: 0;
      transition: 200ms;
      top: 40%;
      left: 1%;
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

    .like {
      color: rgb(237, 73, 86);
      transition: 200ms;
    }
  `;

  useEffect(() => {
    // Slide do feed
    let i = 0;
    const btn1 = document.querySelectorAll("#post-btn1");
    Array.from(btn1).forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = document.querySelector("#img-post");
        const post = document.querySelector("#post2");
        const btn2 = document.querySelectorAll("#post-btn2");
        const width = img.offsetWidth;
        post.scrollBy({
          top: 0,
          left: width,
          behavior: "smooth",
        });
        btn2[2].style.opacity = "1";
        if (i < 2) {
          i++;
        }
      });
    });

    const btn2 = document.querySelectorAll("#post-btn2");

    btn2[2].addEventListener("click", () => {
      const img = document.querySelector("#img-post");
      const post = document.querySelector("#post2");
      const btn2 = document.querySelectorAll("#post-btn2");
      const width = img.offsetWidth;
      i--;

      post.scrollBy({
        top: 0,
        left: -width,
        behavior: "smooth",
      });
      if (i == 0) {
        btn2[2].style.opacity = "0";
      }
    });

    // Animação dos likes

    const heart1 = document.querySelectorAll("#heart1");
    Array.from(heart1).forEach((heart) => {
      heart.addEventListener("click", function () {
        if (heart.className == "ri-heart-line") {
          heart.classList.add("like");
          heart.classList.remove("ri-heart-line");
          heart.classList.add("ri-heart-fill");
        } else {
          heart.classList.remove("like");
          heart.classList.remove("ri-heart-fill");
          heart.classList.add("ri-heart-line");
        }
      });
    });

    // interação do salvar

    const save1 = document.querySelectorAll("#save1");

    Array.from(save1).forEach((save) => {
      save.addEventListener("click", () => {
        if (save.className == "ri-bookmark-line") {
          save.classList.remove("ri-bookmark-line");
          save.classList.add("ri-bookmark-fill");
        } else {
          save.classList.add("ri-bookmark-line");
          save.classList.remove("ri-bookmark-fill");
        }
      });
    });
  }, []);

  return (
    <FeedPost>
      <div class="feed-post">
        <div class="profile-info">
          <div class="profile">
            <div class="profile-pic">
              <div class="border-story">
                <img src={props.profileImg} alt="GC" />
              </div>
              <div class="profile-username">
                <a href="profile.html">{props.name}</a>
              </div>
            </div>
            <div class="options">•••</div>
          </div>
          <div class="post" id={props.id}>
            <div className={`hide ${props.showButtons}`}>
              <div class="story-button" id="post-btn1">
                <i class="ri-arrow-right-s-line"></i>
              </div>
              <div class="story-button" id="post-btn2">
                <i class="ri-arrow-left-s-line"></i>
              </div>
            </div>
            <img src={props.postContent} id="img-post" />
            <img src={props.postContent2} />
            <video src={props.videoContent} controls></video>
          </div>
          <div class="boxx">
            <div class="post-interactions space-between">
              <div class="post-interaction-icons">
                <i class="ri-heart-line" id="heart1"></i>
                <i class="ri-chat-3-line"></i>
                <i class="ri-send-plane-line"></i>
              </div>
              <i class="ri-bookmark-line" id="save1"></i>
            </div>
            <div class="likes">
              <h3>{props.likes} curtidas</h3>
              <div class="profile-username">
                <a href="profile.html">{props.name} </a>{" "}
                <p>{props.description}</p>
              </div>
              <p class="click-com">Ver todos os {props.comments} comentários</p>
              <span>HÁ {props.time} HORAS</span>
            </div>
            <div class="comment space-between">
              <div class="comment-input">
                <i class="ri-emotion-happy-line"></i>
                <input type="text" placeholder="Adicione um comentário..." />
              </div>
              <div class="change">Publicar</div>
            </div>
          </div>
        </div>
      </div>
    </FeedPost>
  );
}
