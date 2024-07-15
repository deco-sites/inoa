import Slider from "../components/ui/Slider.tsx";
import SliderJS from "../islands/SliderJS.tsx";
import { useId } from "../sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface BannerSliderProps {
  /** @description Imagem do fundo do slider */
  backgroundImage?: ImageWidget;
  /** @description Lista de imagens para o desktop. */
  imagesDesktop: ImageProps[];
  /** @description Lista de imagens para o mobile. */
  imagesMobile: ImageProps[];
  /** @description Configurações do slider. */
  sliderConfigs: SliderProps;
}

interface ImageProps {
  /** @description Imagem de fundo para o desktop. */
  src?: ImageWidget;
  /** @description Texto descritivo da imagem. */
  description?: string;
  /** @description Url do link. */
  linkUrl?: string;
  /** @description Título do link. */
  linkTitle?: string;
  /** @description Texto do link. */
  linkText?: string;
  /** @description Texto do botão do link. */
  linkButtonText?: string;
}

interface SliderProps {
  /** @description Passagem de banner automatico? */
  autoplay: boolean;
  /** @description Tempo de passagem de banner automático em segundos. */
  interval?: number;
}

const BannerSlider = (
  { backgroundImage, imagesDesktop, imagesMobile, sliderConfigs }: BannerSliderProps,
) => {
  const desktopId = useId();
  const mobileId = useId();

  return (
    <>
      <div
        id={desktopId}
        className="banner-slider-wrapper relative hidden lg:flex h-[430px]"
      >
        <Slider class="carousel carousel-center w-screen max-w-[970px] mx-auto bg-secondary my-0 gap-6 px-0">
          {imagesDesktop?.map((image, index) => {
            return (
              <Slider.Item index={index} class="carousel-item w-full flex justify-center items-center h-full">
                {backgroundImage &&
                  <Image
                    media="(min-width: 1024px)"
                    class="w-full h-auto absolute top-0 left-0 min-w-full min-h-full max-h-[430px]"
                    src={backgroundImage}
                    alt="Slider background Image"
                    width={1440}
                    height={430}
                    loading="lazy"
                  />
                }

                <a class="flex flex-col mr-[20px] leading-[1.1] mb-[20px] max-w-[465px] mr-auto" href={image.linkUrl}>
                  {image.linkTitle &&

                    <span class="relative z-10 italic text-white mb-[25px] text-[33px]" dangerouslySetInnerHTML={{
                      __html: image.linkTitle,
                    }}>
                    </span>
                  }

                  {image.linkText && <span class="relative z-10 text-base text-white" dangerouslySetInnerHTML={{
                    __html: image.linkText,
                  }}>
                  </span>
                  }

                  {image.linkButtonText && <span class="relative z-10 text-[30px] text-white mt-[40px] italic text-end sliderLinkEffect" dangerouslySetInnerHTML={{
                    __html: image.linkButtonText,
                  }}>
                  </span>
                  }
                </a>

                {image.src &&
                  <Image
                    media="(min-width: 1024px)"
                    class="object-cover h-auto relative z-10"
                    src={image?.src}
                    alt={image?.description ?? "Banner image slider"}
                    width={485}
                    height={184}
                    loading="lazy"
                  />
                }
              </Slider.Item>
            );
          })}
        </Slider>

        <div className="banner-slider-dots-wrapper flex gap-x-4 absolute left-[70%] bottom-4 -translate-x-1/2 -translate-y-1/2">
          {imagesDesktop?.map((_, index) => {
            return (
              <Slider.Dot index={index}>
                <div class="w-[10px] h-[10px] rounded-full bg-[#819497] group-disabled:bg-white" />
              </Slider.Dot>
            );
          })}
        </div>

        <SliderJS
          rootId={desktopId}
          interval={sliderConfigs && sliderConfigs?.interval
            ? sliderConfigs?.interval * 1e3
            : 0}
          infinite={sliderConfigs?.autoplay ?? false}
        />
      </div>

      <div
        id={mobileId}
        className="banner-slider-wrapper flex lg:hidden relative"
      >
        <Slider class="carousel carousel-center w-screen bg-secondary my-0 gap-6 px-0">
          {imagesMobile?.map((image, index) => {
            return (
              <Slider.Item index={index} class="carousel-item w-full flex flex-col pt-[80px] pb-[40px]">
                {backgroundImage &&
                  <Image
                    media="(min-width: 1024px)"
                    class="w-full h-auto absolute top-0 left-0 min-w-full min-h-full"
                    src={backgroundImage}
                    alt="Slider background Image"
                    width={1440}
                    height={560}
                    loading="lazy"
                  />
                }

                <a class="flex flex-col px-[15px] leading-[1.1] mb-[20px]" href={image.linkUrl}>
                  {image.linkTitle &&

                    <span class="relative z-10 italic text-white mb-[25px] text-[33px]" dangerouslySetInnerHTML={{
                      __html: image.linkTitle,
                    }}>
                    </span>
                  }

                  {image.linkText && <span class="relative z-10 text-base text-white" dangerouslySetInnerHTML={{
                    __html: image.linkText,
                  }}>
                  </span>
                  }

                  {image.linkButtonText && <span class="relative z-10 text-[30px] text-white mt-[40px] italic text-end sliderLinkEffect" dangerouslySetInnerHTML={{
                    __html: image.linkButtonText,
                  }}>
                  </span>
                  }
                </a>

                {image.src &&
                  <Image
                    media="(min-width: 1024px)"
                    class="object-cover h-auto relative z-10 px-[15px]"
                    src={image?.src}
                    alt={image?.description ?? "Banner image slider"}
                    width={485}
                    height={184}
                    loading="lazy"
                  />
                }
              </Slider.Item>
            );
          })}
        </Slider>

        <div className="banner-slider-dots-wrapper flex gap-x-3 absolute left-[85%] bottom-4 -translate-x-1/2 -translate-y-1/2">
          {imagesMobile?.map((_, index) => {
            return (
              <Slider.Dot index={index}>
                <div class="w-[10px] h-[10px] rounded-full bg-[#819497] group-disabled:bg-white" />
              </Slider.Dot>
            );
          })}
        </div>

        <SliderJS
          rootId={mobileId}
          interval={sliderConfigs && sliderConfigs?.interval
            ? sliderConfigs?.interval * 1e3
            : 0}
          infinite={sliderConfigs?.autoplay ?? false}
        />
      </div>
    </>
  );
};

export default BannerSlider;
