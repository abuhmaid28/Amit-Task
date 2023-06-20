const btn1 = document.getElementById("whoBtn");
const content1 = document.getElementById("content-1");
const btn2 = document.getElementById("aboutBtn");
const content2 = document.getElementById("content-2");
const btn3 = document.getElementById("howToBtn");
const content3 = document.getElementById("content-3");

btn1.addEventListener("click", toggleContent.bind(null, content1));
btn2.addEventListener("click", toggleContent.bind(null, content2));
btn3.addEventListener("click", toggleContent.bind(null, content3));

function toggleContent(content) {
  const allContents = [content1, content2, content3];

  allContents.forEach((c) => {
    if (c === content) {
      c.style.display = "flex";
    } else {
      c.style.display = "none";
    }
  });
}
