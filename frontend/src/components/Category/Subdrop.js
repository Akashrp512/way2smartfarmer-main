import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Sub_Know_Tech() {
  return (
    <DropdownButton id="dropdown-item-button" title="Agritech">
      <div className="lol">
        <Dropdown.ItemText>Farm machineries</Dropdown.ItemText>
        <Dropdown.Item as="button">Implements & others</Dropdown.Item>
      </div>
    </DropdownButton>
  );
}
export function Sub_Know_Clinic() {
    return (
      <DropdownButton id="dropdown-item-button" title="Agritech">
        <div className="lol">
          <Dropdown.ItemText>PGR</Dropdown.ItemText>
          <Dropdown.Item as="button">PPP</Dropdown.Item>
        </div>
      </DropdownButton>
    );
  }
  export function Sub_Know_Market() {
    return (
      <DropdownButton id="dropdown-item-button" title="Agritech">
        <div className="lol">
          <Dropdown.ItemText>Crop production</Dropdown.ItemText>
          <Dropdown.Item as="button">Value addition</Dropdown.Item>
          <Dropdown.Item as="button">Market</Dropdown.Item>
        </div>
      </DropdownButton>
    );
  }
  export function Sub_Know_PPP() {
    return (
      <DropdownButton id="dropdown-item-button" title="PPP">
        <div className="lol">
          <Dropdown.ItemText>PGR</Dropdown.ItemText>
          <Dropdown.Item as="button">PPP</Dropdown.Item>
        </div>
      </DropdownButton>
    );
  }