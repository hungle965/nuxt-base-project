<script lang="ts" setup>
import { ElLoading, ElMessage, FormInstance, FormRules } from 'element-plus'
import { userRepo } from '~~/repository/user'
import { useUserStore } from '~~/stores/user'

definePageMeta({
  layout: 'no-auth'
})

const form = reactive({
  email: 'wfdev@yopmail.com',
  password: '123123'
})

const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  email: [
    {
      required: true,
      message: 'Please input email'
    },
    {
      type: 'email',
      message: 'Email is not a valid email'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input password'
    }
  ]
})

const router = useRouter()
const userStore = useUserStore()

const handleSubmitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (!valid) return
    const loading = ElLoading.service({
      background: 'rgba(0, 0, 0, 0.7)'
    })
    try {
      const { data } = await userRepo().login(form.email, form.password)
      userStore.setToken(data.token)
      userStore.setUser(data.user)
      router.push('/profile')
    } catch (err: any) {
      console.log(err)
      ElMessage({
        message: err.message,
        type: 'error'
      })
    } finally {
      loading.close()
    }
  })
}
</script>

<template>
  <div
    class="flex-1 min-h-[calc(100vh-100px)] p-7 flex justify-center items-center"
  >
    <el-form
      ref="ruleFormRef"
      label-position="left"
      label-width="100px"
      :model="form"
      :rules="rules"
      class="grid grid-cols-3 gap-5 w-full max-w-[700px] mx-auto translate-y-[-100px]"
    >
      <h2 class="text-center col-span-3">Login</h2>
      <el-form-item prop="email" label="Email" class="col-span-3">
        <el-input v-model="form.email" />
      </el-form-item>

      <el-form-item prop="password" label="Password" class="col-span-3">
        <el-input v-model="form.password" type="password" />
      </el-form-item>

      <el-button
        @click="$router.push('/')"
        type="danger"
        class="col-span-1 mt-2"
      >
        Back to home
      </el-button>
      <el-button
        type="primary"
        class="col-span-2 mt-2"
        @click="handleSubmitForm(ruleFormRef)"
      >
        Login
      </el-button>
    </el-form>
  </div>
</template>

<style lang="scss"></style>
