const openBtn = document.querySelector(".subscribe-btn");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");

// open modal
openBtn.addEventListener("click", function () {
  modal.style.display = "grid";
});

// close modal
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modal.classList.add("close-modal-animation");
  setTimeout(() => {
    modal.style.display = "none";
    window.location.reload();
  }, 500)
}

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});


// Thank you message after subscription
form.addEventListener("submit", submitForm);
function submitForm() {
    const card = document.querySelector('.card');
    card.innerHTML = "<h1>Thank you for you subscription!</h1>"
    setTimeout(()=>{
        closeModal()
    }, 3000);
}
