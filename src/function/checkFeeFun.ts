const checkFee = (petType: string | undefined, petAge: number | undefined) => {
  if (petType === "rabbit") {
    return 500;
  } else if (petType === "parrot") {
    return 1200;
  }
  if (petType === "cat" && petAge) {
    if (petAge < 1) {
      return 800;
    } else if (petAge > 1 && petAge < 4) {
      return 600;
    } else if (petAge > 4 && petAge < 9) {
      return 450;
    } else {
      return 200;
    }
  } else if (petType === "dog" && petAge) {
    if (petAge < 1) {
      return 1000;
    } else if (petAge > 1 && petAge < 4) {
      return 800;
    } else if (petAge > 4 && petAge < 9) {
      return 400;
    } else {
      return 200;
    }
  } else {
    return 0;
  }
};
export default checkFee;
