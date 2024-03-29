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
 * Returns the current user profile
 * @summary Get Current User Profile
 */
export const aPIGetCurrentUserProfileResponse = zod.object({
  "id": zod.number(),
  "username": zod.string(),
  "email": zod.string(),
  "activated": zod.boolean().optional()
})

/**
 * Logs in a user
 * @summary Login
 */
export const aPILoginResponse = zod.object({
  "access_token": zod.string(),
  "token_type": zod.string().optional()
})

/**
 * Logs in a user
 * @summary Get Token
 */
export const aPIGetTokenBody = zod.object({
  "username": zod.string(),
  "password": zod.string()
})

export const aPIGetTokenResponse = zod.object({
  "access_token": zod.string(),
  "token_type": zod.string().optional()
})

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

