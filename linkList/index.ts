import { Hono } from "hono";
import kv from "@/utils/kv.ts";

const linkList = new Hono();

linkList.get("/", async (c) => {
    const res = await kv.get(["link-list"]);
    return c.json(res.value);
})

export default linkList;