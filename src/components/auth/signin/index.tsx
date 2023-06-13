import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import SIGNIN from '@constants/auth/signin';
import { ICountry } from '@store/common/types';
import { ILoginInfo } from '@store/signin/types';
import { COUNTRIES } from '@constants/common';
import GoogleIcon from '@icons/social/google.svg';
import AppleIcon from '@icons/social/apple.svg';
import RupeeIcon from '@icons/currency/rupee.png';
import SocialButton from '@components/auth/signin/social-button';

const SignInComponent = () => {
  const { t: translate } = useTranslation();

  const [loginType, setLoginType] = useState<string>(SIGNIN.PHONE);
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    countryCode: '91',
    phone: '',
    email: '',
    password: '',
  })

  const handleCountryCodeSelection = (countryCode: string) => {
    const regex = /^\d{1}|[1-9]\d{1}$/;
    if (regex.test(countryCode)) {
      setLoginInfo({ ...loginInfo, countryCode });
    } else {
      // toaster
    }
  }

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-indigo-100">
      <div className="w-11/12 grid grid-cols-1 justify-items-center px-4 py-8 border-1 border-neutral-700 rounded-2xl shadow-xl bg-white 1sm:w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 3xl:w-3/12">
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
        <form action="" className="grid grid-cols-1 justify-items-center gap-6">
          <div>
            <label className="text-center mr-2">{translate('auth.signIn.loginWith')}</label>
            <input
              value="phone"
              name="login-type"
              type="radio"
              id="phone-radio"
              className="mr-1 cursor-pointer"
              onClick={() => setLoginType(SIGNIN.PHONE)}
              defaultChecked
            />
            <label htmlFor="phone-radio" className="mr-2">{translate('auth.signIn.phone')}</label>
            <input
              value="email"
              name="login-type"
              type="radio"
              id="email-radio"
              className="mr-1 cursor-pointer"
              onClick={() => setLoginType(SIGNIN.EMAIL)}
            />
            <label htmlFor="email-radio">{translate('auth.signIn.email')}</label>
          </div>
          <div>
            <label className="block text-center" htmlFor="email">
              {loginType === SIGNIN.PHONE ? translate('auth.signIn.phoneNo') : translate('auth.signIn.email')}
            </label>
            {
              loginType === SIGNIN.PHONE
              && (
                <select
                  name="countries"
                  id="country-select"
                  className="h-8 mr-2 border border-neutral-500 rounded-md focus:outline-none cursor-pointer disabled:bg-gray-200"
                  onChange={(e) => handleCountryCodeSelection(e.target.value)}
                  defaultValue={loginInfo.countryCode}
                  disabled
                >
                  {COUNTRIES.map((country: ICountry) => (
                    <option
                      key={country.countryCode}
                      value={country.countryCode}
                      className="cursor-pointer"
                    >
                      {country.countryCode}
                    </option>
                  ))}
                </select>
              )
            }
            <input
              className={`h-8 border border-neutral-500 rounded-md focus:outline-none p-0.5 placeholder:text-neutral-300 placeholder:pl-2 ${loginType === SIGNIN.EMAIL ? 'placeholder:text-center' : ''}`}
              type={loginType === SIGNIN.PHONE ? 'text' : 'email'}
              name="email"
              id="email"
              placeholder={loginType === SIGNIN.PHONE ? 'Enter Phone No.' : 'Enter Email'}
            />
          </div>
          <div>
            <label className="block text-center" htmlFor="password">{translate('auth.signIn.password')}</label>
            <input
              className="h-8 border border-neutral-500 rounded-md focus:outline-none p-0.5 placeholder:text-neutral-300 placeholder:pl-2 placeholder:text-center"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <input
            className="h-8 px-16 py-1 text-white bg-sky-500 rounded-md cursor-pointer"
            type="submit"
            value={translate('auth.signIn.actions.signIn') as string}
          />
        </form>
        <Link
          href="/auth/forgot-password"
          className="underline text-xs"
        >
          {translate('auth.signIn.actions.forgotPassword')}
        </Link>
        <div className="mt-2">{translate('auth.signIn.or')}</div>
        <div className="flex items-center mt-2 gap-2">
          <SocialButton
            icon={GoogleIcon}
            width={20}
            height={20}
            iconAlt="Google Icon"
            cls="w-8 h-4"
          />
          <SocialButton
            icon={AppleIcon}
            width={20}
            height={20}
            iconAlt="Apple Icon"
            cls="w-8 h-4"
          />
        </div>
        <Link
          href="/auth/signup"
          className="h-8 px-4 mt-4 py-1 text-white bg-sky-500 rounded-md cursor-pointer"
        >
          Create a New Account
        </Link>
      </div>
    </main>
  )
}

export default SignInComponent;
