import {
  Container,
  Row,
  Col,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import * as Icon from "react-bootstrap-icons";
import "./BackButton.scss";
export function BackButton() {
  const navigate = useNavigate();
  return (
    <Link
      className="back d-flex justify-content-between"
      onClick={() => navigate(-1)}
    >
      <Icon.ArrowLeft />
      <div style={{ fontSize: 15 }}>Trở về</div>
    </Link>
  );
}
