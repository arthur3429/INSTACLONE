import styled from "styled-components";
import React, { useEffect } from "react";

export function Explorer() {
  const Explorer = styled.main`
    position: relative;
    display: grid;
    grid-template-areas:
      "box1 box3 box3"
      "box2 box3 box3"
      "box4 box5 box6";
    gap: 20px;
    top: 70px;
    z-index: -1;

    .box {
      aspect-ratio: 1 / 1;
      gap: 13px;
      cursor: pointer;
      object-fit: contain;
    }

    .profile-posts .box {
      margin: 9px;
    }
    .box img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
    }

    .box1 {
      grid-area: box1;
    }

    .box2 {
      grid-area: box2;
    }

    .box3 {
      grid-area: box3;
    }
    .box4 {
      grid-area: box4;
    }
    .box5 {
      grid-area: box5;
    }
    .box6 {
      grid-area: box6;
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
    }

    .name-complex-G {
      color: white;
      font-weight: 600;
      height: 100%;
      width: 100%;
      position: absolute;

      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.3);
      max-width: 604px;
      max-height: 604px;
    }

    .name-complex p,
    .name-complex-G p {
      display: flex;
      align-items: center;
      margin: 10px;
    }
  `;

  useEffect(() => {
    let title = document.querySelector("title");
    title.textContent = "Instagram";
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
    <Explorer id="explorer-main">
      <div class="box box1 nc-trigger">
        <div class="name-complex">
          <p>
            <i class="ri-heart-fill"></i>42,686
          </p>
          <p>
            <i class="ri-chat-3-fill"></i>1092
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/motoworld.jpg"} alt="" />
      </div>
      <div class="box box2 nc-trigger">
        <div class="name-complex">
          <p>
            <i class="ri-heart-fill"></i>42,626
          </p>
          <p>
            <i class="ri-chat-3-fill"></i>722
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/woman-pic.jpg"} alt="" />
      </div>
      <div class="box box3 nc-trigger">
        <div class="name-complex name-complex-G">
          <p>
            <i class="ri-heart-fill"></i>2,686
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
      <div class="box box4 nc-trigger">
        <div class="name-complex">
          <p>
            <i class="ri-heart-fill"></i>412,686
          </p>
          <p>
            <i class="ri-chat-3-fill"></i>722
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/motoworld.jpg"} alt="" />
      </div>
      <div class="box box5 nc-trigger">
        <div class="name-complex">
          <p>
            <i class="ri-heart-fill"></i>42,686
          </p>
          <p>
            <i class="ri-chat-3-fill"></i>722
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/woman-pic.jpg"} alt="" />
      </div>
      <div class="box box6 nc-trigger">
        <div class="name-complex">
          <p>
            <i class="ri-heart-fill"></i>37,686
          </p>
          <p>
            <i class="ri-chat-3-fill"></i>522
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/my-profile-pic.jpeg"}
          alt=""
        />
      </div>
    </Explorer>
  );
}
