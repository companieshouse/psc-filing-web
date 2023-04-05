import { Request, Response } from "express";
import { GenericHandler } from "./../generic";
import logger from "../../../lib/Logger";

export class StartHandler extends GenericHandler {

    constructor () {
        super();
        this.viewData.title = "Add, update and cease a person with significant control (PSC)";
        this.viewData.sampleKey = "sample value for start page screen";
    }

    execute (req: Request, response: Response): Promise<Object> {
        logger.info(`GET request for to serve stat page`);
        // ...process request here and return data for the view
        return Promise.resolve(this.viewData);
    }

    // additional support method in handler
    private supportMethod1 (): boolean {
        return true;
    }

    // additional support method in handler
    protected supportMethod2 (): boolean {
        return false;
    }
};
