interface AuthRegisterProps {
  email: string;
  password: string;
  name: string;
}

interface AuthRegisterResponse extends User {
  accessToken: string;
}
