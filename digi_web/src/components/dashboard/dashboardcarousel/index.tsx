import Carousel from "react-material-ui-carousel";
import { informationPoints } from "../../../utils/dashboardInfomation";
export const DashboardCarousel = () => {
  return (
    <Carousel>
      {informationPoints.map((item) => (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </>
      ))}
    </Carousel>
  );
};
