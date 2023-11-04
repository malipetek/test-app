<script lang="ts">
  import { enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
  let formResult: ActionResult;

  $: formResult, console.log('formResult ', formResult);
</script>
<form use:enhance={({ formElement, formData, action, cancel, submitter }) => {
    return async ({ result, update }) => {
      formResult = result;
    };
  }}
  class="text-white mt-8" method="POST" action="?/login">
  {#if formResult && formResult.type === 'failure'}
    <div class="relative w-full shadow-lg my-4 rounded-md bg-red-100 border-gray-400 p-8 text-xl text-red-700">
      { (formResult?.data?.errors || 'unknown error') }
    </div>
  {:else if formResult}
    <div class="relative w-full shadow-lg my-4 rounded-md bg-green-100 border-gray-400 p-8 text-xl text-green-700">
      {#if formResult?.data?.img }
        <img class="w-full" src="{formResult.data.img}" alt="visual representation of form submission result" />
      {/if}
      { formResult?.data?.message || 'Successful' }    
    </div>
  {/if}
  <fieldset class="flex flex-wrap gap-4">
    <input
      class="px-4 py-2 w-full block rounded-lg bg-gray-300 bg-opacity-30"
      id="email"
      type="email"
      name="email"
      placeholder="E-mail Address"
      required
    />
    <input
      class="px-4 py-2 w-full block rounded-lg bg-gray-300 bg-opacity-30"
      id="password"
      type="password"
      name="password"
      placeholder="Password"
      required
    />
    <div class="flex w-full">
      <input
        type="checkbox"
        class="w-4 h-4 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        id="remember-checkbox"
      />
      <label
        for="remember-checkbox"
        class="text-sm text-gray-500 ml-3 dark:text-gray-400 select-none"
        >Remember Me</label
      >
    </div>
    <div class="actions">
      <button class="py-2 px-6 rounded-lg text-white bg-elephant-400"> Login </button>
      <a class="ml-2" href="#" > Forgot your password? </a>
    </div>
  </fieldset>
</form>