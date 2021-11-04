const window_icon = document.querySelector("#window_icon");
const start_ = document.querySelector("#start_");
window_icon.addEventListener("click", () => {
  console.log("CLICKED");

  if (start_.style.bottom == "220.1px") {
    start_.style.bottom = "-741.5px";
  } else {
    start_.style.bottom = "220.1px";
  }
});
