import { Context, Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/', (c: Context) => c.text('Hello Deno!'))

Deno.serve(app.fetch)