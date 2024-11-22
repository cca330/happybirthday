// present.js
const presentBox = document.getElementById("present");
const card = document.getElementById("card");
const nametag = document.getElementById("nametag");

// Hiển thị tên trên hộp quà
nametag.textContent = "Nguyên";

// Lắng nghe sự kiện click để mở hộp
presentBox.addEventListener("click", () => {
  presentBox.classList.add("open");
  setTimeout(() => {
    card.style.display = "block";
    card.classList.add("show-card");
  }, 1000); // Đợi 1 giây để hộp quà mở xong
});

// Hiệu ứng khi mở hộp quà
presentBox.classList.add("closed");

setTimeout(() => {
  presentBox.classList.remove("closed");
}, 2000);
