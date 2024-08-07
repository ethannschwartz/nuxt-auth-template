<template>
  <div class="flex items-center justify-center h-screen w-screen">Waiting for email verification...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
    return navigateTo('/dashboard')
  }
}, { immediate: true })
</script>
