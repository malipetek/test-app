<script lang="ts">
	import LoginForm from '../components/LoginForm.svelte';
	import RegistrationForm from '../components/RegistrationForm.svelte';
	// @ts-ignore
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';

</script>

<div class="main grid grid-cols-1 lg:grid-cols-12 h-full">
	<div class="hidden lg:block col-span-5">
		<img class="object-cover w-full h-full" src="https://picsum.photos/id/74/2000/2000" />
	</div>
	<div class="form text-white col-span-7 p-10 bg-elephant-900 flex items-center justify-center">
    
    <div class="form-container max-w-sm">
      <h1 class="text-4xl mb-4">
        Get more things done with Loggin platform.
      </h1>
      <p class="mb-8">
        Access to the most powerfull tool in the entire design and web industry.
      </p>
			<Tabs>
				<TabList>
					<Tab>
						<span class="text-white">Login</span>
					</Tab>
					<Tab>
						<span class="text-white">Register</span>
					</Tab>
				</TabList>

				<TabPanel>
					<LoginForm />
				</TabPanel>

				<TabPanel>
					<RegistrationForm />
				</TabPanel>
			</Tabs>
		</div>
	</div>
</div>

<Tabs />
