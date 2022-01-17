import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
mutation login($input: LoginInput!) {
  login( input: $input){
      token
  }
}`

export const useLogin= () => {
    const [ makeLogin, result ] = useMutation(LOGIN)
    return { makeLogin, result }
}