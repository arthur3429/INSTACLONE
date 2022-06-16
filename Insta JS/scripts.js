function feed() {
  // Interações com o FEED (index.html)

  // Slide do story, animação e aparição dos botões

  const slide = document.querySelector(".story-button");

  slide.addEventListener("click", () => {
    const story = document.querySelector(".story");
    const slide2 = document.querySelector(".story-button2");
    story.scrollBy({ top: 0, left: 320, behavior: "smooth" });
    slide2.classList.add("animate");
    slide2.addEventListener("click", () => {
      story.scrollBy({ top: 0, left: -320, behavior: "smooth" });
      slide2.classList.remove("animate");
    });
  });

  // Slide do feed

  const btn1 = document.querySelector("#post-btn1");

  btn1.addEventListener("click", () => {
    const img = document.querySelector("#img-post");
    const post = document.querySelector("#post2");
    const btn2 = document.querySelector("#post-btn2");
    const width = img.offsetWidth;

    post.scrollBy({
      top: 0,
      left: width,
      behavior: "smooth",
    });

    btn2.style.opacity = "1";
  });

  const btn2 = document.querySelector("#post-btn2");

  btn2.addEventListener("click", () => {
    const img = document.querySelector("#img-post");
    const post = document.querySelector("#post2");
    const btn2 = document.querySelector("#post-btn2");
    const width = img.offsetWidth;

    post.scrollBy({
      top: 0,
      left: -width,
      behavior: "smooth",
    });

    btn2.style.opacity = "0";
  });

  // Animação dos likes

  const heart1 = document.querySelector("#heart1");
  heart1.addEventListener("click", function () {
    if (heart1.className == "ri-heart-line") {
      heart1.classList.add("like");
      heart1.classList.remove("ri-heart-line");
      heart1.classList.add("ri-heart-fill");
    } else {
      heart1.classList.remove("like");
      heart1.classList.remove("ri-heart-fill");
      heart1.classList.add("ri-heart-line");
    }
  });

  const heart2 = document.querySelector("#heart2");
  heart2.addEventListener("click", function () {
    if (heart2.className == "ri-heart-line") {
      heart2.classList.add("like");
      heart2.classList.remove("ri-heart-line");
      heart2.classList.add("ri-heart-fill");
    } else {
      heart2.classList.remove("like");
      heart2.classList.remove("ri-heart-fill");
      heart2.classList.add("ri-heart-line");
    }
  });

  const heart3 = document.querySelector("#heart3");
  heart3.addEventListener("click", function () {
    if (heart3.className == "ri-heart-line") {
      heart3.classList.add("like");
      heart3.classList.remove("ri-heart-line");
      heart3.classList.add("ri-heart-fill");
    } else {
      heart3.classList.remove("like");
      heart3.classList.remove("ri-heart-fill");
      heart3.classList.add("ri-heart-line");
    }
  });

  // interação do salvar

  const save1 = document.querySelector("#save1");

  save1.addEventListener("click", () => {
    if (save1.className == "ri-bookmark-line") {
      save1.classList.remove("ri-bookmark-line");
      save1.classList.add("ri-bookmark-fill");
    } else {
      save1.classList.add("ri-bookmark-line");
      save1.classList.remove("ri-bookmark-fill");
    }
  });

  const save2 = document.querySelector("#save2");

  save2.addEventListener("click", () => {
    if (save2.className == "ri-bookmark-line") {
      save2.classList.remove("ri-bookmark-line");
      save2.classList.add("ri-bookmark-fill");
    } else {
      save2.classList.add("ri-bookmark-line");
      save2.classList.remove("ri-bookmark-fill");
    }
  });

  const save3 = document.querySelector("#save3");

  save3.addEventListener("click", () => {
    if (save3.className == "ri-bookmark-line") {
      save3.classList.remove("ri-bookmark-line");
      save3.classList.add("ri-bookmark-fill");
    } else {
      save3.classList.add("ri-bookmark-line");
      save3.classList.remove("ri-bookmark-fill");
    }
  });

  // Exibir comentários
  let clickCom = document.querySelectorAll("p.click-com");

  Array.from(clickCom).forEach((clique) => {
    clique.addEventListener("click", () => {
      let sectionComments = document.querySelector(".section-comments");
      let commentsContainer = document.querySelector(".comments-container");
      sectionComments.style.display = "flex";
      setInterval(() => {
        commentsContainer.classList.add("fadein"), 0;
      });

      let closeBtn = document.querySelector("#close-btn");
      closeBtn.addEventListener("click", () => {
        sectionComments.style.display = "none";
      });
      commentsContainer.classList.remove("fadein");
    });
  });
}

function explorer() {
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
          // if (nameComplex[i].style.display == "flex") {
          //   nameComplex[i].style.display = "none";
          // } else {
          //   nameComplex[i].style.display = "flex";
          // }
        }
      }
      clique.addEventListener("mouseleave", () => {
        for (let i = 0; i < trigger2.length; i++) {
          if (
            nameComplex[i].parentNode.contains(clique) == true &&
            trigger2[i].parentNode.contains(clique) == true
          ) {
            nameComplex[i].style.display = "none";
            // if (nameComplex[i].style.display == "flex") {
            //   nameComplex[i].style.display = "none";
            // } else {
            //   nameComplex[i].style.display = "flex";
            // }
          }
        }
      });
    });
  });
}

// Interações do direct.html

function direct() {
  let profileDirect = document.querySelectorAll("div.profile-direct");
  console.log(profileDirect);
  console.log(profileDirect.children);

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
}
