const tagsEl = document.getElementById("tags");
const tagsarea = document.getElementById("tagsarea");

textarea.focus(); //if a go to page , it'll automatically put the cursor in textarea

textarea.addEventListener("keyup", (ev) => {
  createTags(ev.target.value);

  if (ev.key === "Enter") {
    setTimeout(() => {
      ev.target.value = ''
    }, 10);

    randomSelect();
  }
});

function createTags(inp) {
  const tags = inp
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highLightTag(randomTag);

    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag) {
  tag.classList.add("highlight");
}

function unHighLightTag(tag) {
  tag.classList.remove("highlight");
}
