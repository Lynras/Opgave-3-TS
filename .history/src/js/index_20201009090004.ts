// let Selector: HTMLSelectElement = <HTMLSelectElement>(
//   document.getElementById("Selector")
// );
// let element: HTMLDivElement = <HTMLDivElement>(
//   document.getElementById("content")
// );
// let Manipulate: HTMLButtonElement = <HTMLButtonElement>(
//   document.getElementById("Manipulate")
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
//       return input.toUpperCase();
//     }

//     case 1: {
//       return input.toLowerCase();
//     }

//     default: {
//       return input;
//     }
//   }
// }

new Vue({
  el: "#app",
  data: {
    input: "",
    selected: "Upper Case",
    content: "",
  },

  methods: {
    manipulateString() {
      console.log("Change case for the text");
      if (this.selected == "Upper Case") {
        this.content = this.Input.toUpperCase();
      } else if (this.selected == "Lower Case") {
        this.content = this.input.toLowerCase();
      }
    },
  },
});
