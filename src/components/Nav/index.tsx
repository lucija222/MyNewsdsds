import { useContext, MouseEventHandler } from "react";
import { ToggleMenuContext } from "../../context/context";
import { SelectedCategoryContext } from "../../context/SelectedCategoryProvider";
import { FeaturedOrLatestTogglerContext } from "../../context/FeaturedOrLatestTogglerProvider";
import "./Nav.scss";

const Nav = () => {
    const { selectedCategory, setSelectedCategory } = useContext(SelectedCategoryContext);
    const { setIsMenuOpen, setIsHamburgerClicked } = useContext(ToggleMenuContext);
    const { featuredOrLatestToggler, setFeaturedOrLatestToggler } = useContext(
        FeaturedOrLatestTogglerContext
    );

    const handleNavClick: MouseEventHandler<HTMLLIElement> = (e) => {
        e.stopPropagation();
        setIsMenuOpen(false);
        setIsHamburgerClicked(false);
        setSelectedCategory(e.currentTarget.id);

        if (featuredOrLatestToggler === "Latest") {
            setFeaturedOrLatestToggler("Featured");
        }
    };

    return (
        <nav>
            <ul>
                <li
                    id="home"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "home" ? "li selected-nav" : "li"
                    }
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.7557 9.41083L10.589 0.244164C10.2636 -0.0811541 9.7361 -0.0811541 9.41068 0.244164L0.244013 9.41083C0.00575645 9.64916 -0.0655052 10.0075 0.0634481 10.3189C0.192401 10.6302 0.496183 10.8333 0.83318 10.8333H1.87485C1.98991 10.8333 2.08318 10.9266 2.08318 11.0417V19.1667C2.08318 19.6269 2.45628 20 2.91651 20H7.70818C7.82324 20 7.91651 19.9067 7.91651 19.7917V15.8333C7.91651 14.6827 8.84925 13.75 9.99985 13.75C11.1504 13.75 12.0832 14.6827 12.0832 15.8333V19.7917C12.0832 19.9067 12.1765 20 12.2915 20H17.0832C17.5434 20 17.9165 19.6269 17.9165 19.1667V11.0417C17.9165 10.9266 18.0098 10.8333 18.1248 10.8333H19.1665C19.5035 10.8333 19.8073 10.6302 19.9362 10.3189C20.0652 10.0075 19.9939 9.64916 19.7557 9.41083Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>Home</span>
                </li>
                <li
                    id="general"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "general"
                            ? "li selected-nav"
                            : "li"
                    }
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="News"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5 5.83332C18.8807 5.83332 20 6.95261 20 8.33332V16.6667C20 18.2775 18.6942 19.5833 17.0833 19.5833H2.91667C1.30584 19.5833 0 18.2775 0 16.6667V2.08332C0 1.16285 0.746192 0.416656 1.66667 0.416656H14.1667C15.0871 0.416656 15.8333 1.16285 15.8333 2.08332V5.83332H17.5ZM1.66667 16.6667C1.66667 17.357 2.22631 17.9167 2.91667 17.9167L13.855 17.9158C13.9839 17.9158 14.1054 17.8561 14.1843 17.7543C14.2632 17.6524 14.2905 17.5198 14.2583 17.395C14.1972 17.1571 14.1664 16.9123 14.1667 16.6667V2.49999C14.1667 2.26987 13.9801 2.08332 13.75 2.08332H2.08333C1.85321 2.08332 1.66667 2.26987 1.66667 2.49999V16.6667ZM18.3333 16.6667C18.3333 17.357 17.7737 17.9167 17.0833 17.9167C16.393 17.9167 15.8333 17.357 15.8333 16.6667V7.91666C15.8333 7.68654 16.0199 7.49999 16.25 7.49999H17.5C17.9602 7.49999 18.3333 7.87309 18.3333 8.33332V16.6667ZM4.585 3.74999C4.0097 3.74999 3.54333 4.21636 3.54333 4.79166V8.74999C3.54333 9.32529 4.0097 9.79166 4.585 9.79166H7.29333C7.86863 9.79166 8.335 9.32529 8.335 8.74999V4.79166C8.335 4.21636 7.86863 3.74999 7.29333 3.74999H4.585ZM10.6258 5.03916H12.2925C12.6377 5.03916 12.9175 5.31898 12.9175 5.66416V6.08082C12.9175 6.426 12.6377 6.70582 12.2925 6.70582H10.6258C10.4603 6.70627 10.3014 6.64093 10.184 6.52419C10.0666 6.40745 10.0004 6.24886 10 6.08332V5.66666C9.99956 5.50039 10.0653 5.34078 10.1827 5.22305C10.3001 5.10532 10.4596 5.03916 10.6258 5.03916ZM12.2925 8.37249H10.6258C10.4596 8.37249 10.3001 8.43865 10.1827 8.55638C10.0653 8.67411 9.99956 8.83372 10 8.99999V9.41666C10.0014 9.76118 10.2813 10.0396 10.6258 10.0392H12.2925C12.6377 10.0392 12.9175 9.75933 12.9175 9.41416V8.99749C12.9175 8.65231 12.6377 8.37249 12.2925 8.37249ZM3.95917 11.7058H12.2925C12.6377 11.7058 12.9175 11.9856 12.9175 12.3308V12.7475C12.9175 13.0927 12.6377 13.3725 12.2925 13.3725H3.95917C3.61464 13.373 3.33471 13.0945 3.33333 12.75V12.3333C3.33289 12.1671 3.39863 12.0074 3.51605 11.8897C3.63346 11.772 3.7929 11.7058 3.95917 11.7058ZM10.2083 15.0392H3.95833C3.79214 15.0392 3.63279 15.1053 3.51551 15.2231C3.39822 15.3408 3.33267 15.5005 3.33333 15.6667V16.0833C3.33425 16.4277 3.61394 16.7063 3.95833 16.7058H10.2083C10.5535 16.7058 10.8333 16.426 10.8333 16.0808V15.6642C10.8333 15.319 10.5535 15.0392 10.2083 15.0392Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>General</span>
                </li>
                <li
                    id="business"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "business"
                            ? "li selected-nav"
                            : "li"
                    }
                >
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.5 18H2.5C1.11929 18 0 16.8487 0 15.4286V6C0 4.57984 1.11929 3.42857 2.5 3.42857H5.75C5.85409 3.42726 5.94127 3.34711 5.95417 3.24086L6.07417 2.25257C6.23052 0.965665 7.29411 -6.62922e-05 8.555 0H11.445C12.7049 0.00122977 13.7671 0.966637 13.9233 2.25257L14.0433 3.24086C14.0564 3.34807 14.145 3.42854 14.25 3.42857H17.5C18.8807 3.42857 20 4.57984 20 6V15.4286C20 16.8487 18.8807 18 17.5 18ZM8.555 1.71429C8.13449 1.71398 7.77964 2.03596 7.7275 2.46514L7.64 3.18857C7.63285 3.24941 7.65137 3.31049 7.69087 3.35636C7.73038 3.40224 7.78709 3.42852 7.84667 3.42857H12.1533C12.2129 3.42852 12.2696 3.40224 12.3091 3.35636C12.3486 3.31049 12.3672 3.24941 12.36 3.18857L12.2725 2.46514C12.2204 2.03596 11.8655 1.71398 11.445 1.71429H8.555ZM4.375 8.14286C4.375 7.78782 4.65482 7.5 5 7.5H15C15.3452 7.5 15.625 7.78782 15.625 8.14286V8.57143C15.625 8.92647 15.3452 9.21429 15 9.21429H5C4.65482 9.21429 4.375 8.92647 4.375 8.57143V8.14286ZM5 12.2143C4.65482 12.2143 4.375 12.5021 4.375 12.8571V13.2857C4.375 13.6408 4.65482 13.9286 5 13.9286H15C15.3452 13.9286 15.625 13.6408 15.625 13.2857V12.8571C15.625 12.5021 15.3452 12.2143 15 12.2143H5Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>Business</span>
                </li>
                <li
                    id="health"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "health" ? "li selected-nav" : "li"
                    }
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10C0 4.47715 4.47715 0 10 0C15.5204 0.00597071 19.994 4.47963 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM2.29167 10C2.29167 14.2572 5.74281 17.7083 10 17.7083C14.2553 17.7037 17.7037 14.2553 17.7083 10C17.7083 5.74281 14.2572 2.29167 10 2.29167C5.74281 2.29167 2.29167 5.74281 2.29167 10Z"
                            fill="#8d8d8c"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.54199 10C3.54199 6.43318 6.43349 3.54169 10.0003 3.54169C13.5655 3.54582 16.4545 6.43489 16.4587 10C16.4587 13.5669 13.5672 16.4584 10.0003 16.4584C6.43349 16.4584 3.54199 13.5669 3.54199 10ZM13.3337 11.25C13.5638 11.25 13.7503 11.0635 13.7503 10.8334V9.16669C13.7503 8.93657 13.5638 8.75002 13.3337 8.75002H11.667C11.4369 8.75002 11.2503 8.56347 11.2503 8.33335V6.66669C11.2503 6.43657 11.0638 6.25002 10.8337 6.25002H9.16699C8.93687 6.25002 8.75033 6.43657 8.75033 6.66669V8.33335C8.75033 8.56347 8.56378 8.75002 8.33366 8.75002H6.66699C6.43687 8.75002 6.25033 8.93657 6.25033 9.16669V10.8334C6.25033 11.0635 6.43687 11.25 6.66699 11.25H8.33366C8.56378 11.25 8.75033 11.4366 8.75033 11.6667V13.3334C8.75033 13.5635 8.93687 13.75 9.16699 13.75H10.8337C11.0638 13.75 11.2503 13.5635 11.2503 13.3334V11.6667C11.2503 11.4366 11.4369 11.25 11.667 11.25H13.3337Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>Health</span>
                </li>
                <li
                    id="science"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "science"
                            ? "li selected-nav"
                            : "li"
                    }
                >
                    <svg
                        width="17"
                        height="20"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.95136 6.57833C9.07988 6.50382 9.15896 6.36546 9.15854 6.21583L9.15194 5.41667C9.15194 5.18655 8.96716 5 8.73923 5H6.85976C6.50889 4.99999 6.19636 5.22394 6.08057 5.55833L1.84208 17.7792C1.79795 17.9066 1.81772 18.0477 1.89511 18.1578C1.97251 18.2679 2.09795 18.3333 2.23167 18.3333H12.7904C13.2462 18.3333 13.6158 18.7064 13.6158 19.1667C13.6158 19.6269 13.2462 20 12.7904 20H1.65141C1.11657 20.0002 0.614794 19.7388 0.305047 19.2986C-0.00469995 18.8584 -0.0840265 18.294 0.0922007 17.7842L5.4871 2.22417C5.63799 1.7897 6.10917 1.56099 6.5395 1.71333C6.96984 1.86567 7.19637 2.34137 7.04548 2.77583C6.99985 2.9041 7.01923 3.04678 7.09738 3.1579C7.17553 3.26903 7.30257 3.33454 7.43755 3.33333H8.74583C8.97377 3.33333 9.15854 3.14679 9.15854 2.91667V1.25C9.15854 0.559644 9.71286 0 10.3967 0H12.8729C13.5567 0 14.111 0.559644 14.111 1.25V2.91667C14.111 3.14679 14.2958 3.33333 14.5237 3.33333H15.3491C15.805 3.33333 16.1746 3.70643 16.1746 4.16667C16.1746 4.6269 15.805 5 15.3491 5H14.5237C14.2958 5 14.111 5.18655 14.111 5.41667V6.21583C14.1108 6.36563 14.1902 6.50403 14.319 6.57833C15.9807 7.53453 17.0048 9.31899 17 11.25C17 14.2415 14.5979 16.6667 11.6348 16.6667C8.67167 16.6667 6.26959 14.2415 6.26959 11.25C6.26512 9.31886 7.28946 7.53445 8.95136 6.57833ZM8.95219 11.6667C8.95219 12.0118 9.22935 12.2917 9.57125 12.2917C9.91314 12.2917 10.1903 12.0118 10.1903 11.6667C10.1903 11.3215 9.91314 11.0417 9.57125 11.0417C9.22935 11.0417 8.95219 11.3215 8.95219 11.6667ZM11.8411 14.375C11.4992 14.375 11.2221 14.0952 11.2221 13.75C11.2221 13.4048 11.4992 13.125 11.8411 13.125C12.183 13.125 12.4602 13.4048 12.4602 13.75C12.4602 13.9165 12.3944 14.0761 12.2774 14.1934C12.1604 14.3108 12.0019 14.3761 11.837 14.375H11.8411ZM12.6665 11.8275C12.6665 12.4028 13.1285 12.8692 13.6983 12.8692C14.2678 12.8682 14.7292 12.4024 14.7301 11.8275C14.7301 11.2522 14.2681 10.7858 13.6983 10.7858C13.1285 10.7858 12.6665 11.2522 12.6665 11.8275ZM10.8094 2.08333C10.8094 1.85321 10.9941 1.66667 11.2221 1.66667H12.0475C12.2754 1.66667 12.4602 1.85321 12.4602 2.08333V2.91667C12.4602 3.14679 12.2754 3.33333 12.0475 3.33333H11.2221C10.9941 3.33333 10.8094 3.14679 10.8094 2.91667V2.08333ZM12.4602 5.41667C12.4602 5.18655 12.2754 5 12.0475 5H11.2221C10.9941 5 10.8094 5.18655 10.8094 5.41667V7C10.8088 7.34367 10.5994 7.65177 10.2819 7.77583C9.38032 8.12779 8.65013 8.82074 8.24646 9.7075C8.21766 9.7721 8.22321 9.84703 8.26121 9.90659C8.29921 9.96615 8.36448 10.0022 8.43465 10.0025H14.8316C14.9018 10.0024 14.9671 9.96628 15.005 9.90662C15.0429 9.84696 15.0482 9.77195 15.019 9.7075C14.6158 8.8209 13.8858 8.12815 12.9843 7.77667C12.6679 7.65142 12.4599 7.34315 12.4602 7V5.41667Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>Science</span>
                </li>
                <li
                    id="sports"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "sports" ? "li selected-nav" : "li"
                    }
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10C0 4.47715 4.47715 0 10 0C15.5204 0.00597071 19.994 4.47963 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM11.0942 3.08583C10.9418 3.15231 10.8436 3.30296 10.8442 3.46917L10.84 5.62833C10.8397 5.76169 10.9032 5.88715 11.0108 5.96583L13.9275 8.0875C14.0568 8.18196 14.2288 8.19395 14.37 8.11833L15.9817 7.25417C16.1063 7.18731 16.1885 7.0618 16.2 6.92083L16.4325 4.29417C16.4429 4.17472 16.4013 4.0566 16.3183 3.97C15.583 3.1978 14.7133 2.56584 13.7517 2.105C13.6436 2.05326 13.5185 2.05053 13.4083 2.0975L11.0942 3.08583ZM3.69917 3.94917C4.43294 3.18332 5.29945 2.55681 6.25667 2.1C6.36471 2.04826 6.4898 2.04553 6.6 2.0925L8.92417 3.08333C9.0765 3.14981 9.17475 3.30046 9.17417 3.46667V5.62917C9.17299 5.7612 9.10931 5.88487 9.0025 5.9625L6.16917 8.0275C6.04433 8.11899 5.87907 8.13375 5.74 8.06583L4.04917 7.24C3.91787 7.17602 3.82966 7.04797 3.81667 6.9025L3.58333 4.27417C3.57317 4.15419 3.61541 4.03567 3.69917 3.94917ZM5.53417 14.81L6.47333 13.7617C6.57054 13.6518 6.60282 13.4989 6.55833 13.3592L5.49417 10.0708C5.46077 9.96854 5.38911 9.88314 5.29417 9.8325L3.54417 8.89333C3.37275 8.80111 3.16032 8.83986 3.0325 8.98667L1.42833 10.8333C1.35232 10.9231 1.31781 11.0409 1.33333 11.1575C1.47175 12.2024 1.79932 13.2133 2.3 14.1408C2.35708 14.2461 2.45665 14.3216 2.57333 14.3483L5.13 14.9375C5.27789 14.9718 5.43273 14.923 5.53417 14.81ZM13.14 16.2617L11.8575 18.4092C11.7959 18.5126 11.6926 18.5843 11.5742 18.6058C10.5436 18.7933 9.48775 18.7947 8.45667 18.61C8.33794 18.5887 8.23429 18.5169 8.1725 18.4133L6.885 16.265C6.7911 16.1082 6.81036 15.9085 6.9325 15.7725L7.87083 14.725C7.95004 14.6368 8.06309 14.5864 8.18167 14.5867H11.8425C11.9611 14.5864 12.0741 14.6368 12.1533 14.725L13.0908 15.7725C13.2126 15.9083 13.2318 16.1075 13.1383 16.2642L13.14 16.2617ZM17.4283 14.3458C17.545 14.3191 17.6446 14.2436 17.7017 14.1383L17.7 14.1408C18.2014 13.2148 18.5301 12.2053 18.67 11.1617C18.6858 11.0432 18.65 10.9236 18.5717 10.8333L16.97 8.98C16.8423 8.83361 16.6304 8.79489 16.4592 8.88667L14.7092 9.82583C14.6142 9.87647 14.5426 9.96188 14.5092 10.0642L13.445 13.3525C13.3985 13.4932 13.4302 13.6481 13.5283 13.7592L14.4675 14.8075C14.5689 14.9205 14.7238 14.9693 14.8717 14.935L17.4283 14.3458Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>Sports</span>
                </li>
                <li
                    id="technology"
                    onClick={handleNavClick}
                    className={
                        selectedCategory === "technology"
                            ? "li selected-nav"
                            : "li"
                    }
                >
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="TV-Guide"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.125 0.458313H1.875C0.840037 0.45969 0.0013772 1.29835 0 2.33331V11.5C0.0013772 12.5349 0.840037 13.3736 1.875 13.375H8.54167C8.77179 13.375 8.95833 13.5615 8.95833 13.7916V15.0416C8.95833 15.2718 8.77179 15.4583 8.54167 15.4583H6.04167C5.46637 15.4583 5 15.9247 5 16.5C5 17.0753 5.46637 17.5416 6.04167 17.5416H13.9583C14.5336 17.5416 15 17.0753 15 16.5C15 15.9247 14.5336 15.4583 13.9583 15.4583H11.4583C11.2282 15.4583 11.0417 15.2718 11.0417 15.0416V13.7916C11.0417 13.5615 11.2282 13.375 11.4583 13.375H18.125C19.16 13.3736 19.9986 12.5349 20 11.5V2.33331C19.9986 1.29835 19.16 0.45969 18.125 0.458313ZM17.9167 10.875C17.9167 11.1051 17.7301 11.2916 17.5 11.2916H2.5C2.26988 11.2916 2.08333 11.1051 2.08333 10.875V2.95831C2.08333 2.72819 2.26988 2.54165 2.5 2.54165H17.5C17.7301 2.54165 17.9167 2.72819 17.9167 2.95831V10.875Z"
                            fill="#8d8d8c"
                        />
                    </svg>
                    <span>Technology</span>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
