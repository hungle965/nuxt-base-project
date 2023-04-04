<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { userRepo } from '~~/repository/user'
import { useUserStore } from '~~/stores/user'

definePageMeta({
  layout: 'no-auth'
})

const email = ref('wfdev@yopmail.com')
const password = ref('123123')
const $q = useQuasar()
const router = useRouter()
const userStore = useUserStore()

const handleSubmitForm = async () => {
  try {
    $q.loading.show()
    const { data } = await userRepo().login(email.value, password.value)
    userStore.setToken(data.token)
    userStore.setUser(data.user)
    $q.notify({
      message: 'Login success',
      type: 'positive'
    })
    router.push('/profile')
  } catch (error: any) {
    $q.notify({
      message: error.message
    })
  } finally {
    $q.loading.hide()
  }
}
</script>

<template>
  <div
    class="flex-1 min-h-[calc(100vh-100px)] p-7 flex justify-center items-center"
  >
    <q-form
      @submit="handleSubmitForm"
      class="grid grid-cols-3 gap-5 w-full max-w-[700px] mx-auto translate-y-[-100px]"
    >
      <h2 class="text-center col-span-3">Login</h2>
      <q-input
        v-model="email"
        label="Email"
        outlined
        class="col-span-3"
        :rules="[required, validateEmail]"
      />
      <q-input
        v-model="password"
        outlined
        label="Password"
        class="col-span-3"
        :rules="[required]"
        type="password"
      />
      <q-btn @click="$router.push('/')" class="col-span-1 mt-2">
        Back to home
      </q-btn>
      <q-btn color="primary" type="submit" class="col-span-2 mt-2">Login</q-btn>
    </q-form>
  </div>
</template>

<style lang="scss"></style>
