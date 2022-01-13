import { gql, useMutation, useQuery } from "@apollo/client";

const TASKS = gql`
query {
  tasks{
      id
      name
      completed
  }
}`

const DELETE_TASK = gql`
mutation($id: String!) {
  deleteTask( id: $id){
      id
      name
  }
}
`

export const useTasks = () => {
    const {data,error,loading}  = useQuery(TASKS)
    return { data, error, loading }
}

export const useDeleteTask = () => {
    const [ makeDelete, result ] = useMutation(DELETE_TASK, {
        refetchQueries: [{query: TASKS}]
    })
    return { makeDelete, result }
}