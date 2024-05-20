var estatus = document.querySelector("h5");
var btn = document.querySelector("#add");
check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    estatus.innerHTML = "Friend";
    estatus.style.color = "green";
    btn.innerHTML = "Remove Friend";

    check = 1;
  } else {
    estatus.innerHTML = "Stranger";
    estatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
