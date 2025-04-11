import React, {  useState } from "react";


const links = [
  {
    label: "Home",
    dropdown: [],
  },
  {
    label: "About",
    dropdown: [],
  },
  {
    label: "Products",
    dropdown: [
      {
        label: "Apparel",
        submenu: [
          {
            label: "Ethnic",
            innermenu: [
              { label: "Men" },
              { label: "Women" },
              { label: "Kids" },
            ],
          },
          {
            label: "Western",
            innermenu: [
              { label: "Men" },
              { label: "Women" },
              { label: "Kids" },
            ],
          },
        ],
      },
      {
        label: "Bags",
        submenu: [
          { label: "Velluto", innermenu: [] },
          { label: "Bagora", innermenu: [] },
          { label: "Lunna", innermenu: [] },
          { label: "NOMAD", innermenu: [] },
        ],
      },
      {
        label: "Toys",
        submenu: [
          { label: "Snugglekins", innermenu: [] },
          { label: "BumbleBop", innermenu: [] },
          { label: "Tiny Sprout", innermenu: [] },
          { label: "Fuzzle & Co.", innermenu: [] },
        ],
      },
    ],
  },
  {
    label: "Brands",
    dropdown: [],
  },
  {
    label: "Contact",
    dropdown: [],
  },
];
export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [menu_ctr, setMenu_ctr] = useState(false);

  return (
    <div className="navbar_container">
      <div className="navbar_section1">
        <div className="navbar_contacts">
          <a href="tel:+915821582215">+91 58215 82215</a>
          <a href="mailto:rupexim@gmail.com">rupexim@gmail.com</a>
        </div>
        <div className="navbar_social_icons">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="navbar_section2">
        <svg
          width="131"
          height="33"
          viewBox="0 0 131 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.54688 24.1719C5.54688 24.4844 5.47917 24.7031 5.34375 24.8281C5.21875 24.9427 5 25 4.6875 25H1.35938C1.04688 25 0.822917 24.9427 0.6875 24.8281C0.5625 24.7031 0.5 24.4844 0.5 24.1719V6.78125C0.5 5.73958 0.59375 4.91667 0.78125 4.3125C0.979167 3.69792 1.35417 3.26042 1.90625 3C2.46875 2.72917 3.28646 2.59375 4.35938 2.59375H8.5C13.9375 2.59375 16.6562 4.68229 16.6562 8.85938C16.6562 10.1302 16.4427 11.1719 16.0156 11.9844C15.5885 12.7969 15.0573 13.4323 14.4219 13.8906C13.7865 14.3385 13.1615 14.6771 12.5469 14.9062V14.9844C13.2448 15.4427 13.9062 16.0469 14.5312 16.7969C15.1667 17.5365 15.7396 18.3438 16.25 19.2188C16.7604 20.0833 17.1927 20.9427 17.5469 21.7969C17.901 22.6406 18.1458 23.3958 18.2812 24.0625C18.3438 24.375 18.3438 24.6094 18.2812 24.7656C18.2292 24.9219 18.0521 25 17.75 25H14.1406C13.8698 25 13.6302 24.9427 13.4219 24.8281C13.224 24.7135 13.0417 24.4479 12.875 24.0312C12.0833 22.0417 11.1719 20.4219 10.1406 19.1719C9.10938 17.9115 8.11458 16.901 7.15625 16.1406C6.54167 15.651 6.23438 15.3021 6.23438 15.0938C6.23438 14.9271 6.33333 14.6979 6.53125 14.4062C6.65625 14.2292 6.83854 14.0156 7.07812 13.7656C7.31771 13.5156 7.52604 13.3281 7.70312 13.2031C7.88021 13.0781 8.02083 13 8.125 12.9688C8.23958 12.9375 8.41146 12.9219 8.64062 12.9219C9.41146 12.9219 10.0521 12.6562 10.5625 12.125C11.0833 11.5938 11.3438 10.7552 11.3438 9.60938C11.3438 8.52604 11.0677 7.73438 10.5156 7.23438C9.97396 6.72396 9.22396 6.46875 8.26562 6.46875H7.32812C6.64062 6.46875 6.17188 6.61458 5.92188 6.90625C5.67188 7.19792 5.54688 7.69792 5.54688 8.40625V24.1719ZM26.25 25.3906C22.5417 25.3906 20.6875 23.1458 20.6875 18.6562L20.6719 10.7188C20.6719 10.4688 20.724 10.276 20.8281 10.1406C21.2656 9.56771 21.9062 8.94792 22.75 8.28125C22.8958 8.17708 23.026 8.125 23.1406 8.125C23.276 8.125 23.4062 8.17708 23.5312 8.28125C23.9792 8.625 24.3542 8.94792 24.6562 9.25C24.9688 9.55208 25.2344 9.84896 25.4531 10.1406C25.5573 10.276 25.6094 10.4688 25.6094 10.7188V18.2188C25.6094 20.4792 26.5052 21.6094 28.2969 21.6094C29.1823 21.6094 29.8906 21.3021 30.4219 20.6875C30.9531 20.0625 31.2188 19.2188 31.2188 18.1562V10.7188C31.2188 10.4688 31.2708 10.276 31.375 10.1406C31.8125 9.56771 32.4531 8.94792 33.2969 8.28125C33.4427 8.17708 33.5729 8.125 33.6875 8.125C33.8229 8.125 33.9531 8.17708 34.0781 8.28125C34.526 8.625 34.901 8.94792 35.2031 9.25C35.5156 9.55208 35.7812 9.84896 36 10.1406C36.1042 10.276 36.1562 10.4688 36.1562 10.7188V24.2812C36.1562 24.4792 36.0885 24.651 35.9531 24.7969C35.8177 24.9323 35.6458 25 35.4375 25H33.0938C32.9271 25 32.776 24.9792 32.6406 24.9375C32.5156 24.8854 32.3958 24.7917 32.2812 24.6562L31.3125 23.4062H31.2031C31.0365 23.6458 30.776 23.9219 30.4219 24.2344C30.0781 24.5469 29.5729 24.8177 28.9062 25.0469C28.25 25.276 27.3646 25.3906 26.25 25.3906ZM50.3438 8.60938C51.8646 8.60938 53.1146 8.95312 54.0938 9.64062C55.0833 10.3177 55.8177 11.2552 56.2969 12.4531C56.7865 13.6406 57.0312 15.0052 57.0312 16.5469C57.0312 18.2135 56.7448 19.7135 56.1719 21.0469C55.6094 22.3802 54.776 23.4375 53.6719 24.2188C52.5677 25 51.1979 25.3906 49.5625 25.3906C48.7188 25.3906 48.0208 25.2917 47.4688 25.0938C46.9271 24.9062 46.4896 24.6823 46.1562 24.4219C45.8333 24.151 45.5781 23.9062 45.3906 23.6875H45.3281V30.3438C45.3281 30.5938 45.276 30.7865 45.1719 30.9219C44.7344 31.4948 44.0938 32.1146 43.25 32.7812C43.1042 32.8854 42.974 32.9375 42.8594 32.9375C42.7344 32.9375 42.6042 32.8854 42.4688 32.7812C42.0208 32.4375 41.6406 32.1146 41.3281 31.8125C41.026 31.5104 40.7656 31.2135 40.5469 30.9219C40.4427 30.7865 40.3906 30.5938 40.3906 30.3438V11.0781C40.3906 10.8281 40.4427 10.6354 40.5469 10.5C40.7656 10.2083 41.026 9.91146 41.3281 9.60938C41.6406 9.30729 42.0208 8.98438 42.4688 8.64062C42.6042 8.53646 42.7448 8.48438 42.8906 8.48438C43.026 8.48438 43.1667 8.53646 43.3125 8.64062C43.75 8.98438 44.125 9.3125 44.4375 9.625C44.75 9.9375 45.026 10.2604 45.2656 10.5938H45.3438C45.5208 10.375 45.7917 10.1094 46.1562 9.79688C46.5208 9.48438 47.0365 9.20833 47.7031 8.96875C48.3802 8.72917 49.2604 8.60938 50.3438 8.60938ZM48.4219 21.4062C49.5469 21.4062 50.4167 21.0156 51.0312 20.2344C51.6562 19.4427 51.9688 18.3021 51.9688 16.8125C51.9688 14 50.8125 12.5938 48.5 12.5938C47.5208 12.5938 46.7969 12.7969 46.3281 13.2031C45.8594 13.599 45.526 14.0208 45.3281 14.4688V17.8594C45.3281 18.8698 45.5885 19.7135 46.1094 20.3906C46.6302 21.0677 47.401 21.4062 48.4219 21.4062ZM68.2344 25.3906C66.474 25.3906 64.9427 25.1094 63.6406 24.5469C62.3385 23.974 61.3281 23.0885 60.6094 21.8906C59.8906 20.6927 59.5312 19.1458 59.5312 17.25C59.5312 14.4062 60.2604 12.2552 61.7188 10.7969C63.1771 9.33854 65.1146 8.60938 67.5312 8.60938C69.1042 8.60938 70.4323 8.89062 71.5156 9.45312C72.6094 10.0156 73.4375 10.7917 74 11.7812C74.5729 12.7708 74.8594 13.901 74.8594 15.1719C74.8594 16.4115 74.5417 17.276 73.9062 17.7656C73.2708 18.2552 72.3438 18.5 71.125 18.5H64.4219C64.5052 19.5729 64.8958 20.3906 65.5938 20.9531C66.3021 21.5156 67.2604 21.7969 68.4688 21.7969C69.4271 21.7969 70.1927 21.6562 70.7656 21.375C71.349 21.0833 71.7552 20.8542 71.9844 20.6875C72.1823 20.5417 72.4062 20.474 72.6562 20.4844C72.8542 20.4844 73.1354 20.526 73.5 20.6094C73.875 20.6823 74.2448 20.8229 74.6094 21.0312C74.8698 21.1667 75 21.3542 75 21.5938C75 21.7292 74.974 21.9219 74.9219 22.1719C74.8906 22.3177 74.8385 22.5312 74.7656 22.8125C74.6927 23.0833 74.599 23.3385 74.4844 23.5781C74.4219 23.6927 74.3229 23.8021 74.1875 23.9062C73.9792 24.0521 73.6406 24.2448 73.1719 24.4844C72.7135 24.724 72.0833 24.9323 71.2812 25.1094C70.4792 25.2969 69.4635 25.3906 68.2344 25.3906ZM64.3906 15.2969H69.4844C70.0156 15.2969 70.2812 15.0521 70.2812 14.5625C70.2812 13.8229 70.0469 13.2031 69.5781 12.7031C69.1198 12.1927 68.4271 11.9375 67.5 11.9375C66.4896 11.9375 65.7448 12.2604 65.2656 12.9062C64.7969 13.5521 64.5052 14.349 64.3906 15.2969ZM85.0469 19.5781C83.9427 20.2135 83.1771 20.9062 82.75 21.6562C82.3229 22.4062 82.1094 23.3281 82.1094 24.4219C82.1094 24.6406 82.0781 24.7917 82.0156 24.875C81.9531 24.9583 81.8177 25 81.6094 25H77.9688C77.5104 25 77.2812 24.7031 77.2812 24.1094C77.2812 22.6927 77.5677 21.4271 78.1406 20.3125C78.724 19.1979 79.7448 18.2031 81.2031 17.3281C80.099 16.7135 79.2292 15.8802 78.5938 14.8281C77.9688 13.776 77.6562 12.6615 77.6562 11.4844V11.2344C77.6562 10.9844 77.7083 10.7917 77.8125 10.6562C78.25 10.0833 78.8906 9.46354 79.7344 8.79688C79.8802 8.69271 80.0104 8.64062 80.125 8.64062C80.2604 8.64062 80.3906 8.69271 80.5156 8.79688C80.9635 9.14062 81.3385 9.46354 81.6406 9.76562C81.9531 10.0677 82.2188 10.3646 82.4375 10.6562C82.5417 10.7917 82.5938 10.9844 82.5938 11.2344V11.4844C82.5938 12.974 83.4583 14.125 85.1875 14.9375C85.9792 14.5 86.5365 13.9948 86.8594 13.4219C87.1927 12.849 87.3594 12.2031 87.3594 11.4844V11.2344C87.3594 10.9844 87.4115 10.7917 87.5156 10.6562C87.9323 10.0833 88.5573 9.46354 89.3906 8.79688C89.526 8.69271 89.651 8.64062 89.7656 8.64062C89.901 8.64062 90.026 8.69271 90.1406 8.79688C90.5781 9.14062 90.9479 9.46354 91.25 9.76562C91.5521 10.0677 91.8073 10.3646 92.0156 10.6562C92.1198 10.7917 92.1719 10.9844 92.1719 11.2344V11.4844C92.1719 12.776 91.8854 13.8906 91.3125 14.8281C90.7396 15.7656 89.9896 16.5417 89.0625 17.1562C90.3542 17.8854 91.2969 18.849 91.8906 20.0469C92.4844 21.2344 92.7812 22.5885 92.7812 24.1094C92.7812 24.4635 92.7396 24.7031 92.6562 24.8281C92.5729 24.9427 92.3906 25 92.1094 25H88.3906C88.026 25 87.8438 24.75 87.8438 24.25C87.8438 23.5729 87.776 22.9688 87.6406 22.4375C87.5156 21.9062 87.2552 21.4115 86.8594 20.9531C86.4635 20.4844 85.8594 20.026 85.0469 19.5781ZM95.2656 3.75C95.2656 3.61458 95.3073 3.49479 95.3906 3.39062C95.474 3.28646 95.5833 3.15104 95.7188 2.98438C96.0104 2.65104 96.349 2.30208 96.7344 1.9375C97.1198 1.5625 97.5104 1.20312 97.9062 0.859375C98.1562 0.661458 98.3438 0.5625 98.4688 0.5625C98.5938 0.5625 98.7865 0.661458 99.0469 0.859375C99.8906 1.58854 100.609 2.29688 101.203 2.98438C101.339 3.14062 101.448 3.27604 101.531 3.39062C101.625 3.49479 101.672 3.61458 101.672 3.75C101.672 3.88542 101.625 4.00521 101.531 4.10938C101.448 4.21354 101.333 4.35417 101.188 4.53125C100.906 4.85417 100.578 5.20312 100.203 5.57812C99.8281 5.94271 99.4427 6.29167 99.0469 6.625C98.901 6.75 98.7865 6.83333 98.7031 6.875C98.6198 6.90625 98.5417 6.92188 98.4688 6.92188C98.3958 6.92188 98.3177 6.90625 98.2344 6.875C98.1615 6.83333 98.0417 6.75 97.875 6.625C97.4583 6.29167 97.0677 5.94271 96.7031 5.57812C96.3385 5.20312 96.0104 4.84375 95.7188 4.5C95.5833 4.33333 95.474 4.20312 95.3906 4.10938C95.3073 4.00521 95.2656 3.88542 95.2656 3.75ZM100.922 24.1719C100.922 24.4844 100.854 24.7031 100.719 24.8281C100.594 24.9427 100.375 25 100.062 25H96.8438C96.5312 25 96.3073 24.9427 96.1719 24.8281C96.0469 24.7031 95.9844 24.4844 95.9844 24.1719V9.82812C95.9844 9.51562 96.0469 9.30208 96.1719 9.1875C96.3073 9.0625 96.5312 9 96.8438 9H100.062C100.375 9 100.594 9.0625 100.719 9.1875C100.854 9.30208 100.922 9.51562 100.922 9.82812V24.1719ZM119.484 10.6406C119.87 10.1719 120.464 9.71875 121.266 9.28125C122.078 8.83333 123.219 8.60938 124.688 8.60938C126.771 8.60938 128.276 9.14583 129.203 10.2188C130.13 11.2917 130.594 12.901 130.594 15.0469V24.1719C130.594 24.4844 130.526 24.7031 130.391 24.8281C130.266 24.9427 130.047 25 129.734 25H126.516C126.203 25 125.979 24.9427 125.844 24.8281C125.719 24.7031 125.656 24.4844 125.656 24.1719V15.8594C125.656 14.6927 125.443 13.8594 125.016 13.3594C124.589 12.849 123.948 12.5938 123.094 12.5938C122.333 12.5938 121.729 12.7656 121.281 13.1094C120.844 13.4427 120.531 13.8958 120.344 14.4688V24.1719C120.344 24.4844 120.276 24.7031 120.141 24.8281C120.016 24.9427 119.797 25 119.484 25H116.266C115.953 25 115.729 24.9427 115.594 24.8281C115.469 24.7031 115.406 24.4844 115.406 24.1719V15.8594C115.406 14.724 115.172 13.8958 114.703 13.375C114.234 12.8542 113.62 12.5938 112.859 12.5938C112.141 12.5938 111.562 12.7708 111.125 13.125C110.688 13.4792 110.349 13.9271 110.109 14.4688V24.1719C110.109 24.4844 110.042 24.7031 109.906 24.8281C109.781 24.9427 109.562 25 109.25 25H106.031C105.719 25 105.495 24.9427 105.359 24.8281C105.234 24.7031 105.172 24.4844 105.172 24.1719V11.0781C105.172 10.8281 105.224 10.6354 105.328 10.5C105.547 10.2083 105.807 9.91146 106.109 9.60938C106.422 9.30729 106.802 8.98438 107.25 8.64062C107.385 8.53646 107.516 8.48438 107.641 8.48438C107.755 8.48438 107.885 8.53646 108.031 8.64062C108.469 8.98438 108.844 9.3125 109.156 9.625C109.469 9.9375 109.745 10.2604 109.984 10.5938H110.062C110.417 10.1458 110.969 9.70312 111.719 9.26562C112.469 8.82812 113.542 8.60938 114.938 8.60938C116.271 8.60938 117.26 8.8125 117.906 9.21875C118.552 9.61458 119.078 10.0885 119.484 10.6406Z"
            fill="black"
          />
        </svg>

        <div className="navbar_section2_desktop_menu">
          {links.map((link, idx) => {
            return (
              <a
                href="/"
                key={idx}
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.label}
                {link.dropdown.length !== 0 && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="black"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
                {activeDropdown === idx && link.dropdown.length !== 0 && (
                  <div
                    className="dropdown"
                    onMouseEnter={() => setActiveDropdown(idx)}
                  >
                    {link.dropdown.map((item, subIdx) => (
                      <div key={subIdx} className="dropdown__item">
                        {item.label}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="black"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        {item.submenu.length !== 0 && (
                          <div
                            className="semi-dropdown"
                            onMouseEnter={() => setActiveDropdown(idx)}
                          >
                            {item.submenu.map((subItem, subSubIdx) => (
                              <div
                                key={subSubIdx}
                                className="semi-dropdown__item"
                              >
                                {subItem.label}
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.5 15L12.5 10L7.5 5"
                                    stroke="black"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                {subItem.innermenu.length !== 0 && (
                                  <div
                                    className="semi-dropdown2"
                                    onMouseEnter={() => setActiveDropdown(idx)}
                                  >
                                    {subItem.innermenu.map(
                                      (subItem1, subSubIdx1) => (
                                        <div
                                          key={subSubIdx1}
                                          className="semi-dropdown2__item2"
                                        >
                                          {subItem1.label}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </a>
            );
          })}
        </div>
        {/* <div className="nav_bar_dropdown_menu" ref={dropdownRef}>
          <div
            className="nav_bar_dropdown_menu_item"
            onMouseEnter={(e) => {
              handleHover2(e);
            }}
          >
            <div>Apparel</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="nav_bar_dropdown_menu_item"
            // onMouseEnter={(e) => {
            //   handleHover2(e);
            // }}
          >
            <div>Bags</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="nav_bar_dropdown_menu_item"
            // onMouseEnter={(e) => {
            //   handleHover2(e);
            // }}
          >
            <div>Toys</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="nav_bar_dropdown_menu" ref={dropdownRef2}>
          <div
            className="nav_bar_dropdown_menu_item"
            onMouseEnter={(e) => {
              handleHover3(e);
            }}
          >
            <div>Ethnic</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="nav_bar_dropdown_menu_item"
            onMouseEnter={(e) => {
              handleHover3(e);
            }}
          >
            <div>Western</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="nav_bar_dropdown_menu" ref={dropdownRef3}>
          <div className="nav_bar_dropdown_menu_item">
            <div>Men</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="nav_bar_dropdown_menu_item">
            <div>Women</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="nav_bar_dropdown_menu_item">
            <div>Kids</div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="black"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div> */}

        <div className="navbar_section2_search_container">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7958 19.2041L16.3436 14.75C17.6785 13.0104 18.3018 10.8282 18.0869 8.64606C17.872 6.46389 16.8352 4.44515 15.1866 2.99936C13.538 1.55356 11.4013 0.78898 9.20972 0.860705C7.01817 0.932429 4.93595 1.83509 3.38546 3.38558C1.83497 4.93607 0.932307 7.01829 0.860583 9.20984C0.788858 11.4014 1.55344 13.5382 2.99924 15.1867C4.44503 16.8353 6.46377 17.8722 8.64594 18.087C10.8281 18.3019 13.0103 17.6787 14.7499 16.3437L19.2058 20.8006C19.3105 20.9053 19.4347 20.9883 19.5714 21.0449C19.7081 21.1015 19.8547 21.1307 20.0027 21.1307C20.1507 21.1307 20.2972 21.1015 20.434 21.0449C20.5707 20.9883 20.6949 20.9053 20.7996 20.8006C20.9042 20.696 20.9872 20.5717 21.0439 20.435C21.1005 20.2983 21.1296 20.1517 21.1296 20.0037C21.1296 19.8557 21.1005 19.7092 21.0439 19.5725C20.9872 19.4357 20.9042 19.3115 20.7996 19.2069L20.7958 19.2041ZM3.12487 9.49999C3.12487 8.23914 3.49876 7.0066 4.19925 5.95823C4.89975 4.90987 5.89539 4.09277 7.06026 3.61026C8.22514 3.12775 9.50694 3.00151 10.7436 3.24749C11.9802 3.49347 13.1161 4.10063 14.0077 4.99219C14.8992 5.88375 15.5064 7.01966 15.7524 8.25629C15.9984 9.49292 15.8721 10.7747 15.3896 11.9396C14.9071 13.1045 14.09 14.1001 13.0416 14.8006C11.9933 15.5011 10.7607 15.875 9.49987 15.875C7.80965 15.8733 6.18915 15.201 4.99398 14.0059C3.79882 12.8107 3.12661 11.1902 3.12487 9.49999Z"
              fill="black"
              fill-opacity="0.4"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for products..."
            className="navbar_section2_search"
          />
        </div>

        <div
          className="navbar_section2_mobile_menu"
          onClick={() => {
            setMenu_ctr((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xlink="http://www.w3.org/1999/xlink"
            width="35"
            height="35"
            x="0"
            y="0"
            viewBox="0 0 24 24"
          >
            <g transform="matrix(-1,2.4492935982947064e-16,2.4492935982947064e-16,1,23.999999999999996,-3.552713678800501e-15)">
              <linearGradient
                id="a"
                x1="12"
                x2="12"
                y1="5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd6700"></stop>
                <stop offset="1" stop-color="#85a389"></stop>
              </linearGradient>
              <path
                fill="url(#a)"
                fill-rule="evenodd"
                d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                clip-rule="evenodd"
                opacity="1"
                data-original="url(#a)"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      {menu_ctr && (
        <div className="navbar_section2_list">
          <a href="/">Home</a>
          <a href="/">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="21"
              height="21"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm4.53 9.28-3.646 3.646c-.243.244-.563.365-.884.365s-.641-.121-.884-.365L7.47 11.53a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">
            Protfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="21"
              height="21"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm4.53 9.28-3.646 3.646c-.243.244-.563.365-.884.365s-.641-.121-.884-.365L7.47 11.53a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">
            Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="21"
              height="21"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm4.53 9.28-3.646 3.646c-.243.244-.563.365-.884.365s-.641-.121-.884-.365L7.47 11.53a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">Contact</a>
        </div>
      )}
    </div>
  );
};
