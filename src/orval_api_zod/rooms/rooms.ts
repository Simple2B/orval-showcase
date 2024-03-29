/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.33
 */
import {
  z as zod
} from 'zod'

/**
 * @summary Get Room Token
 */
export const aPIGetRoomTokenParams = zod.object({
  "room_name": zod.string()
})

export const aPIGetRoomTokenResponse = zod.object({
  "token": zod.string()
})

/**
 * @summary Create Room
 */
export const aPICreateRoomBody = zod.object({
  "name": zod.string()
})

