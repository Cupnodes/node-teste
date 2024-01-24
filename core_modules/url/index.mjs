import { URL } from 'url'
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedURL = new URL(address)

console.log(parsedURL.host)
console.log(parsedURL.pathname)
console.log(parsedURL.search)
console.log(parsedURL.searchParams)
console.log(parsedURL.searchParams.get('produtos'))