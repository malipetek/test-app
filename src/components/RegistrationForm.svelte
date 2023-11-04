<script lang="ts">
  import { enhance } from '$app/forms';
  let formResult;
</script>
<form use:enhance={({ formElement, formData, action, cancel, submitter }) => {
  return async ({ result, update }) => {
    formResult = result;
  };
}} class="text-white mt-8" method="POST" action="?/register">
  {#if formResult && formResult.type === 'failure'}
    <div class="relative w-full shadow-lg my-4 rounded-md bg-red-100 border-gray-400 p-8 text-xl text-red-700">
      { (formResult?.data?.errors || 'unknown error') }
    </div>
  {:else if formResult}
    <div class="relative w-full shadow-lg my-4 rounded-md bg-green-100 border-gray-400 p-8 text-xl text-green-700">
      {#if formResult?.data?.img }
        <img class="w-full" src="{formResult.data.img}"/>
      {/if}
      { formResult?.data?.message || 'Successful' }
    </div>
  {/if}
  <fieldset class="flex flex-wrap gap-4">
    <input
      class="px-4 py-2 w-full block rounded-lg bg-gray-300 bg-opacity-30"
      id="name"
      type="text"
      name="name"
      placeholder="Full Name"
      required
    />
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
    <div class="w-full h-2">&nbsp;</div>
    <div class="actions">
      <button class="py-2 px-6 rounded-lg text-white bg-elephant-400"> Register </button>
    </div>
  </fieldset>
</form>