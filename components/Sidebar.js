import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SIdebarRow from "./SIdebarRow";
import Image from "next/image";

function Sidebar() {
  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {session.user && (
        <SIdebarRow src={session.user.image} title={session.user.name} />
      )}
      <SIdebarRow Icon={UsersIcon} title="Friends" />
      <SIdebarRow Icon={UserGroupIcon} title="Groups" />
      <SIdebarRow Icon={ShoppingBagIcon} title="MarketPlace" />
      <SIdebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SIdebarRow Icon={CalendarIcon} title="Events" />
      <SIdebarRow Icon={ClockIcon} title="Memories" />
      <SIdebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
