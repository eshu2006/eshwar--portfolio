/**
 * Conditionally joins CSS class names together.
 * @param {...string} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formats a date string to a user-friendly display format.
 * @param {string} dateString 
 * @returns {string}
 */
export function formatDate(dateString) {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'long' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
