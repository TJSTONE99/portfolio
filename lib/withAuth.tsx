import { NextComponentType } from 'next';

function withAuth<T>(Component: NextComponentType<T>) {
  const Auth = (props: T) => {

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;