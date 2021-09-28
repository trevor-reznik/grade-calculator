class AlternateHover {
  constructor() {
    this.colors = [
      "#EAE4E9",
      "#FFF1E6",
      "#FDE2E4",
      "#FAD2E1",
      "#E2ECE9",
      "#BEE1E6",
      "#F0EFEB",
      "#DFE7FD",
      "#CDDAFD",
    ];

    for (const color of this.colors) {
      this.createHover(color);
    }
    $("li").hover(() => {
      this.pushColor();
    });
  }

  createHover = (bg) => {
    let hoverClass = document.createElement("style");
    hoverClass.innerHTML = `.${bg.replace(
      "#",
      "hex"
    )}:hover { background: ${bg.replace("hex", "#")} !important; }`;
    document.getElementsByTagName("head")[0].appendChild(hoverClass);
  };

  pushColor = () => {
    var activeColor =
      document.getElementsByTagName("li")[0].firstElementChild.classList[1] ||
      this.colors[0];
    var nxtColor =
      this.colors.indexOf(activeColor.replace("hex", "#")) + 2 < this.colors.length
        ? this.colors[this.colors.indexOf(activeColor.replace("hex", "#")) + 1]
        : this.colors[0];
    for (const li of document.getElementsByTagName("li")) {
      var activeClass = li.firstElementChild.classList;
      if (!!activeClass) {
        activeClass.remove(activeColor.replace("#", "hex"));
      }
      activeClass.add(nxtColor.replace("#", "hex"));
    }
  };
}

export default AlternateHover;
