export const removeDuplicateClasses = (className: string): string => {
  // Split the className string into an array of classes
  const classesArray = className.split(" ");

  // Use a Set to remove duplicates and convert it back to an array
  const uniqueClassesArray = [...new Set(classesArray)];

  // Join the array back into a string
  return uniqueClassesArray.join(" ");
};
