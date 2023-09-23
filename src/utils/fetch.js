// fetch.js
import { ref } from 'vue'

export async function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  await fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}
