import { theme1, theme2, theme3 } from "./themes.js";

export function changeTheme(count) {
  if (count % 3 === 0) {
    theme3();
  } else if (count % 3 === 1) {
    theme1();
  } else {
    theme2();
  }
}
