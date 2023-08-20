 
/** @type {import('./$types').PageLoad} */
export function load(params) {
  const id = params.url.pathname.split('/')[2]
  return {
    id
  }
}