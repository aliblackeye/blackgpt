// Types
"use client";
import { useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

type Option = {
  id: string;
  name: string;
};

interface SelectProps {
  options: Option[] | any[];
  selected: string | null;
  setSelected: (selected: string) => void;
  icon: React.ReactNode;
  text?: string;
  className?: string;
  initialValue?: string;
  onChange?: (selected: string) => void;
}

export default function Select(props: SelectProps) {
  const {
    options,
    selected,
    setSelected,
    icon,
    className,
    text,
    initialValue,
    onChange,
  } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  return (
    <div
      className={`select ${className} 
      ${isCollapsed ? "collapsed" : ""}`}
    >
      <div
        className="select-title flex items-center gap-2"
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        {icon}
        <span className="select-text">
          {text}{" "}
          {selectedOption?.name ? `${selectedOption?.name}` : initialValue}
        </span>

        <div className="ml-auto">
          {isCollapsed ? (
            <TbChevronDown size={18} />
          ) : (
            <TbChevronUp size={18} />
          )}
        </div>
      </div>
      <ul className="select-option-list">
        {options?.map((option: Option) => (
          <li
            key={option.id}
            className={`select-option-list-item ${
              option?.id === selected ? "selected" : ""
            }`}
            onClick={() => {
              setSelected(option.id);
              setSelectedOption(option);
              setIsCollapsed(true);
              if (onChange) {
                onChange(option.id);
              }
              
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
