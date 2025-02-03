import axios from 'axios'
import { API_BASE_URL } from '~/libs/app.constants'

export async function useData() {
  const response = await axios.get(`${API_BASE_URL}/sessions`)

  return Array.isArray(response.data) ? response.data : []
}
