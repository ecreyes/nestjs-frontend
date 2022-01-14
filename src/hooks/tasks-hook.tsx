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

const CREATE_TASK = gql`
mutation($input: CreateTaskInput!) {
    createTask(input: $input){
        id
        name
        completed
    }
}
`

const UPDATE_TASK = gql`
mutation($id: String!, $input: UpdateTaskInput!){
    updateTask(id:$id, input:$input){
        id
        name
        completed
    }
}
`

export const useTasks = () => {
    const { data, error, loading } = useQuery(TASKS)
    return { data, error, loading }
}

export const useDeleteTask = () => {
    const [makeDelete, result] = useMutation(DELETE_TASK, {
        refetchQueries: [{ query: TASKS }]
    })
    return { makeDelete, result }
}

export const useMakeTask = (type: 'create' | 'edit') => {
    const mutation = type === 'create' ? CREATE_TASK : UPDATE_TASK
    const [makeTask, result] = useMutation(mutation, {
        refetchQueries: [{ query: TASKS }]
    })
    return { makeTask, result }
}