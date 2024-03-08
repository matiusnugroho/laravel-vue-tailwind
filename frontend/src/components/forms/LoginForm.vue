<template>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input v-model="form.username" type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <div class="relative">
          <input v-model="form.password" :type="passwordVisible ? 'text' : 'password'" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <button @click.prevent="togglePasswordVisibility" type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none">
            <svg v-if="passwordVisible" class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9.828V14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4.172m4.243-4.242l1.414-1.415A10.011 10.011 0 0 1 12 2c2.757 0 5.314 1.122 7.157 3.12l1.414 1.415-1.415 1.414-1.414-1.414A8 8 0 0 0 12 4c-1.657 0-3.198.51-4.486 1.38L6.1 3.96 4.686 5.374 19.313 20 20.727 18.586 19 16.857"></path>
            </svg>
            <svg v-else class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm0 0a6 6 0 1 0-6 6 6 6 0 0 0 6-6z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          sign In
        </button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const passwordVisible = ref(false);
  const form = ref({ username: '', password: '' });
  
  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
  };
  
  const login = () => {
    console.log('Logging in...', form.value);
    // Implement login logic here
  };
  </script>
  