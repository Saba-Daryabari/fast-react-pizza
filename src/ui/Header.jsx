import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";

export default function Header() {
  return (
    <header className="header">
        <Link to="/">Fast React Pizza Company</Link> 

        <SearchOrder />
        <p>Saba</p>
    </header>
  );
}