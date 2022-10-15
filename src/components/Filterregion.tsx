import React, { ReactText, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

import { styles } from '../style';

const regions = [
  { name: 'africa', id: 1 },
  { name: 'america', id: 2 },
  { name: 'asia', id: 3 },
  { name: 'europe', id: 4 },
  { name: 'oceania', id: 5 },
];

interface props {
  onRegionChange: (region: string) => void;
}

const Filterregion = ({ onRegionChange }: props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // close option list when user click outside the options list
  const onBlured = (event: React.FocusEvent<HTMLDivElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowOptions(false);
    }
  };

  // Event handler for keydowns for options
  const handleOptionKeyDown =
    (index: number) => (e: React.KeyboardEvent<HTMLLIElement>) => {
      switch (e.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          e.preventDefault();
          setFilterRegion(index);
          break;
        default:
          break;
      }
    };

  const setFilterRegion = (index: number) => {
    setSelectedOption(index);
    onRegionChange(regions[index - 1].name);
    // console.log(regions[index].id);

    setShowOptions(false);
  };

  const getSelectedRegion = (id: number) => {
    return regions.find((region) => region.id === id);
  };

  return (
    <div className="w-52 relative" onBlur={(e) => onBlured(e)}>
      <div
        className={`${styles.elementBg} ${styles.elementTextColor} shadow-md ${styles.boxShadow} rounded-lg cursor-pointer  flex justify-between items-center p-4`}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={showOptions}
        aria-label="Filter region"
        aria-controls="listbox"
        onClick={() => {
          if (!showOptions) setShowOptions(true);
        }}
        onKeyDown={() => {
          if (!showOptions) setShowOptions(true);
        }}
        tabIndex={0}
      >
        <span>
          {selectedOption
            ? `${getSelectedRegion(selectedOption)?.name}`
            : 'filter by region'}
        </span>

        <div className="flex items-center">
          {selectedOption ? (
            <button
              onClick={() => {
                setSelectedOption(null);
                onRegionChange('');
              }}
            >
              <AiOutlineClose size={15} />
            </button>
          ) : (
            ''
          )}
          <button
            className=" bg-transparent outline-none "
            onClick={() => setShowOptions(!showOptions)}
            aria-label="toggle filter options"
          >
            <BiChevronDown
              size={30}
              className={`transition duration-300 ${
                showOptions ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        </div>
      </div>

      <ul
        className={`${styles.elementBg} ${styles.elementTextColor} shadow-md ${
          styles.boxShadow
        } ${
          showOptions ? '' : 'hidden'
        } rounded-lg py-2 mt-2 font-light z-10 absolute w-full`}
        id="listbox"
        role="listbox"
        tabIndex={-1}
        aria-label="Filter region"
        aria-activedescendant={
          selectedOption ? regions[selectedOption - 1].id.toString() : ''
        }
      >
        {regions.map((region) => (
          <li
            role="option"
            aria-selected={selectedOption === region.id}
            tabIndex={0}
            className={`py-2 px-4 cursor-pointer ${
              selectedOption === region.id ? 'font-bold' : ''
            }`}
            onClick={() => setFilterRegion(region.id)}
            onKeyDown={handleOptionKeyDown(region.id)}
            key={region.id}
          >
            {region.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filterregion;
