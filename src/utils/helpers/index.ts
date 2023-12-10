type NameObject = { firstName: string; lastName: string };

export const convertToFirstNameLastName = (fullName: string): NameObject | any => {
  if (!fullName || fullName == null) return;

  // const [firstName, ...lastName] = fullName.trim().split(/\s+/);
  // return firstName ? { firstName, lastName: lastName.join(" ") } : null;
};
