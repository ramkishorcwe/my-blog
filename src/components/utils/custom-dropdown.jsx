import { ChevronDown } from "lucide-react"; // or any icon library you use

const CustomDropdown = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
  label,
  error,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1.5">
          {label}
        </label>
      )}

      <div className="relative group">
        {/* Custom Select */}
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full appearance-none cursor-pointer
            bg-gray-800/80 backdrop-blur-sm
            text-white text-sm
            border border-gray-700/60
            rounded-lg
            px-4 py-2.5 pr-10
            transition-all duration-200 ease-in-out
            hover:bg-gray-800 hover:border-gray-600
            focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-800/80
            ${error ? "border-red-500/70 focus:ring-red-500/60 focus:border-red-500" : ""}
            ${className}
          `}
        >
          {placeholder && (
            <option value="" disabled className="bg-gray-800 text-gray-400">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-gray-800 text-white py-2"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom Chevron Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown
            className={`
              h-4 w-4 transition-transform duration-200
              ${disabled ? "text-gray-600" : "text-gray-400 group-hover:text-gray-300"}
            `}
          />
        </div>
      </div>

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default CustomDropdown;

// import { useState, useRef, useEffect } from "react";
// import { ChevronDown, Check } from "lucide-react";

// const CustomDropdown = ({
//   options = [],
//   value,
//   onChange,
//   placeholder = "Select an option",
//   className = "",
//   disabled = false,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const selectedOption = options.find((opt) => opt.value === value);

//   // Close on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSelect = (optionValue) => {
//     onChange({ target: { value: optionValue } });
//     setIsOpen(false);
//   };

//   return (
//     <div ref={dropdownRef} className={`relative w-full ${className}`}>
//       {/* Trigger Button */}
//       <button
//         type="button"
//         disabled={disabled}
//         onClick={() => !disabled && setIsOpen(!isOpen)}
//         className={`
//           w-full flex items-center justify-between
//           bg-gray-800/80 backdrop-blur-sm
//           text-white text-sm text-left
//           border border-gray-700/60
//           rounded-lg
//           px-4 py-2.5
//           transition-all duration-200
//           hover:bg-gray-800 hover:border-gray-600
//           focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500
//           disabled:opacity-50 disabled:cursor-not-allowed
//           ${isOpen ? "ring-2 ring-blue-500/60 border-blue-500" : ""}
//         `}
//       >
//         <span className={selectedOption ? "text-white" : "text-gray-400"}>
//           {selectedOption ? selectedOption.label : placeholder}
//         </span>
//         <ChevronDown
//           className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <ul
//           className="
//             absolute z-50 mt-1.5 w-full
//             bg-gray-800/95 backdrop-blur-md
//             border border-gray-700/60
//             rounded-lg
//             shadow-xl shadow-black/40
//             py-1
//             max-h-60 overflow-y-auto
//             animate-in fade-in slide-in-from-top-1 duration-150
//           "
//         >
//           {options.map((option) => {
//             const isSelected = option.value === value;
//             return (
//               <li key={option.value}>
//                 <button
//                   type="button"
//                   onClick={() => handleSelect(option.value)}
//                   className={`
//                     w-full flex items-center justify-between
//                     px-4 py-2 text-sm text-left
//                     transition-colors duration-150
//                     ${
//                       isSelected
//                         ? "bg-blue-500/15 text-blue-400"
//                         : "text-gray-200 hover:bg-gray-700/60 hover:text-white"
//                     }
//                   `}
//                 >
//                   <span>{option.label}</span>
//                   {isSelected && <Check className="h-4 w-4 text-blue-400" />}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;
