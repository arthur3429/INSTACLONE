import styled from "styled-components";
import React, { useEffect } from "react";
import { Ddmessage } from "./dd-message";

export function Direct() {
  const Direct = styled.main`
  position: relative;
  top: 70px;
  display: flex;
  background-color: white;
  max-height: calc(100vh - 80px);
  overflow: hidden;
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  z-index: -1;
}

.messages {
  max-width: 350px;
  width: 100%;
}

.line1,
.line2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
}

.line1 .div a,
.line2 a {
  display: flex;
  align-items: center;
  text-align: center;
}

.line1 {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.line2 {
  margin: 0;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-bottom: none;
  padding: 0;
}

.line2 .div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.line2 .div:nth-child(3) a {
  color: #0095f6 !important;
  font-weight: 400;
}

.line2 a {
  color: #383838;
  font-weight: 300;
  height: 72px;
}

.dd-active a {
  color: #262626 !important;
  font-weight: 500 !important;
}

.dd-active {
  border-bottom: 1px solid black !important;
}

.line1 i {
  font-size: 27px;
}

i {
  cursor: pointer;
  color: #262626;
}

.direct-box {
  height: 80vh;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
}

.chat {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chat h3 {
  font-weight: 300;
  font-size: 22px;
  margin: 10px;
  color: #262626;
}

.chat p {
  font-size: 14px;
  color: #8e8e8e;
  margin-top: -3px;
}

.chat button {
  color: #fff;
  background-color: #0095f6;
  padding: 5px 9px;
  font-weight: 600;
  border: none;
  margin-top: 20px;
  border-radius: 3px;
}

.chat span {
  font-size: 12px;
  color: #8e8e8e;
  padding: 25px 0;
}

.chat .profile-direct {
  margin-bottom: auto;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 62px !important;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
}

.chat .profile-direct .direct-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chat .profile-direct .direct-info img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin: 0 15px 0 25px;
}

.dd-image {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 10px;
}

.direct-icons {
  font-size: 28px;
  margin-right: 25px;
  display: flex;
}

.direct-icons i {
  margin: 0 2px;
}

.chat-received {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.chat-received p {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: fit-content;
  padding: 10px 25px;
  margin: 0 7px;
  color: #262626;
  border-radius: 20px;
}

.chat-sent {
  width: 100%;
  text-align: right;
}

.chat-sent p {
  margin-left: auto;
  margin-right: 7px;

  width: fit-content;
  padding: 10px 25px;
  background-color: rgb(238, 238, 238);
  color: #262626;
  border-radius: 20px;
}

.x2b2 {
  margin-right: auto;
  margin-left: 25px;
  margin-bottom: -5px;
  border-left: 3px solid rgb(219, 219, 219);
  padding: 10px !important;
}

.chat .comment {
  margin: 20px;
  width: 96%;
  border-radius: 50px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat .comment .direct-icons {
  margin-right: 0;
}

.comment-input {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 24px;
}

.direct-info a {
  font-weight: 500;
  color: #262626;
}

.comment-input input {
  width: 80%;
  margin-left: 5px;
  border: none;
}

#open-chat {
  display: none;
  opacity: 0;
}

`;

  useEffect(() => {
    let title = document.querySelector("title");
    title.textContent = "Caixa de Entrada • Bate-papo";

    let profileDirect = document.querySelectorAll("div.profile-direct");

    Array.from(profileDirect).forEach((element) => {
      let msgDiv = document.querySelector("#initial-chat");
      let openChat = document.querySelector("#open-chat");
      element.addEventListener("click", () => {
        element.lastElementChild.lastElementChild.style.fontWeight = "400";
        element.lastElementChild.lastElementChild.style.color = "#8e8e8e";
        msgDiv.style.display = "none";
        openChat.style.display = "flex";
        setInterval(() => {
          openChat.classList.add("animate");
        });
      });
      openChat.classList.remove("animate");
    });
  }, []);

  return (
    <Direct id="direct-main">
      <div className="messages">
        <div className="line1">
          <div className="div"></div>
          <div className="div">
            <a href="profile.html">
              realgigachad <i className="ri-arrow-down-s-line"></i>
            </a>
          </div>
          <div className="div">
            <i className="ri-edit-box-line"></i>
          </div>
        </div>
        <div className="line2">
          <div className="div dd-active">
            <a href="#">PRINCIPAL</a>
          </div>
          <div className="div">
            <a href="#">GERAL</a>
          </div>
          <div className="div">
            <a href="#">
              SOLICITAÇÕES <br />
              (41)
            </a>
          </div>
        </div>
        <div className="direct-box" id="dd-principal">
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
          <Ddmessage
            name={"Gigachad"}
            time={"45 min"}
            img={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
          ></Ddmessage>
        </div>
      </div>

      {/* Parte inicial do chat */}
      <div className="chat" id="initial-chat">
        <img
          src={process.env.PUBLIC_URL + "/images/direct symbol.jpg"}
          alt=""
        />
        <h3>Suas mensagens</h3>
        <p>Envie fotos e mensagens privadas para um amigo ou grupo.</p>
        <button>Enviar mensagem</button>
      </div>

      {/* Futuro Componente de conversa */}
      <div className="chat" id="open-chat">
        <div className="profile-direct">
          <div className="direct-info">
            <img
              src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
              alt=""
            />
            <a href="#">Gigachad</a>
          </div>
          <div className="direct-icons">
            <i className="ri-phone-line"></i>
            <i className="ri-vidicon-line"></i>
            <i className="ri-information-line"></i>
          </div>
        </div>
        <span>Há 3 horas</span>
        <div className="chat-received">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
            alt=""
            className="dd-image"
          />
          <p>Can you hear the silence?</p>
        </div>
        <div className="chat-sent">
          <p>Can you see the dark?</p>
        </div>
        <div className="chat-received">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
            alt=""
            className="dd-image"
          />
          <p>Can you fix the broken?</p>
        </div>
        <div className="chat-sent">
          <p>Can you feel, can you feel my heart? &#129315;</p>
        </div>
        <span>Há 43 minutos</span>
        <span className="x2b2">Respondeu ao seu story</span>
        <div className="chat-received">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
            alt=""
            className="dd-image"
          />
          <p>MAGNIFICENT!</p>
        </div>
        <div className="comment space-between">
          <div className="comment-input">
            <i className="ri-emotion-happy-line"></i>
            <input type="text" placeholder="Mensagem" />
          </div>
          <div className="direct-icons">
            <i className="ri-gallery-line"></i>
            <i className="ri-heart-line"></i>
          </div>
        </div>
      </div>
    </Direct>
  );
}
