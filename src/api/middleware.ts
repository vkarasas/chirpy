import { type Request, type Response, type NextFunction } from 'express';
import { config } from "../config.js";

export function middlewareLogResponses(req: Request, res: Response, next: NextFunction) {
    res.on("finish", () => {
            if(res.statusCode >= 300) {
                console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`);
            }
    });

    next();
}

export function middlewareMetricsInc(_: Request, __: Response, next: NextFunction) {
    config.fileserverHits++;
    next();
}