import { env } from '@/env'
import { IncomingMessage, ServerResponse } from 'http'
import { ZodError } from 'zod'

export const globalErrorHandler = (
  error: Error,
  _req: IncomingMessage,
  res: ServerResponse,
) => {
  if (error instanceof ZodError) {
    res.writeHead(400)
    return res.end(
      JSON.stringify({
        message: 'Validation error',
        issues: error.formErrors.fieldErrors,
      }),
    )
  } else {
    if (env.NODE_ENV !== 'production') {
      console.error(error)
    }
    res.writeHead(500)
    return res.end(JSON.stringify({ message: 'Internal Server Error' }))
  }
}
