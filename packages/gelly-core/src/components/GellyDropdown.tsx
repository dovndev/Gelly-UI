import React, { useState, useRef, useEffect } from "react";

interface GellyDropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const GellyDropdown: React.FC<GellyDropdownProps> = ({
  trigger,
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative inline-block ${className}`}
      ref={dropdownRef}
      style={{ zIndex: isOpen ? 9999 : "auto" }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-xl min-w-max"
          style={{
            zIndex: 99999,
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="p-2">{children}</div>
        </div>
      )}
    </div>
  );
};