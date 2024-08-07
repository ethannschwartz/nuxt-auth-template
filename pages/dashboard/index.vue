<template>
  <div>Welcome to your dashboard</div>
</template>

<script setup>
definePageMeta({
  title: 'Dashboard',
  middleware: "auth",
})
</script>