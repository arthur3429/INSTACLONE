import styled from "styled-components";
import React, { useEffect } from "react";

export function Profile() {
  const Profile = styled.main`
  position: relative;
  top: 80px;
  display: flex;
  flex-direction: column;
  width: 935px;
  z-index: -1;
}

img {
  cursor: pointer;
}

.profile-line1 {
  width: 100%;
  padding: 0 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: -10px;
}
.profile-line1 ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

.profile-line1 ul li {
  padding: 10px 0;
  color: #262626;
  font-size: 12px;
  margin: 0 30px;
}

.profile-line1 ul li:nth-child(1) {
  columns: black;
  font-weight: 500;
  border-top: 1px solid black;
}

.profile-line1 ul li i {
  margin-right: 6px;
}

.profile-line2,
.profile-line3 {
  display: flex;

  width: 100%;
}

.profile-line2 .box,
.profile-line3 .box {
  max-width: 293px;
  max-height: 293px;
}

.profile-line2 .box img,
.profile-line3 .box img {
  object-fit: cover;
}

.profile-info2 {
  display: flex;
  width: 100%;
  margin-bottom: 60px;
}

.profile-info2 img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 10px 70px;
}

.my-profile-info {
  width: 100%;
  margin-right: 70px;
}

.info-line1,
.info-line2 {
  display: flex;
  align-items: center;
  margin: 10px;
}

.info-line1 a {
  font-size: 28px;
  color: #262626;
  font-weight: 200;
}

.info-line1 button {
  color: #232323;
  font-size: 14px;
  padding: 5px 9px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 0 15px;
  font-weight: 600;
}

.info-line1 i {
  font-size: 24px;
  color: #262626;
}

.info-line2 p {
  margin-right: 30px;
  color: #262626;
  padding: 10px 0;
}

.info-line3 {
  margin: 10px;
}

.info-line3 p {
  color: #262626;
}

.info-line3 strong {
  font-weight: 600;
}

.profile-posts .box {
  margin: 9px;
}
.box img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
}

.name-complex {
  color: white;
  font-weight: 600;
  height: 100%;
  width: 100%;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  max-width: 292px;
  max-height: 292px;
  cursor: pointer;

}



.name-complex p {
  display: flex;
  align-items: center;
  margin: 10px;
}
  `;

  useEffect(() => {
    // hover da página explorar
    let trigger2 = document.querySelectorAll("div.nc-trigger");

    // Rapaz, esse código foi o mais daora de fazer !
    Array.from(trigger2).forEach((clique) => {
      clique.addEventListener("mouseenter", () => {
        let nameComplex = document.querySelectorAll(".name-complex");

        for (let i = 0; i < trigger2.length; i++) {
          if (
            nameComplex[i].parentNode.contains(clique) == true &&
            trigger2[i].parentNode.contains(clique) == true
          ) {
            nameComplex[i].style.display = "flex";
          }
        }
        clique.addEventListener("mouseleave", () => {
          for (let i = 0; i < trigger2.length; i++) {
            if (
              nameComplex[i].parentNode.contains(clique) == true &&
              trigger2[i].parentNode.contains(clique) == true
            ) {
              nameComplex[i].style.display = "none";
            }
          }
        });
      });
    });
  }, []);

  return (
    <Profile id="profile-main">
      <div class="profile-info2">
        <img
          src={process.env.PUBLIC_URL + "/images/my-profile-pic.jpeg"}
          alt=""
        />
        <div class="my-profile-info">
          <div class="info-line1">
            <a href="#">realgigachad</a>
            <button>Editar perfil</button>
            <i class="ri-settings-3-line"></i>
          </div>
          <div class="info-line2">
            <p>
              <strong>6</strong> publicações
            </p>
            <p>
              <strong>175M</strong> seguidores
            </p>
            <p>
              <strong>1,236</strong> seguindo
            </p>
          </div>
          <div class="info-line3">
            <strong>
              <p>Giga Berlin Chad</p>
            </strong>
            <p>Can you feel my heart ?</p>
          </div>
        </div>
      </div>
      <div class="profile-posts">
        <div class="profile-line1">
          <ul>
            <li>
              <i class="ri-grid-line"></i> PUBLICAÇÕES
            </li>
            <li>
              <i class="ri-bookmark-line"></i> SALVOS
            </li>
            <li>
              <i class="ri-file-user-line"></i> MARCADOS
            </li>
          </ul>
        </div>

        <div class="profile-line2">
          <div class="box nc-trigger">
            <div class="name-complex">
              <p>
                <i class="ri-heart-fill"></i>412,686
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>722
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/my-profile-pic.jpeg"}
              alt=""
            />
          </div>
          <div class="box nc-trigger">
            <div class="name-complex">
              <p>
                <i class="ri-heart-fill"></i>412,686
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>722
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
              alt=""
            />
          </div>
          <div class="box nc-trigger">
            <div class="name-complex">
              <p>
                <i class="ri-heart-fill"></i>412,686
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>722
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/true-hero.jpg"}
              alt=""
            />
          </div>
        </div>
        <div class="profile-line3">
          <div class="box nc-trigger">
            <div class="name-complex">
              <p>
                <i class="ri-heart-fill"></i>412,686
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>722
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"}
              alt=""
            />
          </div>
          <div class="box nc-trigger">
            <div class="name-complex">
              <p>
                <i class="ri-heart-fill"></i>412,686
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>722
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/my-profile-pic.jpeg"}
              alt=""
            />
          </div>
          <div class="box nc-trigger">
            <div class="name-complex">
              <p>
                <i class="ri-heart-fill"></i>412,686
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>722
              </p>
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/true-profile-pic.jpg"}
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </Profile>
  );
}
