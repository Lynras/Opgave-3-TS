let Selector: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("Selector")
);
let element: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("content")
);
let Manipulate: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("Manipulator")
);
let Input: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("TekstInput")
);

Manipulate.addEventListener("", function () {
  element.innerHTML = manipulateString(Input.value);
});

element.innerHTML = Input.value;

function manipulateString(input: string): string {
  switch (Selector.selectedIndex) {
    case 0: {
      return input.toLowerCase();
    }

    case 1: {
      return input.toUpperCase();
    }

    default:
      return input;
  }
}

// import { Vue } from "../../node_modules/vue/types/vue";
// new Vue({
//   el: "#app",
//   data: {
//     input: "",
//     selected: "",
//     result: "",
//   },
//   methods: {
//     ChangeCase() {
//       switch (this.selected) {
//         case "Lower Case":
//           this.result = this.input.toLowerCase();
//           break;

//         case "Upper Case":
//           this.result = this.input.toUpperCase();
//           break;
//       }
//       this.result = "";
//     },
//   },
// });
