/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.33
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'

export const getAPIGetTokenMock = () => ({access_token: faker.word.sample(), token_type: faker.helpers.arrayElement([faker.word.sample(), undefined])})

export const getApiAuthMock = () => [
http.post('*/api/auth/token', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetTokenMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),]