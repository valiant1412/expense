import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Stack } from "react-bootstrap";
import "./SideBar_Menu.scss";
import { Link } from "react-router-dom";
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
            <Link className="p-2 d-flex align-items-center" to="/">
              <Icon.HouseDoor /> <p className="menu-element"> Trang chủ</p>
            </Link>
            <Link className="p-2 d-flex align-items-center" to="/record">
              <Icon.FileEarmark /> <p className="menu-element"> Bản ghi</p>
            </Link>
            <Link className="p-2 d-flex align-items-center" to="/report">
              <Icon.BarChartLine /> <p className="menu-element"> Báo cáo</p>
            </Link>
            <Link className="p-2 d-flex align-items-center" to="/setting">
              <Icon.Gear /> <p className="menu-element"> Cài đặt</p>
            </Link>
            <Link className="p-2 d-flex align-items-center" to="/account">
              <Icon.Person /> <p className="menu-element"> Tài khoản</p>
            </Link>
            <Link className="p-2 d-flex align-items-center" to="/logout">
              <Icon.BoxArrowRight /> <p className="menu-element"> Đăng xuất</p>
            </Link>
          </Stack>
        </Row>
      </Row>
    </Container>
  );
}
