'use strict'

const Koa = require('koa')
const app = new Koa()

const PORT = 8001  // 三个项目分别为 8001,8002,8003

app.use(ctx => {
  ctx.body = {
    NODE_ENV: process.env.NODE_ENV,
    url: ctx.url,
    port: PORT,
  }
})

app.listen(PORT)