import threaterSchema from "../schemas/threaterSchema";

export default async function resetMovies() {
  try {
    const threaters = await threaterSchema.find();
    threaters.forEach(async (threater) => {
      const now = new Date();
      const diferenceTime = threater.showtime.getTime() - now.getTime();
      if (diferenceTime > 0) {
        try {
          setTimeout(async () => {
            await threaterSchema.findByIdAndDelete(threater._id);
            console.log(`funcion ${threater._id} eliminada`);
          }, diferenceTime);
        } catch (error) {
          console.log(error);
        }
      } else {
        await threaterSchema.findByIdAndDelete(threater._id);
        console.log(`funcion ${threater._id} eliminada`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
