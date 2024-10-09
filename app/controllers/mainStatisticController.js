import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewMain = async (request) => {
  //   const data = {
  //     lists: await shoppingListService.findAllActiveShoppingLists(),
  //   };

  return new Response(
    await renderFile("../app/views/main.eta"),
    responseDetails,
  );
};

export { viewMain };
