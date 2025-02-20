import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Main, Wrapper } from "./Layot.styled";

const Layout = () => {
  return (
    <>
      <Toaster />
      <Wrapper>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <footer>
          <p>footer</p>
        </footer>
      </Wrapper>
    </>
  );
};

export default Layout;
