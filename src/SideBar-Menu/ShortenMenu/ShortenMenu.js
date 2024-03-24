import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
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
            <div
              className="p-2 d-flex align-items-center menu-icon"
              onClick={resizeMenu}
            >
              <Icon.List color="white" size="40" />
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.HouseDoor />
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.FileEarmark />
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.BarChartLine />
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.Gear />
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.Person />
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.BoxArrowRight />
            </div>
          </Stack>
        </Row>
      </Row>
    </Container>
  );
}
