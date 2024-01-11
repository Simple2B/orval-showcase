"use client";

import { useAPIGetRooms } from "../orval_api/rooms/rooms";
import { FC } from "react";

export const RoomList: FC = () => {
  const { data, isLoading, refetch, isFetching, error } = useAPIGetRooms({
    query: {},
  });

  return (
    <div className="flex flex-col gap-2 content-center">
      {isLoading || isFetching ? (
        <div>loading...</div>
      ) : (
        !!data && (
          <>
            <button onClick={() => refetch()}>REFETCH</button>
            <div>
              {data.data.map((room) => (
                <div key={room.sid}>{room.name}</div>
              ))}
            </div>
          </>
        )
      )}
      {!!error && <div>{error.message}</div>}
    </div>
  );
};
