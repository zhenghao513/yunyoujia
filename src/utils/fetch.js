import axios from 'axios'
import { ref } from 'vue'

export async function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const response = await axios.get(url)
  data.value = response.data
  return { data, error }
}
