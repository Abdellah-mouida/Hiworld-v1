import React, { useState } from "react";
import ad from "../coutry/ad.png";
import { Countries } from "../base/Country";

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  let countryOptions = Countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.flag} {country.name}
    </option>
  ));

  return (
    <select onChange={handleSelectChange} value={selectedCountry}>
      <option value="" disabled selected>
        Select a country
      </option>
      {countryOptions}
    </select>
  );
};

export default CountrySelect;

// import React, { useState } from "react";
// import styled from "styled-components";
// import styled from "styled-components";

// const CustomSelect = styled.div`
//   position: relative;
//   width: 200px;
//   margin: 0 auto;
//   select {
//     width: 100%;
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     appearance: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     background: url('data:image/svg+xml;utf8,<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M7 10l5 5 5-5H7z"/></svg>')
//       no-repeat right 10px center;
//     background-size: 20px;
//   }
// `;

// const CountrySelect = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleSelectChange = (event) => {
//     setSelectedCountry(event.target.value);
//   };

//   const countryOptions = [
//     { name: "Afghanistan", flag: "🇦🇫" },
//     { name: "Albania", flag: "🇦🇱" },
//     { name: "Algeria", flag: "🇩🇿" },
//     { name: "Andorra", flag: "🇦🇩" },
//     { name: "Angola", flag: "🇦🇴" },
//     { name: "Antigua and Barbuda", flag: "🇦🇬" },
//     { name: "Argentina", flag: "🇦🇷" },
//     { name: "Armenia", flag: "🇦🇲" },
//     { name: "Australia", flag: "🇦🇺" },
//     { name: "Austria", flag: "🇦🇹" },
//     { name: "Azerbaijan", flag: "🇦🇿" },
//     { name: "Bahamas", flag: "🇧🇸" },
//     { name: "Bahrain", flag: "🇧🇭" },
//     { name: "Bangladesh", flag: "🇧🇩" },
//     { name: "Barbados", flag: "🇧🇧" },
//     { name: "Belarus", flag: "🇧🇾" },
//     { name: "Belgium", flag: "🇧🇪" },
//     { name: "Belize", flag: "🇧🇿" },
//     { name: "Benin", flag: "🇧🇯" },
//     { name: "Bhutan", flag: "🇧🇹" },
//     { name: "Bolivia", flag: "🇧🇴" },
//     { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
//     { name: "Botswana", flag: "🇧🇼" },
//     { name: "Brazil", flag: "🇧🇷" },
//     { name: "Brunei", flag: "🇧🇳" },
//     { name: "Bulgaria", flag: "🇧🇬" },
//     { name: "Burkina Faso", flag: "🇧🇫" },
//     { name: "Burundi", flag: "🇧🇮" },
//     { name: "Cabo Verde", flag: "🇨🇻" },
//     { name: "Cambodia", flag: "🇰🇭" },
//     { name: "Cameroon", flag: "🇨🇲" },
//     { name: "Canada", flag: "🇨🇦" },
//     { name: "Central African Republic", flag: "🇨🇫" },
//     { name: "Chad", flag: "🇹🇩" },
//     { name: "Chile", flag: "🇨🇱" },
//     { name: "China", flag: "🇨🇳" },
//     { name: "Colombia", flag: "🇨🇴" },
//     { name: "Comoros", flag: "🇰🇲" },
//     { name: "Congo", flag: "🇨🇬" },
//     { name: "Costa Rica", flag: "🇨🇷" },
//     { name: "Croatia", flag: "🇭🇷" },
//     { name: "Cuba", flag: "🇨🇺" },
//     { name: "Cyprus", flag: "🇨🇾" },
//     { name: "Czech Republic", flag: "🇨🇿" },
//     { name: "Denmark", flag: "🇩🇰" },
//     { name: "Djibouti", flag: "🇩🇯" },
//     { name: "Dominica", flag: "🇩🇲" },
//     { name: "Dominican Republic", flag: "🇩🇴" },
//     { name: "Ecuador", flag: "🇪🇨" },
//     { name: "Egypt", flag: "🇪🇬" },
//     { name: "El Salvador", flag: "🇸🇻" },
//     { name: "Equatorial Guinea", flag: "🇬🇶" },
//     { name: "Eritrea", flag: "🇪🇷" },
//     { name: "Estonia", flag: "🇪🇪" },
//     { name: "Eswatini", flag: "🇸🇿" },
//     { name: "Ethiopia", flag: "🇪🇹" },
//     { name: "Fiji", flag: "🇫🇯" },
//     { name: "Finland", flag: "🇫🇮" },
//     { name: "France", flag: "🇫🇷" },
//     { name: "Gabon", flag: "🇬🇦" },
//     { name: "Gambia", flag: "🇬🇲" },
//     { name: "Georgia", flag: "🇬🇪" },
//     { name: "Germany", flag: "🇩🇪" },
//     { name: "Ghana", flag: "🇬🇭" },
//     { name: "Greece", flag: "🇬🇷" },
//     { name: "Grenada", flag: "🇬🇩" },
//     { name: "Guatemala", flag: "🇬🇹" },
//     { name: "Guinea", flag: "🇬🇳" },
//     { name: "Guinea-Bissau", flag: "🇬🇼" },
//     { name: "Guyana", flag: "🇬🇾" },
//     { name: "Haiti", flag: "🇭🇹" },
//     { name: "Honduras", flag: "🇭🇳" },
//     { name: "Hungary", flag: "🇭🇺" },
//     { name: "Iceland", flag: "🇮🇸" },
//     { name: "India", flag: "🇮🇳" },
//     { name: "Indonesia", flag: "🇮🇩" },
//     { name: "Iran", flag: "🇮🇷" },
//     { name: "Iraq", flag: "🇮🇶" },
//     { name: "Ireland", flag: "🇮🇪" },
//     { name: "Israel", flag: "🇮🇱" },
//     { name: "Italy", flag: "🇮🇹" },
//     { name: "Jamaica", flag: "🇯🇲" },
//     { name: "Japan", flag: "🇯🇵" },
//     { name: "Jordan", flag: "🇯🇴" },
//     { name: "Kazakhstan", flag: "🇰🇿" },
//     { name: "Kenya", flag: "🇰🇪" },
//     { name: "Kiribati", flag: "🇰🇮" },
//     { name: "Korea, North", flag: "🇰🇵" },
//     { name: "Korea, South", flag: "🇰🇷" },
//     { name: "Kosovo", flag: "🇽🇰" },
//     { name: "Kuwait", flag: "🇰🇼" },
//     { name: "Kyrgyzstan", flag: "🇰🇬" },
//     { name: "Laos", flag: "🇱🇦" },
//     { name: "Latvia", flag: "🇱🇻" },
//     { name: "Lebanon", flag: "🇱🇧" },
//     { name: "Lesotho", flag: "🇱🇸" },
//     { name: "Liberia", flag: "🇱🇷" },
//     { name: "Libya", flag: "🇱🇾" },
//     { name: "Liechtenstein", flag: "🇱🇮" },
//     { name: "Lithuania", flag: "🇱🇹" },
//     { name: "Luxembourg", flag: "🇱🇺" },
//     { name: "Madagascar", flag: "🇲🇬" },
//     { name: "Malawi", flag: "🇲🇼" },
//     { name: "Malaysia", flag: "🇲🇾" },
//     { name: "Maldives", flag: "🇲🇻" },
//     { name: "Mali", flag: "🇲🇱" },
//     { name: "Malta", flag: "🇲🇹" },
//     { name: "Marshall Islands", flag: "🇲🇭" },
//     { name: "Mauritania", flag: "🇲🇷" },
//     { name: "Mauritius", flag: "🇲🇺" },
//     { name: "Mexico", flag: "🇲🇽" },
//     { name: "Micronesia", flag: "🇫🇲" },
//     { name: "Moldova", flag: "🇲🇩" },
//     { name: "Monaco", flag: "🇲🇨" },
//     { name: "Mongolia", flag: "🇲🇳" },
//     { name: "Montenegro", flag: "🇲🇪" },
//     { name: "Morocco", flag: "🇲🇦" },
//     { name: "Mozambique", flag: "🇲🇿" },
//     { name: "Myanmar", flag: "🇲🇲" },
//     { name: "Namibia", flag: "🇳🇦" },
//     { name: "Nauru", flag: "🇳🇷" },
//     { name: "Nepal", flag: "🇳🇵" },
//     { name: "Netherlands", flag: "🇳🇱" },
//     { name: "New Zealand", flag: "🇳🇿" },
//     { name: "Nicaragua", flag: "🇳🇮" },
//     { name: "Niger", flag: "🇳🇪" },
//     { name: "Nigeria", flag: "🇳🇬" },
//     { name: "North Macedonia", flag: "🇲🇰" },
//     { name: "Norway", flag: "🇳🇴" },
//     { name: "Oman", flag: "🇴🇲" },
//     { name: "Pakistan", flag: "🇵🇰" },
//     { name: "Palau", flag: "🇵🇼" },
//     { name: "Palestine", flag: "🇵🇸" },
//     { name: "Panama", flag: "🇵🇦" },
//     { name: "Papua New Guinea", flag: "🇵🇬" },
//     { name: "Paraguay", flag: "🇵🇾" },
//     { name: "Peru", flag: "🇵🇪" },
//     { name: "Philippines", flag: "🇵🇭" },
//     { name: "Poland", flag: "🇵🇱" },
//     { name: "Portugal", flag: "🇵🇹" },
//     { name: "Qatar", flag: "🇶🇦" },
//     { name: "Romania", flag: "🇷🇴" },
//     { name: "Russia", flag: "🇷🇺" },
//     { name: "Rwanda", flag: "🇷🇼" },
//     { name: "Saint Kitts and Nevis", flag: "🇰🇳" },
//     { name: "Saint Lucia", flag: "🇱🇨" },
//     { name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
//     { name: "Samoa", flag: "🇼🇸" },
//     { name: "San Marino", flag: "🇸🇲" },
//     { name: "Sao Tome and Principe", flag: "🇸🇹" },
//     { name: "Saudi Arabia", flag: "🇸🇦" },
//     { name: "Senegal", flag: "🇸🇳" },
//     { name: "Serbia", flag: "🇷🇸" },
//     { name: "Seychelles", flag: "🇸🇨" },
//     { name: "Sierra Leone", flag: "🇸🇱" },
//     { name: "Singapore", flag: "🇸🇬" },
//     { name: "Slovakia", flag: "🇸🇰" },
//     { name: "Slovenia", flag: "🇸🇮" },
//     { name: "Solomon Islands", flag: "🇸🇧" },
//     { name: "Somalia", flag: "🇸🇴" },
//     { name: "South Africa", flag: "🇿🇦" },
//     { name: "South Sudan", flag: "🇸🇸" },
//     { name: "Spain", flag: "🇪🇸" },
//     { name: "Sri Lanka", flag: "🇱🇰" },
//     { name: "Sudan", flag: "🇸🇩" },
//     { name: "Suriname", flag: "🇸🇷" },
//     { name: "Sweden", flag: "🇸🇪" },
//     { name: "Switzerland", flag: "🇨🇭" },
//     { name: "Syria", flag: "🇸🇾" },
//     { name: "Taiwan", flag: "🇹🇼" },
//     { name: "Tajikistan", flag: "🇹🇯" },
//     { name: "Tanzania", flag: "🇹🇿" },
//     { name: "Thailand", flag: "🇹🇭" },
//     { name: "Timor-Leste", flag: "🇹🇱" },
//     { name: "Togo", flag: "🇹🇬" },
//     { name: "Tonga", flag: "🇹🇴" },
//     { name: "Trinidad and Tobago", flag: "🇹🇹" },
//     { name: "Tunisia", flag: "🇹🇳" },
//     { name: "Turkey", flag: "🇹🇷" },
//     { name: "Turkmenistan", flag: "🇹🇲" },
//     { name: "Tuvalu", flag: "🇹🇻" },
//     { name: "Uganda", flag: "🇺🇬" },
//     { name: "Ukraine", flag: "🇺🇦" },
//     { name: "United Arab Emirates", flag: "🇦🇪" },
//     { name: "United Kingdom", flag: "🇬🇧" },
//     { name: "United States", flag: "🇺🇸" },
//     { name: "Uruguay", flag: "🇺🇾" },
//     { name: "Uzbekistan", flag: "🇺🇿" },
//     { name: "Vanuatu", flag: "🇻🇺" },
//     { name: "Vatican City", flag: "🇻🇦" },
//     { name: "Venezuela", flag: "🇻🇪" },
//     { name: "Vietnam", flag: "🇻🇳" },
//     { name: "Yemen", flag: "🇾🇪" },
//     { name: "Zambia", flag: "🇿🇲" },
//     { name: "Zimbabwe", flag: "🇿🇼" },
//   ].map((country) => (
//     <option key={country.name} value={country.name}>
//       {country.flag} {country.name}
//     </option>
//   ));

//   return (
//     <div>
//       <h1>Select Country</h1>
//       <CustomSelect>
//         <select onChange={handleSelectChange} value={selectedCountry}>
//           <option value="">Select a country</option>
//           {countryOptions}
//         </select>
//       </CustomSelect>
//       <div>{selectedCountry && <p>Selected Country: {selectedCountry}</p>}</div>
//     </div>
//   );
// };

// export default CountrySelect;
