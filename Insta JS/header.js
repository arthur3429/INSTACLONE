// Variável que introduz dinamicamente um elemento universal dentro do header de cada página

var header = `
<div class="header">
<div class="logo">
  <a href="index.html"><img src="img/instagram-logo-1.png" alt="Instagram" /></a>
</div>

<div class="search-bar">
  <span id="fake-span"><i class="ri-search-line"></i> Pesquisar</span>
  <input type="search" name="" id="search-input" placeholder="Pesquisar" autocomplete="off"/>
  <div class="triangle"></div>
</div>
<div class="profile-container">
  <ul>
    <li>
      <a href="index.html" id="homeIcon"
        ><svg
        aria-label="Página inicial"
        class="_ab6-"
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
      </a>
     
    </li>

    <li>
      <a href="direct.html" id="directIcon"><svg
      aria-label="Messenger"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="1.739"
      ></path>
      <path
        d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
        fill-rule="evenodd"
      ></path>
    </svg></a>
    </li>

    <li>
    <a href="#" id="addPostIcon">
      <svg
      aria-label="Nova publicação"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
        >
      <path
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="6.545"
        x2="17.455"
        y1="12.001"
        y2="12.001"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="12.003"
        x2="12.003"
        y1="6.545"
        y2="17.455"
      ></line>
        </svg>
    </a>
    </li>
    
    <li>
      <a href="explorer.html" id="explorerIcon"><svg
      aria-label="Encontrar pessoas"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
      <polygon
        fill-rule="evenodd"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      ></polygon>
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></circle>
    </svg></a>
    </li>

    <li>
    <a href="#" id="likesIcon">
      <svg
      aria-label="Feed de atividades"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
        >
      <path
        d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
      ></path>
        </svg>
    </a>

      <div class="likes-div">
      
      <div class="profiles-roll">
        <h3>Hoje</h3>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
        <div class="profile">
          <div class="profile-pic">
            <img src="img/true-profile-pic.jpg" alt="GC" />
            <div class="profile-username">
              <p> <a href="profile.html">realgigachad</a> <a href="#">_chad98</a>  e outras pessoas curtiram recentemente a sua publicação. <span>1 min</span></p> 
            </div>
          </div>
          <div class="options"><img src="img/true-profile-pic.jpg" alt=""></div>
        </div>
      </div>
    </div>
    </li>
    <li><img src="img/my-profile-pic.jpeg" alt="GC" id="profile-menu" />
      <div class="profile-ul">
        <div class="li"><a href="profile.html"><i class="ri-map-pin-user-line"></i> Perfil</a></div>
        <div class="li"><a href="#"><i class="ri-bookmark-line"></i> Salvos</a></div>
        <div class="li"><a href="#"><i class="ri-settings-4-line"></i> Configurações</a></div>
        <div class="li"><a href="#"><i class="ri-arrow-left-right-fill"></i> Trocar de conta</a></div>
        <hr>
        <div class="li"> <a href="#"> Sair</a></div>
      </div>
    </li>

</div>
</div>
<div class="search-box">
<div class="search-div">
  <strong>Recentes</strong> <br />
  <div class="center"><span>Nenhuma pesquisa recente.</span></div>
</div>
</div>

<div class="post-container">
      <div class="overlay1"></div>
      <div id="container">
        <div class="create">Criar nova publicação</div>
        <div class="create-post center">
          <img src="img/Screenshot_1-removebg-preview.png" alt="img" />
          <h2>Arraste as fotos e os vídeos aqui</h2>
          <button>Selecionar do computador</button>
        </div>
      </div>
</div>


`;

// Função que introduz o header e suas funções dentro de cada página

function script() {
  // Definir a cor do icone da pagina atual do header

  let innerHeader = document.querySelector("header");

  innerHeader.innerHTML = header;

  let body = document.querySelector("body");
  if (body.id == "index-body") {
    let homeIcon = document.querySelector("#homeIcon");
    homeIcon.innerHTML = `<svg
    aria-label="Página inicial"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"
    ></path>
  </svg>`;
  } else if (body.id == "direct-body") {
    let directIcon = document.querySelector("#directIcon");
    directIcon.innerHTML = `<svg
    aria-label="Messenger"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M12.003 1.131a10.487 10.487 0 00-10.87 10.57 10.194 10.194 0 003.412 7.771l.054 1.78a1.67 1.67 0 002.342 1.476l1.935-.872a11.767 11.767 0 003.127.416 10.488 10.488 0 0010.87-10.57 10.487 10.487 0 00-10.87-10.57zm5.786 9.001l-2.566 3.983a1.577 1.577 0 01-2.278.42l-2.452-1.84a.63.63 0 00-.759.002l-2.556 2.049a.659.659 0 01-.96-.874L8.783 9.89a1.576 1.576 0 012.277-.42l2.453 1.84a.63.63 0 00.758-.003l2.556-2.05a.659.659 0 01.961.874z"
    ></path>
  </svg>`;
  } else if (body.id == "explorer-body") {
    let explorerBody = document.querySelector("#explorerIcon");
    explorerBody.innerHTML = `<svg
    aria-label="Encontrar pessoas"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M13.173 13.164l1.491-3.829-3.83 1.49zM12.001.5a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012.001.5zm5.35 7.443l-2.478 6.369a1 1 0 01-.57.569l-6.36 2.47a1 1 0 01-1.294-1.294l2.48-6.369a1 1 0 01.57-.569l6.359-2.47a1 1 0 011.294 1.294z"
    ></path>
  </svg>`;
  }

  // Exibição de divs e alteração dos ícones de adicionar post, curtidas e perfil no header

  // Div POST

  let addPostIcon = document.querySelector("#addPostIcon");

  addPostIcon.addEventListener("click", () => {
    let inativeIcon = addPostIcon.innerHTML;
    let postContainer = document.querySelector(".post-container");
    let titleTag = document.querySelector("title");
    var previousTitle = titleTag.textContent;
    titleTag.innerText = "Criar nova publicação • Instagram";

    addPostIcon.innerHTML = `<svg
      aria-label="Nova publicação"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M12.003 5.545l-.117.006-.112.02a1 1 0 00-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 00-.877.876L5.545 12l.007.117a1 1 0 00.877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 00.876.877l.117.007.117-.007a1 1 0 00.876-.877l.007-.116V13h4.452l.116-.007a1 1 0 00.877-.876l.007-.117-.007-.117a1 1 0 00-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 00-.876-.877zM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1z"
      ></path>
    </svg>
    `;

    postContainer.style.display = "flex";

    document
      .querySelector(".overlay1")
      .addEventListener("click", function show() {
        postContainer.style.display = "none";
        addPostIcon.innerHTML = inativeIcon;
        titleTag.innerText = previousTitle;
      });

    if (postContainer.style.display == "flex") {
      const container = document.querySelector("#container");
      setInterval(() => {
        container.classList.add("fadein"), 0;
      });
    }
    const container = document.querySelector("#container");
    container.classList.remove("fadein");
  });

  // Div LIKES

  let showRecentLikes = document.querySelector("#likesIcon");

  showRecentLikes.addEventListener("click", () => {
    let likeDiv = document.querySelector(".likes-div");
    showRecentLikes.innerHTML = `<svg
    aria-label="Feed de atividades"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 48 48"
    width="24"
  >
    <path
      d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
    ></path>
  </svg>
  `;
    if (likeDiv.style.display == "flex") {
      likeDiv.style.display = "none";
      showRecentLikes.innerHTML = `<svg
      aria-label="Feed de atividades"
      class="_ab6-"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
      ></path>
    </svg>`;
    } else {
      likeDiv.style.display = "flex";
      setInterval(() => {
        likeDiv.classList.add("animate"), 0;
      });
    }

    likeDiv.classList.remove("animate");
  });

  // Div profile

  let showProfileMenu = document.querySelector("#profile-menu");

  showProfileMenu.addEventListener("click", () => {
    let profileDiv = document.querySelector(".profile-ul");
    showProfileMenu.style.border = "1px solid black";
    if (profileDiv.style.display == "none" || profileDiv.style.display == "") {
      profileDiv.style.display = "flex";
      setInterval(() => {
        profileDiv.classList.add("animate"), 0;
      });
    } else {
      profileDiv.style.display = "none";
      showProfileMenu.style.border = "none";
    }
    profileDiv.classList.remove("animate");
  });

  // Exibir div das pesquisas recentes

  var fakeSpan = document.querySelector("#fake-span");
  var searchInput = document.querySelector("#search-input");

  fakeSpan.addEventListener("click", () => {
    fakeSpan.style.display = "none";
    searchInput.focus();
  });

  let triangle = document.querySelector(".triangle");
  let searchBox = document.querySelector(".search-box");

  searchInput.addEventListener("focus", function () {
    triangle.style.display = "block";
    searchBox.style.display = "block";
  });

  searchInput.addEventListener("focusout", () => {
    fakeSpan.style.display = "block";
    triangle.style.display = "none";
    searchBox.style.display = "none";
  });

  //
}
