import styled from "styled-components";
import React from "react";

export function Ddmessage(props) {
  const Ddmessage = styled.div`
    .profile-direct {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .profile-direct img {
      height: 56px;
      width: 56px;
      border-radius: 50%;
    }

    .direct-info {
      display: flex;
      flex-direction: column;
      margin: 15px;
    }

    .direct-info a {
      font-weight: 500;
      color: #262626;
    }

    .direct-info p {
      font-weight: 500;
      color: #262626;
    }

    .direct-info span {
      color: #8e8e8e;
      font-weight: 300;
    }
  `;

  return (
    <Ddmessage>
      <div className="profile-direct">
        <img src={props.img} alt="" />
        <div className="direct-info">
          <a href="#">{props.name}</a>
          <p>
            Respondeu ao seu sto... <span>{props.time}</span>
          </p>
        </div>
      </div>
    </Ddmessage>
  );
}
