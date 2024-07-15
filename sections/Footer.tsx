import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  imageDesktop?: ImageWidget;
  alt?: string;
  width?: number;
  widthDesktop?: number;
  height?: number;
  heightDesktop?: number;
  text?: string;
  textHref?: string;
  subText?: string;
  socials?: {
    icon?: ImageWidget;
    alt?: string;
    height?: string;
    width?: string;
    link?: string;
  }[]
  /**
 * @default false
 * @description turn true if footer position isn't right
 */
  fixFooterPosition?: boolean;
}

function Footer({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10964/0f72b3b8-86e1-4772-b8a3-7ad57fbb99cd",
  imageDesktop = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10964/0f72b3b8-86e1-4772-b8a3-7ad57fbb99cd",
  href = "/",
  text = "contato@inoa.com.br",
  textHref = "mailto:contato@inoa.com.br",
  subText = "Jardim Botânico - Rio de Janeiro - BR",
  alt = "Inoa Logo",
  height = 29,
  heightDesktop = 70,
  width = 59,
  widthDesktop = 140,
  socials,
  fixFooterPosition,
}: Props) {
  return (
    <div class={`bg-primary w-full ${fixFooterPosition ? "absolute bottom-0 " : ''}`}>
      <div class="max-w-[970px] mx-auto flex justify-between py-[20px] px-[15px] min-h-[140px]">
        <a
          href={href}
          class=""
          target="_blank"
        >
          {image && (
            <Image
              class="md:hidden"
              src={image || ""}
              alt={alt || ""}
              height={height || 29}
              width={width || 59}
            />
          )}
          {imageDesktop && (
            <Image
              class="hidden md:block"
              src={imageDesktop || ""}
              alt={alt || ""}
              height={heightDesktop || 70}
              width={widthDesktop || 140}
            />
          )}
        </a>
        <div class="flex flex-col items-end">
          <div class="flex mb-2">
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
          <address class="text-right">
            {text && <a href={textHref}><p class="text-base-300 text-xs italic">{text}</p></a>}
            {subText && <p class="text-base-300 text-sm italic">{subText}</p>}
          </address>
        </div>
      </div>
    </div>
  );
}

export default Footer;
