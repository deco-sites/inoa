import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    backgroundDotsEffect?: boolean;
    title?: HTMLWidget;
    titleMobile?: HTMLWidget;
}

function TabsCustom({ backgroundDotsEffect, title, titleMobile }: Props) {
    return (
        <div>
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
                </div></div>
        </div>
    )
}

export default TabsCustom