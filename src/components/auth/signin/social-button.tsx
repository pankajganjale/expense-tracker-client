import {FC} from 'react';
import Image from 'next/image';
import { ISocialButtonComponent } from '@store/signin/types';

const SocialButton: FC<ISocialButtonComponent> = (props) => {
  const {
    icon,
    iconAlt,
    width = 20,
    height = 20,
    cls = '',
  } = props;
  return (
    <button className="text-sm border border-neutral-500 flex items-center justify-center p-2 rounded-2xl hover:bg-sky-100 cursor-pointer">
      <Image
        src={icon}
        width={width}
        height={height}
        alt={iconAlt}
        className={cls}
      />
    </button>
  )
}

export default SocialButton;
