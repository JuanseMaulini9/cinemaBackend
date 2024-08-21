import { Request, Response } from "express";
import threaterSchema from "../schemas/threaterSchema";
import { SeatsType } from "../types/types";

export async function getThreaters(req: Request, res: Response) {
  try {
    const allThreaters = await threaterSchema.find().populate("movie");
    res.status(200).json(allThreaters);
  } catch (error) {
    console.log(error);
  }
}

export async function getThreaterById(req: Request, res: Response) {
  const { threaterId } = req.body;
  try {
    const threater = await threaterSchema
      .findById(threaterId)
      .populate("movie");
    res.status(200).json(threater);
  } catch (error) {
    console.log(error);
  }
}

export async function postThreater(req: Request, res: Response) {
  const { movieId, showtime, seatsNumber } = req.body;
  try {
    const seats: SeatsType[] = Array.from({ length: seatsNumber }, (_, i) => ({
      number: i + 1,
      state: "libre",
    }));

    const newThreater = new threaterSchema({
      movie: movieId,
      showtime: new Date(showtime),
      seats: seats,
    });

    const showTimeDate = new Date(showtime);
    const now = new Date();
    const difference = showTimeDate.getTime() - now.getTime();

    if (difference > 0) {
      setTimeout(async () => {
        try {
          await threaterSchema.findByIdAndDelete(newThreater._id);
        } catch (error) {
          console.log(error);
        }
      }, difference);
    }

    const result = await newThreater.save();
    if (result) {
      res.status(201).json({ message: "Sala creada exitosamente" });
    }
  } catch (error) {}
}

export async function deleteThreaterById(req: Request, res: Response) {
  const { threaterId } = req.body;
  try {
    const deleteThreater = await threaterSchema.findByIdAndDelete(threaterId);
    if (deleteThreater) {
      res.status(200).json({ message: "eliminado exitosamente" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function editThreater(req: Request, res: Response) {
  const { threaterId, seats, showtime, movie } = req.body;

  const depuringSeats: SeatsType[] = seats.map((seat: SeatsType) => {
    if (seat.state === "reservado") {
      return { ...seat, state: "ocupado" };
    }
    return seat;
  });

  try {
    const editedThreater = await threaterSchema.findByIdAndUpdate(threaterId, {
      movie,
      showtime,
      seats: depuringSeats,
    });
    if (editedThreater) {
      res
        .status(200)
        .json({ message: "sala editada exitosamente", seats: depuringSeats });
    }
  } catch (error) {}
}
