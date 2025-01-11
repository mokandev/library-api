import http, { IncomingMessage, ServerResponse } from 'http'
import { appRoutes } from './http/routes'

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  appRoutes(req, res)
})

export default app
