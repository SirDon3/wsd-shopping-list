import { serve } from "./app/deps.js";
import { configure } from "./app/deps.js";
import * as shoppingListController from "./app/controllers/shoppingListController.js";
import * as mainStatisticController from "./app/controllers/mainStatisticController.js";
import * as requestUtils from "./app/utils/requestUtils.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return await mainStatisticController.viewMain(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await shoppingListController.addList(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await shoppingListController.viewLists(request);
  } else if (
    url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST"
  ) {
    return await shoppingListController.deactivateList(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};

serve(handleRequest, { port: 7777 });
