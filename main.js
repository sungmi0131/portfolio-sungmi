import { menu } from "./src/js/menu.js";
// import { layout } from "./src/js/layout.js";
// import { scroll } from "./src/js/scroll.js";
import { project } from "./src/js/project.js";
import { home } from "./src/js/home.js";
import { video } from "./src/js/video.js";
import { about } from "./src/js/about.js";
import { design } from "./src/js/design.js";
import { work } from "./src/js/work.js";
import { bgcolor } from "./src/js/bgcolor.js";


window.addEventListener('load', function () {
    menu()
    // layout()
    // scroll()
    project()
    home()
    video()
    about()
    design()
    work()
    bgcolor()
})