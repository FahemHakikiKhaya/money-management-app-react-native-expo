interface AuthLoginProps {
  email: string;
  password: string;
}

interface AuthLoginResponse extends User {
  accessToken: string;
}
