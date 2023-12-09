export const setLocalStorage = (item: string, data: any): void => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const removeLocalStorage = (item: string): void => {
  localStorage.removeItem(item);
};

export const getLocalStorage = <T>(item: string): T | any => {
  const storedItem = localStorage.getItem(item);

  if (storedItem) {
    try {
      return JSON.parse(storedItem) as T;
    } catch (error) {
      console.error("Error parsing stored data:", error);
      return null;
    }
  }

  return null;
};
