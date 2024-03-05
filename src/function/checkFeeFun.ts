const checkfee = (petType: string | undefined, petAge: number | undefined) => {
  if (petType === "cat" && petAge) {
    if (petAge < 1) {
      return "₹ 800";
    } else if (petAge > 1 && petAge < 4) {
      return "₹ 600";
    } else if (petAge > 4 && petAge < 9) {
      return "₹ 450";
    } else {
      return "₹ 200";
    }
  } else if (petType === "dog" && petAge) {
    if (petAge < 1) {
      return "₹ 1000";
    } else if (petAge > 1 && petAge < 4) {
      return "₹ 800";
    } else if (petAge > 4 && petAge < 9) {
      return "₹ 400";
    } else {
      return "₹ 200";
    }
  } else {
    return "";
  }
};
export default checkfee;
