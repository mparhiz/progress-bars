import React, { useState } from "react";
import { 
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

function DisplayButtons({ buttons, applyValue, dropdownItems, selectItem}) {
  const [ dropdownTitle, setDropdownTitle ] = useState(`Progress bar ${dropdownItems[0] + 1}`);
  const onSelectItem = (id) => {
    setDropdownTitle(`Progress bar ${Number(id) + 1}`);
    selectItem(id);
  }

  return (
    <div>
      <ButtonGroup className="mb-2">
        <DropdownButton 
          as={ButtonGroup}
          title={dropdownTitle}
          id="bg-nested-dropdown"
          onSelect={onSelectItem}
        >
          {dropdownItems.map((item, index) => 
            <Dropdown.Item
              key={index}
              eventKey={index}
            >
              Progress bar {item + 1}
            </Dropdown.Item>
          )}
        </DropdownButton>

        {buttons.map((val, index) => 
          <Button 
            key={index}
            onClick={() => applyValue(val)}
          >
            {val}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

export default DisplayButtons;
