import { body } from "express-validator"

export const searchHotelsValidator = [
    body("city")
        .notEmpty().withMessage("city is required.")
        .isString().withMessage("city must be string."),

    body("checkIn")
        .notEmpty().withMessage("check-in date is required.")
        .isISO8601().withMessage("invalid check-in date."),

    body("checkOut")
        .notEmpty().withMessage("check-out date is required.")
        .isISO8601().withMessage("invalid check-out date"),
]