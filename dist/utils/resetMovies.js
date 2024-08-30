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
exports.default = resetMovies;
const threaterSchema_1 = __importDefault(require("../schemas/threaterSchema"));
function resetMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const threaters = yield threaterSchema_1.default.find();
            threaters.forEach((threater) => __awaiter(this, void 0, void 0, function* () {
                const now = new Date();
                const diferenceTime = threater.showtime.getTime() - now.getTime();
                if (diferenceTime > 0) {
                    try {
                        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                            yield threaterSchema_1.default.findByIdAndDelete(threater._id);
                            console.log(`funcion ${threater._id} eliminada`);
                        }), diferenceTime);
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                else {
                    yield threaterSchema_1.default.findByIdAndDelete(threater._id);
                    console.log(`funcion ${threater._id} eliminada`);
                }
            }));
        }
        catch (error) {
            console.log(error);
        }
    });
}
