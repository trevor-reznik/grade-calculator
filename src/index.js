/**
 *
 */

import weights from "./data/class-weights/weights.js";
import PromptForm from "./PromptForm.js";
import AlternateHover from "./AlternateHover.js";
import Calculator from "./Calculator.js";


window.addEventListener("load", () => {
  // const calc = new Calculator();
  const prompt = new PromptForm(weights);
    const hoverEffect = new AlternateHover();
});
