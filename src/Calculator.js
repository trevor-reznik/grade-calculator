export default class Calculator {
  constructor(className, weights, options) {
    this.weights = weights;
    this.course = className;

    document.querySelector("form").remove();
    this.main = document.createElement("form");
    this.main.classList.add("calculator-form", "material-dark");
    document.body.appendChild(this.main);

    this.addComponent.header();
    this.createInputs();
    this.addComponent.submitBtn();

    this.resultField = this.addComponent.resultDisplay();
  }

  createInputs = () => {
    for (const course of Object.keys(this.weights)) {
      this.addComponent.input(course);
    }
  };

  readInputs = () => {};

  calculateGrade = () => {
    const formData = new FormData(document.querySelector("form"));
    let grade;
    const possiblePoints = Object.values(this.weights).reduce(
      (prev, cur) => prev + cur,
      0
    );

    let pool = 0;

    for (const [name, gradeInput] of formData.entries()) {
      const thisWeight = this.weights[name];
      let percentWeight = thisWeight / possiblePoints;

      pool += parseFloat(gradeInput) * percentWeight;
    }

    this.resultField.innerHTML = `GRADE: ${pool}%`;
  };

  addComponent = {
    input: (name) => {
      let inputEl = document.createElement("input");
      inputEl.setAttribute("name", name);
      inputEl.setAttribute("id", name);

      let label = document.createElement("label");
      label.setAttribute("for", name);
      label.innerHTML = name.toUpperCase();

      this.main.appendChild(label);
      label.classList.add("material-dark");

      this.main.appendChild(inputEl);
    },

    header: () => {
      let head = document.createElement("h3");
      head.innerHTML = `${this.course.toUpperCase()} Grade Calculator`;
      this.main.appendChild(head);
    },

    submitBtn: () => {
      let btn = document.createElement("input");
      btn.setAttribute("type", "submit");
      btn.setAttribute("value", "CALCULATE");

      btn.addEventListener("click", (event) => {
        event.preventDefault();

        this.calculateGrade();
      });

      this.main.appendChild(btn);
    },

    resultDisplay: () => {
      let div = document.createElement("h4");
      div.classList.add("result-field", "material-dark");
      this.main.appendChild(div);
      return div;
    },
  };
}
