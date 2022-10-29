export interface UserTypes {
  user: {
    _id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    bio?: string;
    avatar?: string;
    coverPhoto?: string;
    verified?: string;
    gender?: string;
    address?: string;
    country?: string;
    city?: string;
    phoneNumber?: string;
    createdAt?: string;
    enabledPublickProfile?: string;
    enabledPublickPost?: string;
    enabledSEO?: string;
    has_2_factor_auth?: string;
    public_post_state?: string;
    public_profile_state?: string;
    has_seo?: string;
    login_session_secret_Id?: string;
    url?: string;
  };
}
