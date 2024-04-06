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
            const { key, value } = entry
            res.push({
                key,
                ...value
            });
        }
        return c.json(res);
    })
    .delete("/:id", async (c) => {
        const id = c.req.param("id");
        await kv.delete(["link-list", id]);
        return c.json({ message: `删除${id}成功` });
    })


export default linkList;