import { Image } from 'antd';
import type { ComponentProps } from 'react';

const DEFAULT_FALLBACK_SRC =
  'https://static.vecteezy.com/system/resources/previews/025/506/498/non_2x/cute-dinosaur-holds-sign-black-white-error-404-flash-message-monochrome-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-outline-illustration-concept-vector.jpg';

interface Props extends ComponentProps<typeof Image> {
  fallbackSrc?: string;
}

function ImageWithFallback(props: Props) {
  const { fallbackSrc = DEFAULT_FALLBACK_SRC, ...rest } = props;

  return (
    <Image
      {...rest}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null; // prevents looping
        target.src = fallbackSrc;
      }}
    />
  );
}

export default ImageWithFallback;
