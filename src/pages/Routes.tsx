import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<div>Home</div>} />
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
