import React from "react";
// import "../styles/index.css";

//Landing Page Imports
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import CardBox from "./cardbox.jsx";
import Footer from "./footer.jsx";

//create your first component

const mySuperStyles = {
    width: "80%"
};
const Home = () => {
	return (
		<div>
        <NavBar/>
        <div className="container-fluid" style={mySuperStyles}>
            <Jumbotron />
            <CardBox />
        </div>
        <Footer />
    </div>
	);
};

export default Home;
