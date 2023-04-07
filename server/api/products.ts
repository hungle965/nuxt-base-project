export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const res = await $fetch<ProductResponse>('/shops/list-product', {
    baseURL: config.public.BASE_URL
  })
  return res.data
})
