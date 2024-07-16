import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "./Icon.tsx";
import { useState } from "preact/hooks";

export interface Props {
    backgroundDotsEffect?: boolean;
    title?: HTMLWidget;
    titleMobile?: HTMLWidget;
    tabs?: Tabs[];
    content?: Content[];
}

interface Tabs {
    title?: string;
    tabsContent?: {
        link?: string;
        text?: string;
        /**
          * @default false
          * @description turn true to highlight the chosen tab
        */
        highlightTab?: boolean;
    }[]
}
interface Content {
    topImage?: ImageWidget;
    title?: string;
    /** @format html */
    textContent?: string;
    list?: Lists[];
}

interface Lists {
    image?: ImageWidget;
    title?: string;
    /** @format html */
    textContent?: string;
    linkText?: string;
    linkUrl?: string;
}

function TabsCustom({ backgroundDotsEffect, title, titleMobile, tabs, content }: Props) {

    const [openTab, setOpenTab] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        setOpenTab(openTab === index ? null : index);
    };

    return (
        <div>
            <div className={`py-20 flex flex-col w-full items-start justify-center px-[15px] ${backgroundDotsEffect ? 'bg-top-bottom-dots' : ''}`}>
                <div className="md:max-w-[970px] md:mx-auto w-full">
                    {titleMobile &&
                        <h1 className="leading-[0.1] md:hidden mb-[55px] tracking-[-1px]" dangerouslySetInnerHTML={{
                            __html: titleMobile,
                        }}></h1>
                    }
                    {title &&
                        <h1 className="hidden md:block mb-[55px] tracking-[-1px]" dangerouslySetInnerHTML={{
                            __html: title,
                        }}></h1>
                    }

                    <div className="flex flex-col md:flex-row">
                        <div className="w-64 mb-[20px] md:mb-0 md:flex md:flex-col md:gap-6">
                            {tabs && tabs.map((tab, index) => (
                                <div key={index} className="w-64">
                                    <input type="radio" name="my-accordion-1" id={`tab-${index}`} className="hidden" />
                                    <label htmlFor={`tab-${index}`} className="flex items-center text-[28px] cursor-pointer text-[#005984] font-light" onClick={() => handleTabClick(index)}>
                                        {tab.title}
                                        <Icon id={"ArrowRight"} size={24} strokeWidth={3} className={`ml-[10px] ${openTab === index ? 'rotate-90' : ''}`} />
                                    </label>
                                    <div className={`${openTab === index ? 'max-h-screen' : 'max-h-0'} transition-all duration-1000 ease-in-out overflow-hidden bg-white`}>
                                        <ul className="list-none">
                                            {tab.tabsContent && tab.tabsContent.map((contentItem, idx) => (
                                                <li key={idx} className={`tabsLi text-lg text-[#005984] leading-[45px] pl-[40px] ${contentItem.highlightTab ? "font-bold" : ''}`}>
                                                    <a href={contentItem.link} className={`${contentItem.link ? "hover:underline" : ''}`}>{contentItem.text}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="">
                            {content && content.map((contentItem, idx) => (
                                <div key={idx} className="mb-8">
                                    {contentItem.topImage && (
                                        <Image
                                            src={contentItem.topImage}
                                            alt={"Imagem ilustrativa para o conteúdo do texto"}
                                            height={100}
                                            width={1000}
                                            className="w-full"
                                        />
                                    )}
                                    <h2 className="text-[32px] text-[#005984] font-bold mt-4">{contentItem.title}</h2>
                                    {contentItem && <div className="leading-[1]" dangerouslySetInnerHTML={{ __html: contentItem.textContent }}></div>}

                                    <ul className="list-none mt-4 md:mt-[50px]">
                                        {contentItem.list && contentItem.list.map((listItem, listIdx) => (
                                            <li key={listIdx} className={`relative contentTabsLi flex flex-col items-center md:flex-row md:items-start py-[42px] px-[25px] ${listIdx % 2 === 0 ? "bg-[#e9e9e9]" : "bg-[#f6f6f6]"}`}>
                                                {listItem.image && (
                                                    <Image
                                                        src={listItem.image}
                                                        alt={"Imagem ilustrativa para o conteúdo do texto"}
                                                        height={103}
                                                        width={140}
                                                        className="max-w-[140px] max-h-[103px] mb-3 md:mb-0 md:mr-[30px]"
                                                    />
                                                )}
                                                <div className="w-full">
                                                    <h3 className="text-[23px] text-[#005984] font-semibold">{listItem.title}</h3>
                                                    {listItem.textContent && <div className="leading-[1]" dangerouslySetInnerHTML={{ __html: listItem.textContent }}></div>}
                                                    {listItem.linkUrl && (
                                                        <a href={listItem.linkUrl} className="text-[#005984] text-[18px] w-full text-right hover:underline mt-2 inline-block italic font-bold sliderLinkEffect">
                                                            {listItem.linkText}
                                                        </a>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsCustom;
