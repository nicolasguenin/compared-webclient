import { SignInForm } from '@cpd/features/lib/auth';
import clsx from 'clsx';
import styles from './page.module.scss';

const SigninPage = () => {
  const rootClasses = clsx('shadow-lg my-3', styles.box);

  return (
    <div>
      <SignInForm className={rootClasses} />
    </div>
  );
};

export default SigninPage;
