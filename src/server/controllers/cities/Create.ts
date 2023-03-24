import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICity {
  nome: string;
}

export const Create = (req: Request<{}, {}, ICity>, res: Response) => {
  return res.status(StatusCodes.CREATED).json({ cidade: req.body });
};
