// let Selector: HTMLSelectElement = <HTMLSelectElement>(
//   document.getElementById("Selector")
// );
// let element: HTMLDivElement = <HTMLDivElement>(
//   document.getElementById("content")
// );
// let Manipulate: HTMLButtonElement = <HTMLButtonElement>(
//   document.getElementById("Manipulator")
// );
// let Input: HTMLInputElement = <HTMLInputElement>(
//   document.getElementById("TekstInput")
// );

import { Vue } from "../../node_modules/vue/types/vue";

// Manipulate.addEventListener("click", function () {
//   element.innerHTML = manipulateString(Input.value);
// });

// element.innerHTML = Input.value;

// function manipulateString(input: string): string {
//   switch (Selector.selectedIndex) {
//     case 0: {
//       return input.toLowerCase();
//     }

//     case 1: {
//       return input.toUpperCase();
//     }

//     default:
//       return input;
//   }
// }

new Vue({
  el: "#app",
  data: {
    input: "",
    selected: "",
    content: "",
  },

  methods: {
    manipulateString() {
      switch (this.selected) {
        case "Upper Case":
          this.content = this.Input.toUpperCase();
          break;

        case "Lower Case":
          this.content = this.Input.toLowerCase();
          break;
      }
    },
  },
});
