<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="flex flex-col gap-3 w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
      <h1 class="text-2xl font-bold text-black">Log in</h1>
      <div>
        <UInput
            placeholder="Email"
            v-model="email"
            type="email"
            class="w-full"
            icon="i-heroicons-at-symbol"
            :disabled="isLoading"
        />
      </div>
      <div>
        <UInput
            placeholder="Password"
            v-model="password"
            type="password"
            class="w-full"
            icon="i-heroicons-lock-closed"
            :disabled="isLoading"
        />
      </div>
      <div class="flex justify-end items-center">
        <UButton
            @click="signUp"
            :loading="isLoading"
            :disabled="!email || !password"
            color="black"
        >
          Sign In with E-Mail
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const isLoading = ref(false);
const password = ref('');

definePageMeta({
  title: 'Login',
  layout: false,
})

const signUp = async () => {
  isLoading.value = true;
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
}
</script>