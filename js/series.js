// 为系列文章的标签添加美化效果

// 11个美化图标
let icons = ["🍉", "🥭", "🍇", "🍈", "🍊", "🍍", "🍓", "🥝", "🥥", "🫐", "🍒"];
const list = document
  .querySelector(".note, .info, .no-icon, .flat")
  .querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  const item = list[i];
  const anchor = item.querySelector("a");
  // 添加美化图标
  anchor.textContent = icons[i] + anchor.textContent;
  // 添加当前位置
  if (anchor.href == window.location.href) {
    item.innerHTML = item.innerHTML + " ⬅当前位置🛬";
  }
}
