import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginUserAdmin(email: $email, password: $password){
        token
        expireIn
        user {
            id
            name
            lastName
            email
        }
    }
  }
`;