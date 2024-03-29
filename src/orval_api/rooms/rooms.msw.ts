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

export const getAPIGetRoomTokenMock = () => ({token: faker.word.sample()})

export const getAPIGetRoomsMock = () => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({creation_time: faker.number.int({min: undefined, max: undefined}), max_participants: faker.number.int({min: undefined, max: undefined}), metadata: faker.word.sample(), name: faker.word.sample(), num_participants: faker.number.int({min: undefined, max: undefined}), num_publishers: faker.number.int({min: undefined, max: undefined}), sid: faker.word.sample()})))

export const getAPICreateRoomMock = () => ({active_recording: faker.datatype.boolean(), creation_time: faker.number.int({min: undefined, max: undefined}), empty_timeout: faker.number.int({min: undefined, max: undefined}), enabled_codecs: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({fmtp_line: faker.word.sample(), mime: faker.word.sample()})), max_participants: faker.number.int({min: undefined, max: undefined}), metadata: faker.word.sample(), name: faker.word.sample(), num_participants: faker.number.int({min: undefined, max: undefined}), num_publishers: faker.number.int({min: undefined, max: undefined}), sid: faker.word.sample()})

export const getRoomsMock = () => [
http.get('*/api/rooms/token/:roomName', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetRoomTokenMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.get('*/api/rooms/', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPIGetRoomsMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),http.post('*/api/rooms/', async () => {
        await delay(1000);
        return new HttpResponse(JSON.stringify(getAPICreateRoomMock()),
          { 
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
      }),]
