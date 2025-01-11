import http, { IncomingMessage, ServerResponse } from 'http'
import { appRoutes } from './http/routes'
import { globalErrorHandler } from './http/middlewares/errorHandler'

const app = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    try {
      await appRoutes(req, res)
    } catch (error) {
      globalErrorHandler(error as Error, req, res)
    }
  },
)

export default app
