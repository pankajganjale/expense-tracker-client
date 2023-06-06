import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import SIGNIN from '@constants/auth/signin';
import { ICountry } from '@store/common/types';
import { ILoginInfo } from '@store/signin/types';
import { COUNTRIES } from '@constants/common';

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
    <main className="h-screen w-screen flex items-center justify-center bg-gray-300">
      <form action="" className="w-2/6 grid grid-cols-1 justify-items-center gap-6 p-4 border-1 border-neutral-700 rounded-2xl shadow-xl bg-white">
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
            className="h-8 border border-neutral-500 rounded-md focus:outline-none p-0.5"
            type={loginType === SIGNIN.PHONE ? 'text' : 'email'}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label className="block text-center" htmlFor="password">{translate('auth.signIn.password')}</label>
          <input className="h-8 border border-neutral-500 rounded-md focus:outline-none p-0.5" type="password" name="password" id="password" />
        </div>
        <input className="h-8 px-16 py-1 text-white bg-sky-900 rounded-md cursor-pointer" type="submit" value={translate('auth.signIn.actions.signIn') as string} />
      </form>
    </main>
  )
}

export default SignInComponent;
