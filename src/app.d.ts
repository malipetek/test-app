// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global
{
	type LoginFormPayload = {
		email: string;
		password: string;
	}

	type Comment = {
		body: string;
		email: string;
		id: number;
		name: string;
		postId: number;
	}

	type FormResult = {
		message: string;
		errors: string;
		status: number;
		img: string;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
