/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.33
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  User
} from '../model/user'



  export const getUsers = () => {
/**
 * Returns the current user profile
 * @summary Get Current User Profile
 */
const aPIGetCurrentUserProfile = <TData = AxiosResponse<User>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `http://127.0.0.1:5002/api/users/me`,options
    );
  }
/**
 * Deletes the current user
 * @summary Delete Current User
 */
const aPIDeleteCurrentUser = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `http://127.0.0.1:5002/api/users/me`,options
    );
  }
return {aPIGetCurrentUserProfile,aPIDeleteCurrentUser}};
export type APIGetCurrentUserProfileResult = AxiosResponse<User>
export type APIDeleteCurrentUserResult = AxiosResponse<void>
