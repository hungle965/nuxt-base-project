import { ref } from 'vue'

export const useCount = () => {
  const count = ref(0)
  const plus = () => {
    count.value++
  }
  return { count, plus }
}
