import { useOthers, useSelf } from "@liveblocks/react";
import { Avatar } from "./Avatar";

import styles from './index.module.css';
import { generateRandomName } from "@/lib/utils";


const ActiveUsers = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="flex pl-3">
        {currentUser && (
            <Avatar name="You" otherStyles="border-[3px] border-green-700" />
        )}

        {users.slice(0, 3).map(({ connectionId }) => {
          return (
            <Avatar key={connectionId} name={generateRandomName} otherStyles='-ml-3' />
          );
        })}

        {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}


      </div>
    </div>
  );
}

export default ActiveUsers