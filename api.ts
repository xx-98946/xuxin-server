import { Hono } from 'hono';

import linkList from "@/linkList/index.ts";

const api = new Hono();
api.route("/linkList", linkList);
export default api;