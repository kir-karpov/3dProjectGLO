import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import validationForms from "./modules/validationForms";
import validationEmail from "./modules/validationEmail";
import validationPhone from "./modules/validationPhone";

validationForms();
validationPhone();
validationEmail();
modal();
calculator();
timer("5 june 2023");
menu();