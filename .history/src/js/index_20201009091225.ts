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
    selected: "",
    content: "",
  },

  methods: {
    manipulateString() {
      console.log("Change case for the text");
      if (this.selected == "Upper Case") {
        this.content = this.input.toUpperCase();
      } else if (this.selected == "Lower Case") {
        this.content = this.input.toLowerCase();
      }
    },
  },
});
