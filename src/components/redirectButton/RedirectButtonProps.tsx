interface RedirectButtonProps {
  name: string;
  url: string;
  redirect: (url: string) => void;
}
