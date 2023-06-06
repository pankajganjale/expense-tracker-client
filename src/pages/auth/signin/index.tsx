import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SignInComponent from '@components/auth/signin';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const SignIn = () => {
  return (
    <SignInComponent />
  )
}

export default SignIn;
