<template>
    <div class="flex justify-center items-center h-screen">
      <div class="max-w-md w-full">
        Auth layout
        <div class="mb-4">
          <router-link :to="{ name: 'login' }" class="mr-4" :class="{ 'font-bold': $route.name === 'Login' }">Login</router-link>
          <router-link :to="{ name: 'register' }" :class="{ 'font-bold': $route.name === 'Register' }">Register</router-link>
        </div>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <router-view/>
        </div>
      </div>
    </div>
  </template>