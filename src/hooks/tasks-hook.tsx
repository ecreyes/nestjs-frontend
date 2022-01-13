import { gql, useQuery } from "@apollo/client";

const TASKS = gql`
query {
  tasks{
      id
      name
      completed
  }
}`

export const useTasks = () => {
    const {data,error,loading}  = useQuery(TASKS)
    return { data, error, loading }
}