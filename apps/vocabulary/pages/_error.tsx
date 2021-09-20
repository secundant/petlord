import NextErrorPage, { ErrorProps } from 'next/error';

export default function MyErrorPage(props: ErrorProps) {
  return <NextErrorPage {...props} />;
}
