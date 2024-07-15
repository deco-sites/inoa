import { useState } from "preact/hooks";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";

export interface Props {
    bgEffect?: boolean;
    logo?: ImageWidget;
    logoDesktop?: ImageWidget;
    links?: {
        url?: string;
        text?: string;
        activePage?: boolean;
    }[]
}


const Header = ({ bgEffect = false, logo, logoDesktop, links = [] }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const getLinkClass = (activePage: boolean | undefined) => {
        if (activePage) return 'text-[#53bbed]';
        if (bgEffect) return 'text-white hover:text-[#53bbed}';
        return 'text-[#666666]';
    };

    return (
        <div className={`navbar p-0 bg-base-100 flex flex-col items-center ${bgEffect ? 'bg-effect' : ''}`}>
            <div className="bg-top-dots w-full flex flex-col">
                <div className="flex w-full justify-between items-end mt-[15px] md:mt-[30px] md:mb-[35px] px-[15px] md:max-w-[970px] md:mx-auto">
                    <div className="navbar-start">
                        {logo && logoDesktop &&
                            <>
                                <a href="/">
                                    <Image
                                        class="md:hidden"
                                        src={logo}
                                        alt="logo"
                                        height={61}
                                        width={125} /><Image
                                        class="hidden md:block w-[192px] h-[95px]"
                                        src={logoDesktop}
                                        alt="logo"
                                        height={95}
                                        width={192} />
                                </a></>

                        }
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links.map((item) => (
                                <li>
                                    <a class={`${getLinkClass(item.activePage)} text-base font-semibold md:px-[22px]`} href={item.url}> {item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-end w-[unset] md:hidden">
                        <div className="dropdown border-[1px] border-solid border-[#033648] h-[34px] flex items-center">
                            <button className={`btn btn-ghost p-0 px-[10px] md:hidden ${bgEffect ? 'border-white rounded-none h-[unset] min-h-[unset] p-[5px]' : ''} ${isDropdownOpen ? 'bg-white' : ''}`} onClick={toggleDropdown}>
                                <Icon id="MenuMobileIcon" size={24} strokeWidth={2} className={`${bgEffect && !isDropdownOpen ? 'text-white' : 'text-black'}`} />
                            </button>
                        </div>
                    </div>
                </div>
                <ul className={`w-full my-2 flex flex-col md:hidden items-baseline px-[15px] overflow-hidden ${isDropdownOpen ? 'slide-down' : 'slide-up'}`}>
                    {links.map((item) => (
                        <li class="py-2">
                            <a class={`${getLinkClass(item.activePage)} text-base font-semibold`} href={item.url}> {item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;