const tl = gsap.timeline();

const pet = document.querySelector(".spawnPerson");

const area = {
  minX: 30,
  maxX: 75,
  minY: 40,
  maxY: 80
};

/* ---------------------------
   🎥 開場鏡頭
---------------------------- */
tl.to(".bg", {
  x: -1000,
  y: 1000,
  duration: 1.5,
  ease: "power2.inOut"
})
.to(".bg", {
  x: 0,
  y: 1600,
  duration: 1.5,
  ease: "power2.inOut"
})
.to(".bg", {
  x: -1000,
  y: 2200,
  duration: 1.5,
  ease: "power2.inOut"
})
.to(".bg", {
  x: 0,
  y: 2800,
  duration: 1.5,
  ease: "power3.inOut"
})
.to(".bg", {
  x: -500,
  y: 1600,
  scale: 0.25,
  duration: 2,
  ease: "power3.inOut"
})

/* 背景2淡入 */
.add(() => {
  gsap.to(".bg2", {
    opacity: 1,
    duration: 2
  });
})

/* 小白人 */
.add(() => startPetMoving())

/* UI */
.to(".buttons", {
  opacity: 1,
  duration: 1
});


/* ---------------------------
   🐶 小白人移動
---------------------------- */
function startPetMoving() {
  if (!pet) return;
  pet.style.opacity = 1;
  move();
}

function move() {
  const x = area.minX + Math.random() * (area.maxX - area.minX);
  const y = area.minY + Math.random() * (area.maxY - area.minY);

  pet.style.left = x + "%";
  pet.style.top = y + "%";

  setTimeout(move, 2500);
}


/* ---------------------------
   🌐 外部連結
---------------------------- */
function goAbout() {
  window.open("https://www.instagram.com/rentrooom.zip/", "_blank");
}


/* ---------------------------
   🎬 AAA 轉場（完整版）
---------------------------- */
function goInfo() {

  const imgs = [
    "images/IMG_2931.png",
    "images/IMG_2932.png",
    "images/IMG_2933.png",
    "images/IMG_2934.png"
  ];

  const transition = document.getElementById("transition");
  const scene = document.querySelector(".scene");
  const bg = document.querySelector(".bg");

  let i = 0;

  /* 🔥 鎖畫面 */
  scene.classList.add("locked");

  /* 🔥 背景切換 */
  bg.src = "images/IMG_2518.png";

  /* 🔥 顯示轉場 */
  transition.style.opacity = 1;

  function play() {

    if (i < imgs.length) {

      transition.src = imgs[i];

      gsap.fromTo(transition,
        { scale: 0.5, rotation: -90 },
        { scale: 0.5, rotation: -90, duration: 0.25 }
      );

      i++;
      setTimeout(play, 500);

    } else {
      window.location.href = "info.html";
    }
  }

  play();
}