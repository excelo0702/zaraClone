import { Fragment } from "react";
import ImageSlider from "../components/ImageSlider";
import {CarouselData} from "../dummy_data/CarouselData";

const Home = () =>{
    return (
        <Fragment>
            Home Page 
            <ImageSlider />
        </Fragment>
    );
}

export default Home;