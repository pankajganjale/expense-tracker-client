import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import RupeeIcon from '@icons/currency/rupee.png';

const AuthLogoNameComponent = () => {
  const { t: translate } = useTranslation();

  return (
    <div className="flex items-center text-xl font-medium mb-4">
          <Image
            src={RupeeIcon}
            width={36}
            height={36}
            alt="Rupee Icon"
            className="mr-2 hover:animate-spin"
          />
          {translate('title')}
        </div>
  )
}

export default AuthLogoNameComponent