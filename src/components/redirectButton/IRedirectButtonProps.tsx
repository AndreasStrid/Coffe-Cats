interface IRedirectButtonProps {
  name: string;
  url: string;
  redirect: (name: string, url: string) => void;
}
export default IRedirectButtonProps;
