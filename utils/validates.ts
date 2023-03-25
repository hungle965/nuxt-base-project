import {
  REGEX_PATTERN_EMAIL_ADDRESS,
  REGEX_PATTERN_PHONE_NUMBER,
  REGEX_PATTERN_PRICE
} from './constants'

export const validateEmail = (email: string) => {
  return email
    ? REGEX_PATTERN_EMAIL_ADDRESS.test(email.toLowerCase()) || 'Invalid email'
    : true
}

export const required = (val: string) =>
  (val && String(val).length > 0) || 'Please type something'

export const minLength = (val: string, minLength = 6) =>
  (val && String(val).length >= minLength) || `At least ${minLength} character`

export const maxLength = (val: string, maxLength = 200) =>
  val.length < maxLength || `Maximum ${maxLength} character`

export const validatePhone = (phone: string) => {
  return phone
    ? REGEX_PATTERN_PHONE_NUMBER.test(phone) || 'Invalid phone number'
    : true
}

export const validatePrice = (price: string) =>
  price ? REGEX_PATTERN_PRICE.test(price) || 'Invalid price' : true
