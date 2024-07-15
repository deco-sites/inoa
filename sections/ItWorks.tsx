import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


export interface Props {
  name?: HTMLWidget;

  socials?: {
    icon?: ImageWidget;
    alt?: string;
    height?: string;
    width?: string;
    link?: string;
  }[]
  backgroundDotsEffect?: boolean;
}

export default function Section({ name = "It Works!", socials, backgroundDotsEffect }: Props) {

  return (
    <div
      id="it-works"
      class={`py-20 flex flex-col w-full items-start justify-center gap-16 px-[15px] ${backgroundDotsEffect ? 'bg-top-bottom-dots' : ''}`}
    >
      <div class="md:max-w-[970px] md:mx-auto w-full">
        <div class="" dangerouslySetInnerHTML={{
          __html: name,
        }} />
        <div class="flex px-[15px]">
          {socials &&
            socials.map((social) => (
              <a href={social.link}>
                <Image
                  src={social.icon || ""}
                  alt={social.alt || ""}
                  height={social.height || 30}
                  width={social.width || 30}
                  class="ml-[10px]"
                />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

