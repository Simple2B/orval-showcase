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
  RoomCreateIn
} from '../model/roomCreateIn'
import type {
  RoomDetailsOut
} from '../model/roomDetailsOut'
import type {
  RoomSummaryOut
} from '../model/roomSummaryOut'
import type {
  RoomTokenOut
} from '../model/roomTokenOut'



  export const getRooms = () => {
/**
 * @summary Get Room Token
 */
const aPIGetRoomToken = <TData = AxiosResponse<RoomTokenOut>>(
    roomName: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `http://127.0.0.1:5002/api/rooms/token/${roomName}`,options
    );
  }
/**
 * @summary Get Rooms
 */
const aPIGetRooms = <TData = AxiosResponse<RoomSummaryOut[]>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `http://127.0.0.1:5002/api/rooms/`,options
    );
  }
/**
 * @summary Create Room
 */
const aPICreateRoom = <TData = AxiosResponse<RoomDetailsOut>>(
    roomCreateIn: RoomCreateIn, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `http://127.0.0.1:5002/api/rooms/`,
      roomCreateIn,options
    );
  }
return {aPIGetRoomToken,aPIGetRooms,aPICreateRoom}};
export type APIGetRoomTokenResult = AxiosResponse<RoomTokenOut>
export type APIGetRoomsResult = AxiosResponse<RoomSummaryOut[]>
export type APICreateRoomResult = AxiosResponse<RoomDetailsOut>
