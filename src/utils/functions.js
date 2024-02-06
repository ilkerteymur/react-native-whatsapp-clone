const setAvatarText = (firstName, lastName) => {
  const firstNameControl = firstName ? firstName.charAt(0).toUpperCase() : 'b';
  const lastNameControl = lastName ? lastName.charAt(0).toUpperCase() : 'a';
  return `${firstNameControl} ${lastNameControl}`;
};
const compareUserName = (firstName, lastName) => {
  const firstNameControl = firstName ? firstName : 'b';
  const lastNameControl = lastName ? lastName : 'a';
  return `${firstNameControl} ${lastNameControl}`;
};
export {setAvatarText, compareUserName};
