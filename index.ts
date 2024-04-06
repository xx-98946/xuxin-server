import { Hono } from 'hono';
// import cors from "npm:cors";
import { cors } from "hono/middleware.ts"
import api from "@/api.ts";

const app = new Hono()
app.use(cors())
app.route("/api", api)
app.get("/*", c => c.text("404 未定义的路由"))
Deno.serve(app.fetch)