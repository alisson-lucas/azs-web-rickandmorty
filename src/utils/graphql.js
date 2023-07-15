import useSWR from 'swr'
// import axios from 'axios'
import { request } from 'graphql-request'

const fetcher = async query => await request('https://rickandmortyapi.com/graphql', query)

// const fetcher = async query => await axios.post('https://rickandmortyapi.com/graphql', { query }).then(res => res.data)


export const useQuery = query => {
  return useSWR(query, fetcher)

} 