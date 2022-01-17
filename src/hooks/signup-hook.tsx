import { gql, useMutation } from "@apollo/client";

const SIGN_UP = gql`
mutation signup($input: SignUpInput!) {
  signUp( input: $input){
    id
    name
    email
  }
}`

export const useSignUp = () => {
    const [ makeSignUp, result ] = useMutation(SIGN_UP)
    return { makeSignUp, result }
}