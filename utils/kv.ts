
import { load } from "std/dotenv/mod.ts";

/**
 * 区分开发环境和部署环境
 * 部署环境不允许设置
 * @returns
 */
async function getKV() {
    const env = await load();
    if (env.MODE) {
        return Deno.openKv(
            "https://api.deno.com/databases/b9d5cd3c-af18-4bab-86b4-22dbf268db7b/connect",
        );
    }
    return Deno.openKv();
}

const kv = await getKV();
export default kv;
