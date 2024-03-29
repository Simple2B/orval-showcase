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

