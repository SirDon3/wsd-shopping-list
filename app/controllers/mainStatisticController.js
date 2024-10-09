import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as requestUtils from "../utils/requestUtils.js";
import * as mainStatisticService from "../services/mainStatisticService.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewMain = async (request) => {
  const data = {
    lists: await mainStatisticService.findAllShoppingLists(),
    iteams: await mainStatisticService.findAllShoppingListIteams(),
  };

  return new Response(
    await renderFile("../app/views/main.eta", data),
    responseDetails,
  );
};

export { viewMain };
