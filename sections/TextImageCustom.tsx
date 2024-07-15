import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    backgroundDotsEffect?: boolean;
    title?: HTMLWidget;
    titleMobile?: HTMLWidget;
    contentMobile?: ContentPropsMobile[]
    contentDesktop?: ContentProps[]
    checkMore?: string;
    checkMoreUrl?: string;
}

interface ContentProps {
    image?: ImageWidget;
    invertImage?: boolean;
    imageSeparator?: ImageWidget;
    imageSeparatorVisible?: boolean;
    title?: string;
    text?: string;
}

interface ContentPropsMobile {
    title?: string;
    text?: string;
    invertText?: boolean;
}

function TextImageCustom({ backgroundDotsEffect, title, titleMobile, contentMobile, contentDesktop, checkMore, checkMoreUrl }: Props) {
    return (
        <div class={`py-20 flex flex-col w-full items-start justify-center px-[15px] bg-[#efeeee] ${backgroundDotsEffect ? 'bg-top-bottom-dots' : ''}`}>
            <div class="md:max-w-[970px] md:mx-auto w-full">
                {titleMobile &&
                    <h1 class="leading-[0.1] md:hidden mb-[55px] tracking-[-1px]" dangerouslySetInnerHTML={{
                        __html: titleMobile,
                    }}></h1>
                }
                {title &&
                    <h1 class="hidden md:block mb-[55px] tracking-[-1px]" dangerouslySetInnerHTML={{
                        __html: title,
                    }}></h1>
                }

                {/* Mobile Content */}
                <div class="md:hidden">
                    {contentMobile?.map((content) => (
                        <div class={`flex flex-col mb-[10px] ${content.invertText ? 'text-right' : ''}`}>
                            <span class="text-[33px] font-bold text-[#005984]">{content.title}</span>
                            <span class="text-sm text-[#666]">{content.text}</span>
                        </div>
                    ))}
                </div>
                {/* Desktop Content */}
                <div class="hidden md:block">
                    {contentDesktop?.map((content) => (
                        <><div class={`flex items-center ${content.invertImage ? 'flex-row-reverse' : ''}`}>
                            {content.image &&
                                <Image
                                    src={content.image}
                                    alt="Product info image"
                                    width={192}
                                    height={192}
                                    class={`${content.invertImage ? 'ml-[30px]' : 'mr-[30px]'}`} />}
                            <div class={`flex flex-col ${content.invertImage ? 'text-right' : ''}`}>
                                <span class="text-[33px] font-bold text-[#005984]">{content.title}</span>
                                <span class="text-sm text-[#666]">{content.text}</span>
                            </div>
                        </div>
                            {content.imageSeparatorVisible &&
                                <Image
                                    src={content.imageSeparator}
                                    alt="Text Separator"
                                    width={752}
                                    height={40}
                                    class={`block w-[80%] mx-auto`} />
                            }</>
                    ))}
                </div>

                {checkMore && <a class="block text-[#005984] text-[30px] text-right italic font-semibold" href={checkMoreUrl}>{checkMore}</a>}
            </div>
        </div>
    )
}

export default TextImageCustom