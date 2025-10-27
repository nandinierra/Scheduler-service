



import { body, validationResult } from "express-validator";

export const createJobRules = [
  body("name").isString().notEmpty().withMessage("name is required"),
  body("interval").isString().notEmpty().withMessage("interval is required"),
  body("nextRun").optional().isISO8601().withMessage("nextRun must be a valid ISO date"),
  body("description").optional().isString()
];

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  next();
}
