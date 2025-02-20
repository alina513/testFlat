import { List, Wrapper, LinkNav, Container } from "./Header.styled";
import { getRoutes } from "../../contants/routes";

const Header = () => {
  const routes = getRoutes();
  return (
    <Container>
      <Wrapper>
        <nav>
          <List>
            {routes.map((route, index) => (
              <li key={index}>
                <LinkNav to={route.path}>{route.label}</LinkNav>
              </li>
            ))}
          </List>
        </nav>
      </Wrapper>
    </Container>
  );
};

export default Header;
