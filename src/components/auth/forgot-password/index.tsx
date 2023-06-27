import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import AuthLogoNameComponent from '@components/auth/common/logo-name';
import SIGNIN from '@constants/auth/signin';
import { COUNTRIES } from '@constants/common';
import { ICountry } from '@store/common/types';
import { ILoginInfo } from '@store/signin/types';

const ForgotPasswordComponent = () => {
  const { t: translate } = useTranslation();

  const [resetType, setResetType] = useState(SIGNIN.PHONE);
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
        <AuthLogoNameComponent />
        <div className="grid grid-cols-1 justify-items-center gap-6">
          <div>
            <label className="text-center mr-2">{translate('auth.signIn.loginWith')}</label>
            <input
              value="phone"
              name="login-type"
              type="radio"
              id="phone-radio"
              className="mr-1 cursor-pointer"
              onClick={() => setResetType(SIGNIN.PHONE)}
              defaultChecked
            />
            <label htmlFor="phone-radio" className="mr-2">{translate('auth.signIn.phone')}</label>
            <input
              value="email"
              name="login-type"
              type="radio"
              id="email-radio"
              className="mr-1 cursor-pointer"
              onClick={() => setResetType(SIGNIN.EMAIL)}
            />
            <label htmlFor="email-radio">{translate('auth.signIn.email')}</label>
          </div>
          <div>
            <label className="block text-center" htmlFor="email">
              {resetType === SIGNIN.PHONE ? translate('auth.signIn.phoneNo') : translate('auth.signIn.email')}
            </label>
            <input
              className={`h-8 border border-neutral-500 rounded-md focus:outline-none p-0.5 text-center placeholder:text-neutral-300 placeholder:pl-2 ${resetType === SIGNIN.EMAIL ? 'placeholder:text-center' : ''}`}
              type={resetType === SIGNIN.PHONE ? 'text' : 'email'}
              name="email"
              id="email"
              placeholder={resetType === SIGNIN.PHONE ? 'Enter Phone No.' : 'Enter Email'}
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
        </div>
        <Link
          href="/auth/signin"
          className="h-8 px-4 mt-4 py-1 text-white bg-sky-500 rounded-md cursor-pointer"
        >
          Already have an Account
        </Link>
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

export default ForgotPasswordComponent;
