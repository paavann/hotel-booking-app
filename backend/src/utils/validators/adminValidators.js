import { body, param } from "express-validator"


export const createMarkupValidator = [
    body("city")
        .notEmpty().withMessage("city is required.")
        .isString().withMessage("city must be a string."),

    body("markup")
        .notEmpty().withMessage("markup is required.")
        .isInt({ min: 0 }).withMessage("markup must be a positive integer.")
]

export const updateMarkupValidator = [
    param("city")
        .notEmpty().withMessage("city param is required.")
        .isString().withMessage("city must be a string."),

    body("markup")
        .notEmpty().withMessage("markup is required.")
        .isInt({ min: 0 }).withMessage("markup must be a positive integer."),
]

export const deleteMarkupValidator = [
    param("city")
        .notEmpty().withMessage("city param is required.")
        .isString().withMessage("city must be a string.")
]