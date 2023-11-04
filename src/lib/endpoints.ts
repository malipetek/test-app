import { HASURA_TOKEN } from '$env/static/private';

function fetchGraphQL (
  operationsDoc: string,
  operationName: string,
  variables: Record<string, string>
)
{
  return fetch('https://alive-lemming-35.hasura.app/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': HASURA_TOKEN,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then(result => result.json());
}

export function GetCommentsByEmail (email: string)
{
  console.log(email);
  return fetchGraphQL(`
    query GetCommentsByEmail($email: String) {
      getComments(limit: 10, filter: {email: $email}) {
        email
        id
      }
    }  
    `, 'GetCommentsByEmail', {
    email
  })

}