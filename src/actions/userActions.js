export function login(jwt){
  return{type: 'LOG_IN', jwt}
}
export function LoadUser(user){
  console.log(user);
  return{type: 'LOAD_USER', user}
}
