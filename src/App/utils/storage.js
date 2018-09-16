export function getItemObject(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(atob(value));
  }
  else {
    return null;
  }
}
export function setItemObject(key, value) {
  const str = JSON.stringify(value);
  localStorage.setItem(key, btoa(str));
}