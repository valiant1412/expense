import { Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "./CategoryCreateForm.scss";
export function CategoryCreateForm(props: boolean) {
  return (
    <ToggleButtonGroup
      className="category-btn-group"
      type="radio"
      name="options"
      defaultValue={1}
    >
      <ToggleButton
        className={
          props.roundCorner
            ? "category-createForm-btn category-btn-list"
            : "category-createForm-btn"
        }
        id="tbg-radio-1"
        value={1}
      >
        Thu
      </ToggleButton>
      <ToggleButton
        className="category-createForm-btn"
        id="tbg-radio-2"
        value={2}
      >
        Chi
      </ToggleButton>
      <ToggleButton
        className={
          props.roundCorner
            ? "category-createForm-btn category-btn-list"
            : "category-createForm-btn"
        }
        id="tbg-radio-3"
        value={3}
      >
        Nợ
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
