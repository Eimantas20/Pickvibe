import ProductsList from "./ProductsList";
import Topbar from "../topbar/Topbar";

const Dashboard = () => {
    return(
        <div className="w-full p-5 bg-[#F1F5F8] rounded-[1.8rem] sm:p-1">
            <Topbar />
            <ProductsList />
        </div>
    )
}

export default Dashboard