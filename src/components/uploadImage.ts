function uploadImage(
  e: React.ChangeEvent<HTMLInputElement>,
  setPicture: (arg: string) => void
) {
  if (e.currentTarget.files && e.currentTarget.files[0]) {
    let reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setPicture((e.target as FileReader).result as string);
    };
    reader.readAsDataURL(e.currentTarget?.files[0]);
  }
}
function multiUploadImage(
  e: React.ChangeEvent<HTMLInputElement>,
  petImage: string[],
  setPetImage: React.Dispatch<React.SetStateAction<string[]>>
) {
  const newPetImage = [...petImage];
  if (e.currentTarget.files && e.currentTarget.files[0]) {
    let reader = new FileReader();
    const index = parseInt(e.target.id.split("fileInput")[1]);
    reader.onload = (e: ProgressEvent<FileReader>): void => {
      const result = reader.result as string;
      newPetImage[index] = result;
      setPetImage(newPetImage);
    };
    reader.readAsDataURL(e.currentTarget?.files[0]);
  }
}

export { uploadImage, multiUploadImage };
