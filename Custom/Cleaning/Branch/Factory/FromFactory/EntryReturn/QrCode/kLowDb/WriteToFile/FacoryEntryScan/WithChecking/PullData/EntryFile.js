import { StartFunc as ReturnDbObjectWithSchema } from "../../../../../../../../../../../../binV4/FromFactoryCancelScan/Create/kLowDb/CommonFuncs/ReturnDbObjectWithSchema.js";

let StartFunc = () => {
    const LocalFromKLowDb = ReturnDbObjectWithSchema();

    return LocalFromKLowDb;
};

export { StartFunc };