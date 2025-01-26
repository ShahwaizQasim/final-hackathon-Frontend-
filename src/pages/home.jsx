
import Navbar from "../components/navbar";
import WeddingCard from "../components/weddingCard";
import ConstructionLoan from "../components/constructionLoan";
import EducationLoan from "../components/EducationLoan";
import VehicleLoans from "../components/vehicleLoans";
import HouseHoldLoans from "../components/householdLoan";
import { Link } from "react-router";
function Home() {
    return (
        <>
            <Navbar />
            <div className=" container flex flex-wrap m-4">
                <WeddingCard />
                <ConstructionLoan />
                <EducationLoan />
                <VehicleLoans />
                <HouseHoldLoans />
            </div>
              
        </>
    )
}

export default Home;