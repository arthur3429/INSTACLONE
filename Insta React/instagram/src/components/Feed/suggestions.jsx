import styled from "styled-components";
import React from "react";

// import { useEffect } from "react";

export function Suggestions(props) {
  const Suggestions = styled.div`
    .suggested-accounts .profile .profile-pic img {
      height: 34px;
      width: 34px;
      padding: 1px !important;
      margin: 1px;
      background-color: white;
      margin-right: 12px !important;
    }

    .suggested-accounts .profile .profile-pic {
      align-items: center;
    }

    .suggested-accounts .profile .profile-pic .profile-username p {
      font-size: 12px;
    }
  `;

  return (
    <Suggestions>
      <div class="suggested-accounts">
        <div class="profile">
          <div class="profile-pic">
            <img src={props.img} alt="GC" />
            <div class="profile-username">
              <a href="profile.html">{props.name}</a>
              <p>Novo no instagram</p>
            </div>
          </div>
          <div class="change">Seguir</div>
        </div>
      </div>
    </Suggestions>
  );
}
