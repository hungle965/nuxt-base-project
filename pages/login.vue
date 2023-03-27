<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { userRepo } from '~~/repository/user'

// import { userRepo } from '../repository/user'
definePageMeta({
  layout: 'no-auth'
})

const email = ref('')
const password = ref('')
const config = useRuntimeConfig()
const $q = useQuasar()

const handleSubmitForm = async () => {
  try {
    console.log(config)
    const res = await userRepo().login('studentnew@gmail.com', '1231233')
    console.log(res)
  } catch (error: any) {
    console.log(error)
    console.log($q)
    $q.notify({
      message: error.message
    })
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
      <q-input v-model="email" label="Email" outlined class="col-span-3" />
      <q-input
        v-model="password"
        outlined
        label="Password"
        class="col-span-3"
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
