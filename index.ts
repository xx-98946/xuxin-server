import { Hono } from 'hono';
// import cors from "npm:cors";
import { cors } from "hono/middleware.ts"

import linkList from "@/linkList/index.ts";

const app = new Hono()
app.use(cors())
app.route("/linkList", linkList);
app.get("/*", c => c.text("404 未定义的路由"))
Deno.serve(app.fetch)