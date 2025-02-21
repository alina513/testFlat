import { List, Wrapper, LinkNav, Container, Svg, Logo } from "./Header.styled";
import { getRoutes } from "../../contants/routes";

const Header = () => {
  const routes = getRoutes();
  return (
    <Container>
      <Wrapper>
        <Logo><Svg width='20' height='20'><use xlinkHref="/sprite.svg#icon-home"></use></Svg>Appart</Logo>
          <List>
            {routes.map((route, index) => (
              <li key={index}>
                <LinkNav to={route.path}>{route.label}</LinkNav>
              </li>
            ))}
          </List>
      </Wrapper>
    </Container>
  );
};

export default Header;
