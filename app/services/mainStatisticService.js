import { sql } from "../database/database.js";

const findAllShoppingLists = async () => {
  const row = await sql`SELECT COUNT(*) AS total_lists FROM shopping_lists;`;

  return row[0].total_lists;
};

const findAllShoppingListIteams = async () => {
  const row =
    await sql`SELECT COUNT(*) AS total_lists FROM shopping_list_items;`;

  return row[0].total_lists;
};

export { findAllShoppingListIteams, findAllShoppingLists };
