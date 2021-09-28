import Calculator from "./Calculator.js";

class PromptForm {
  constructor(weights) {
    this.weights = weights;
    this.container = document.createElement("form");
    this.container.classList.add("prompt-form", "material-dark");
    document.body.append(this.container);

    this.addComponent.header();

    this.addComponent.courseList();
  }

  getCourseList = () => {
    return Object.keys(this.weights);
  };

  addComponent = {
    courseList: () => {
      let container = document.createElement("div");
      container.classList.add("hover-list");
      let ul = document.createElement("ul");

      for (const course of this.getCourseList()) {
        let a = document.createElement("a");
        a.classList.add("material-dark");

        for (const [cssClass, innerText] of Object.entries({
          name: course,
          tooltip: "CALCULATE",
        })) {
          let inner = document.createElement("div");
          inner.classList.add(cssClass);
          inner.innerHTML = innerText;
          a.appendChild(inner);
        } // placeholder button text
        let li = document.createElement("li");
        li.appendChild(a);
        ul.appendChild(li);

        li.addEventListener("click", (e) => {
          const target = e.target;
          const courseChoice =
            target.parentElement.parentElement.querySelector(
              "div.name"
            ).innerHTML;
          const calc = new Calculator(courseChoice, this.weights[courseChoice]);
        });
      }
      container.appendChild(ul);
      this.container.appendChild(container);
    },

    header: () => {
      let h1 = document.createElement("h1");
      h1.innerHTML = "Choose Course";
      this.container.appendChild(h1);
    },
  };
}

export default PromptForm;
