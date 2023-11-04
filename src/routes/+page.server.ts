import type { Actions } from './$types';
import { GetCommentsByEmail } from '$lib/endpoints';
import { fail } from '@sveltejs/kit';
export const actions: Actions = {
  login: async (event) => {
		const body = await event.request.formData();
    const bodyJSON: LoginFormPayload = Object.fromEntries(body.entries());

		const result = await GetCommentsByEmail(bodyJSON.email);

		const [record]: Comment[] = (result?.data?.getComments || []);
		
		if (record) {
			// if there is a record we have a comment with the email
			if (bodyJSON.password == record.id) {
				return {
					status: 200,
					message: 'Logged in successfully'
				};
			} else {
				// password is incorrect
				return fail(401, {
						errors: 'incorrect password (you password is id of your first comment)'
				})
			}
		}

		// there is no record with the email
		return fail(401, {
				errors: 'incorrect email'
		})
	},
	register: async (event) => {
		const body = await event.request.formData();
    const bodyJSON: LoginFormPayload = Object.fromEntries(body.entries());

		const result = await GetCommentsByEmail(bodyJSON.email);

		const [record]: Comment[] = (result?.data?.getComments || []);
		
		if (record) {
			// this guy is already registered
			return fail(401, {
				errors: 'User already registered'
			});
		}

		console.log('register ', bodyJSON);
		return {
			status: 200,
			message: 'Registered successfully',
			img: 'registered.jpg'
		}
	}
} satisfies Actions;