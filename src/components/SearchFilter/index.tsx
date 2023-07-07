import { useState, FormEventHandler } from "react";
import "./SearchFilter.scss";

interface SearchFilterProps {
    menuFormClassName?: string;
}

const SearchFilter = ({ menuFormClassName }: SearchFilterProps) => {
    const [searchFilterInput, setSearchFilterInput] = useState("");

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.target as HTMLInputElement;
        setSearchFilterInput(target.value);
        //Mora se okinuti fetch sa odredenim linkom
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className={menuFormClassName ? menuFormClassName : ""}
        >
            <div>
                <svg
                    width="15.71"
                    height="15.71"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.5893 14.4126L11.2366 10.06C13.2081 7.46844 12.8344 3.79259 10.3818 1.65076C7.92925 -0.491066 4.23656 -0.366327 1.93411 1.93612C-0.368342 4.23857 -0.49308 7.93127 1.64875 10.3838C3.79057 12.8364 7.46643 13.2101 10.058 11.2386L14.4106 15.5913C14.7384 15.9111 15.2615 15.9111 15.5893 15.5913C15.9145 15.2657 15.9145 14.7382 15.5893 14.4126ZM1.83326 6.33329C1.83326 3.84801 3.84798 1.83329 6.33326 1.83329C8.81854 1.83329 10.8333 3.84801 10.8333 6.33329C10.8333 8.81857 8.81854 10.8333 6.33326 10.8333C3.8492 10.8304 1.8362 8.81735 1.83326 6.33329Z"
                        fill="#A5A5A4"
                    />
                </svg>
                <input type="search" id="search" placeholder="Search news" />
            </div>
            <button type="submit" className="form-btn">
                SEARCH
            </button>
        </form>
    );
};

export default SearchFilter;