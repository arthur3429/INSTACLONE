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
      <a href="index.html"
        ><i class="ri-home-line" id="homeIcon"></i
      ></a>
     
    </li>
    <li>
      <a href="direct.html"><i class="ri-messenger-line" id="directIcon"></i></a>
    </li>
    <li>
      <i class="ri-add-box-line" id=addPostIcon></i>
    </li>
    <li>
      <a href="explorer.html"><i class="ri-compass-3-line" id="explorerIcon"></i></a>
    </li>
    <li>
      <i class="ri-heart-line" id="likesIcon"></i>
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
    homeIcon.classList.remove("ri-home-line");
    homeIcon.classList.add("ri-home-fill");
  } else if (body.id == "direct-body") {
    let directIcon = document.querySelector("#directIcon");
    directIcon.classList.remove("ri-messenger-line");
    directIcon.classList.add("ri-messenger-fill");
  } else if (body.id == "explorer-body") {
    let explorerBody = document.querySelector("#explorerIcon");
    explorerBody.classList.remove("ri-compass-line");
    explorerBody.classList.add("ri-compass-fill");
  }

  // Exibição de divs e alteração dos ícones de adicionar post, curtidas e perfil no header

  // Div POST

  let addPostIcon = document.querySelector("#addPostIcon");

  addPostIcon.addEventListener("click", () => {
    if (addPostIcon.className == "ri-add-box-line") {
      let postContainer = document.querySelector(".post-container");
      let titleTag = document.querySelector("title");
      var previousTitle = titleTag.textContent;
      titleTag.innerText = "Criar nova publicação • Instagram";
      addPostIcon.classList.remove("ri-add-box-line");
      addPostIcon.classList.add("ri-add-box-fill");
      postContainer.style.display = "flex";

      postContainer.addEventListener("click", function show() {
        postContainer.style.display = "none";
        if (addPostIcon.className == "ri-add-box-fill") {
          titleTag.innerText = previousTitle;
          addPostIcon.classList.remove("ri-add-box-fill");
          addPostIcon.classList.add("ri-add-box-line");
        }
      });

      if (postContainer.style.display == "flex") {
        const container = document.querySelector("#container");
        setInterval(() => {
          container.classList.add("fadein"), 0;
        });
      }
      const container = document.querySelector("#container");
      container.classList.remove("fadein");
    }
  });

  // Div LIKES

  let showRecentLikes = document.querySelector("#likesIcon");

  showRecentLikes.addEventListener("click", () => {
    showRecentLikes.classList.remove("ri-heart-line");
    showRecentLikes.classList.add("ri-heart-fill");
    let likeDiv = document.querySelector(".likes-div");

    if (likeDiv.style.display == "flex") {
      likeDiv.style.display = "none";
      showRecentLikes.classList.remove("ri-heart-fill");
      showRecentLikes.classList.add("ri-heart-line");
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
    if (profileDiv.style.display == "none") {
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
