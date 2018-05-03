import { ShoppingController } from "./controllers/ShoppingController";

let controller = new ShoppingController();
$('.form').submit(controller.add.bind(controller));
$('#clear').click(controller.clear.bind(controller));