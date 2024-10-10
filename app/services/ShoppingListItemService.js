import { sql } from "../database/database.js";

const findShoppingListIteams = async (ListId) => {
  return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${ListId}`;
};

const create = async (ListId, name) => {
  await sql`INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${ListId}, ${name})`;
};

export { create, findShoppingListIteams };
