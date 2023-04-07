export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const id = event.context.params?.id || ''
  const res = await $fetch<ProductDetailResponse>(`/shops/show-product/${id}`, {
    baseURL: config.public.BASE_URL
  })
  return res.data
})
