"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThreaters = getThreaters;
exports.getThreaterById = getThreaterById;
exports.postThreater = postThreater;
exports.deleteThreaterById = deleteThreaterById;
exports.editThreater = editThreater;
const threaterSchema_1 = __importDefault(require("../schemas/threaterSchema"));
function getThreaters(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allThreaters = yield threaterSchema_1.default.find().populate("movie");
            res.status(200).json(allThreaters);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getThreaterById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { threaterId } = req.body;
        try {
            const threater = yield threaterSchema_1.default
                .findById(threaterId)
                .populate("movie");
            res.status(200).json(threater);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function postThreater(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { movieId, showtime, seatsNumber } = req.body;
        try {
            const seats = Array.from({ length: seatsNumber }, (_, i) => ({
                number: i + 1,
                state: "libre",
            }));
            const newThreater = new threaterSchema_1.default({
                movie: movieId,
                showtime: new Date(showtime),
                seats: seats,
            });
            const showTimeDate = new Date(showtime);
            const now = new Date();
            const difference = showTimeDate.getTime() - now.getTime();
            if (difference > 0) {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield threaterSchema_1.default.findByIdAndDelete(newThreater._id);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }), difference);
            }
            const result = yield newThreater.save();
            if (result) {
                res.status(201).json({ message: "Sala creada exitosamente" });
            }
        }
        catch (error) { }
    });
}
function deleteThreaterById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { threaterId } = req.body;
        try {
            const deleteThreater = yield threaterSchema_1.default.findByIdAndDelete(threaterId);
            if (deleteThreater) {
                res.status(200).json({ message: "eliminado exitosamente" });
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function editThreater(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { threaterId, seats, showtime, movie } = req.body;
        const depuringSeats = seats.map((seat) => {
            if (seat.state === "reservado") {
                return Object.assign(Object.assign({}, seat), { state: "ocupado" });
            }
            return seat;
        });
        try {
            const editedThreater = yield threaterSchema_1.default.findByIdAndUpdate(threaterId, {
                movie,
                showtime,
                seats: depuringSeats,
            });
            if (editedThreater) {
                res
                    .status(200)
                    .json({ message: "sala editada exitosamente", seats: depuringSeats });
            }
        }
        catch (error) { }
    });
}
