/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.33
 */
import type { Codec } from './codec';

export interface RoomDetailsOut {
  active_recording: boolean;
  creation_time: number;
  empty_timeout: number;
  enabled_codecs: Codec[];
  max_participants: number;
  metadata: string;
  name: string;
  num_participants: number;
  num_publishers: number;
  sid: string;
}