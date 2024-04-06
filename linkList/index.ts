import { Hono } from "hono";
import kv from "@/utils/kv.ts";
const linkList = new Hono();

interface ILinkItem {
    icon: string,
    link: string,
    category: string,
}

linkList
    .get("/", async (c) => {
        // [表名 链接] ：{数据}
        const selector = { prefix: ["link-list"] };
        const entries = kv.list<ILinkItem>(selector);
        const res = [];
        for await (const entry of entries) {
            res.push(entry);
        }
        return c.json(res);
    })


export default linkList;