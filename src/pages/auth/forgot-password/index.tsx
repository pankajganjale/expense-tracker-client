import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ForgotPasswordComponent from '@components/auth/forgot-password';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const ForgotPassword = () => {
  return (
    <ForgotPasswordComponent />
  )
}

export default ForgotPassword;
