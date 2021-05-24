import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Response {
      advancedResults?: {
        success: boolean;
        count: number;
        data: [];
      };
    }
  }
}

export const advancedResults = (model: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let query;
  const reqQuery = { ...req.query };

  const removeFields = ['select', 'sort', 'page', 'limit'];
  removeFields.forEach((param) => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);
  const operators = /\b(gt|gte|lt|lte|in|regex)\b/g;
  queryStr = queryStr.replace(operators, (match) => `$${match}`);

  query = model.find(JSON.parse(queryStr));
  const results = await query;

  res.advancedResults = {
    success: true,
    count: results.length,
    data: results,
  };
  next();
};
