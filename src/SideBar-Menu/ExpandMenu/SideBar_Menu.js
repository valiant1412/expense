import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Stack } from "react-bootstrap";
import "./SideBar_Menu.scss";
export function SideBar_Menu({ parentCallback }) {
  const resizeMenu = (): void => {
    parentCallback(false);
  };
  return (
    <Container className="sidebar-menu">
      <Row className="expand-menu">
        <Row className="productName">
          <Col className="d-flex align-items-center" xs={9}>
            <b>My Expense</b>
          </Col>
          <Col className="d-flex align-items-center" xs={3}>
            <Icon.ChevronDoubleLeft color="white" onClick={resizeMenu} />
          </Col>
        </Row>
        <Row>
          <Stack gap={3}>
            <div className="p-2 d-flex align-items-center">
              <Icon.HouseDoor /> <p className="menu-element"> Trang chủ</p>
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.FileEarmark /> <p className="menu-element"> Bản ghi</p>
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.BarChartLine /> <p className="menu-element"> Báo cáo</p>
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.Gear /> <p className="menu-element"> Cài đặt</p>
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.Person /> <p className="menu-element"> Tài khoản</p>
            </div>
            <div className="p-2 d-flex align-items-center">
              <Icon.BoxArrowRight /> <p className="menu-element"> Đăng xuất</p>
            </div>
          </Stack>
        </Row>
      </Row>
    </Container>
  );
}
