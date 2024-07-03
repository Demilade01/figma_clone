"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/Loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_9R99EH2vpmiCEiD4kMzHJhpvhbXoamcKrRXII5_UWL98eomdeV6FfjvD-U_0y3tL"}>
      <RoomProvider id="my-room"
        initialPresence={{
          cursor: null, cursorColor: null, editingText: null
        }}
        initialStorage={{
          canvasObjects: new LiveMap()
        }}
      >
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}