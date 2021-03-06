/* eslint-disable */
export function validateEmail (email) {
  /* from vuelidate library: https://github.com/monterail/vuelidate/blob/master/src/validators/email.js */
  var re =  /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  return !re.test(email)
}
/* eslint-enable */
