interface IRedirectButtonProps {
  name: string;
  url: string;
  redirect: (url: string) => void;
}
