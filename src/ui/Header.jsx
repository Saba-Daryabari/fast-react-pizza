import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import UserName from "../Features/user/UserName";

export default function Header() {
  return (
    <header className="font-sans flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 p-4 sm:px-6 ">
      <Link to="/">Fast React Pizza Company</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}