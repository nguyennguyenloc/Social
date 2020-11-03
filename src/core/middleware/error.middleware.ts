import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";
import { Logger } from "../utils";

const errorMiddleware = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status: number = error.status || 500;
    const message: string = error.message || 'Some thing';

    Logger.error(`[ERROR] - Status: ${status} - Msg: ${message}`);
    res.status(status).json({ message: message });
};

export default errorMiddleware;