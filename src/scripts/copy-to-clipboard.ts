import * as ClipboardJS from "clipboard";

const clipboard = new ClipboardJS(".copy-iconbutton");

clipboard.on("success", function (e) {
  const oldLabel = e.trigger.innerHTML;
  e.trigger.innerHTML = `<img src="/assets/checkCircleIconGrey.svg" />`;
  window.setTimeout(function () {
    e.trigger.innerHTML = oldLabel;
  }, 2000);
  e.clearSelection();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach(function (codeBlock) {
    const container = document.createElement("div");
    container.className = "copy-code-button-wrapper";

    const copyButton = document.createElement("button");
    copyButton.className = "secondary";
    copyButton.classList.add(...["copy-iconbutton"]);
    copyButton.type = "button";
    const s = codeBlock.innerText;
    copyButton.setAttribute("data-clipboard-text", s);
    copyButton.innerHTML = `<img src="/assets/copyIcon.svg" alt="copy to clipboard" style="width:16px; height: 16px">`;
    copyButton.ariaLabel = "copy to clipoard";

    container.appendChild(copyButton);
    codeBlock.parentElement.style.position = "relative";

    codeBlock.insertAdjacentElement("beforebegin", container);
  });
});
