import { Routes, Route } from "react-router-dom";
import MultiStepForm from "../components/Form";
import Thankyou from "../components/Thankyou.";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </>
  );
};
export { AllRoutes };
