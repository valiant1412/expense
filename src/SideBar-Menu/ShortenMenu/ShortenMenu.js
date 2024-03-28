import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { Stack } from "react-bootstrap";
import "../ExpandMenu/SideBar_Menu.scss";
export function ShortenMenu({ parentCallback }) {
  const resizeMenu = (): void => {
    parentCallback(true);
  };
  return (
    <Container className="sidebar-menu">
      <Row className="shorten-menu">
        <Row>
          <Stack gap={3}>
            <Link
              className="p-2 d-flex align-items-center menu-icon"
              onClick={resizeMenu}
            >
              <Icon.List color="white" size="40" />
            </Link>
            <Link to="/" className="p-2 d-flex align-items-center">
              <Icon.HouseDoor />
            </Link>
            <Link to="/record" className="p-2 d-flex align-items-center">
              <Icon.FileEarmark />
            </Link>
            <Link to="/report" className="p-2 d-flex align-items-center">
              <Icon.BarChartLine />
            </Link>
            <Link to="/setting" className="p-2 d-flex align-items-center">
              <Icon.Gear />
            </Link>
            <Link to="/account" className="p-2 d-flex align-items-center">
              <Icon.Person />
            </Link>
            <Link to="/logout" className="p-2 d-flex align-items-center">
              <Icon.BoxArrowRight />
            </Link>
          </Stack>
        </Row>
      </Row>
    </Container>
  );
}
