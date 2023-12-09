export const getAsset = (asset: string) => {
  return require(`../assets/${asset}`);
};

export const errorParser = (errors: any, touched: any, key: any) => {
  return errors[key] && touched[key] && errors[key];
};

/**Convert Image to base 64 */
export const convertImageToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};
