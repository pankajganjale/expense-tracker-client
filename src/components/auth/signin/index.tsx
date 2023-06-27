import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import Link from 'next/link';
import SIGNIN from '@constants/auth/signin';
import { ICountry } from '@store/common/types';
import { ILoginInfo } from '@store/signin/types';
import { COUNTRIES } from '@constants/common';
import GoogleIcon from '@icons/social/google.svg';
import AppleIcon from '@icons/social/apple.svg';
import FallingCharacterIcon from '@icons/auth/falling-character.png';
import AuthLogoNameComponent from '@components/auth/common/logo-name';

const SignInComponent = () => {
  const { t: translate } = useTranslation();

  return (
    <div className="bg-color-bg h-screen relative">
      <div className="w-56 h-56 rounded-[224px] absolute bg-color-primary blur-[160px] left-1/4 top-2/4" />
      <Image
        src={FallingCharacterIcon}
        width={300}
        height={200}
        className="absolute left-1/3 top-2/4"
        alt="Falling Character"
      />
      <section className="w-5/6 flex items-center justify-between h-screen mx-auto">
        <div className="font-mono">
          <div className="text-5xl font-bold">
            <h1>Sign In to</h1>
            <h1 className="mt-2">Track Expenses</h1>
          </div>
          <div className="text-2xl mt-14">
            <p>if you don’t an account</p>
            <p>
              <span>you can</span>
              {" "}
              <Link className="text-color-primary" href="/auth/signup">Register here!</Link>
            </p>
          </div>
        </div>
        <main>
          pshjdh
        </main>
      </section>
    </div>
  )
}

export default SignInComponent;
