import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./ScrollToTop.scss";
export function ScrollToTop() {
  return (
    <div className="d-flex justify-content-center align-items-center scroll-to-top">
      <a href="#">
        <strong>
          <Icon.ArrowUp fontSize={40} color="white" />
        </strong>
      </a>
    </div>
  );
}
