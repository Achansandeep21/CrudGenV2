import { StartFunc as TodayAllQrCodes } from '../../kLowDb/ReadFromFile/allOrders.js';

let GetAllFuncs = () => {
    return TodayAllQrCodes();
};

let GetAsIsFuncs = () => {
    return TodayAllQrCodes();
};

export {
    GetAllFuncs, GetAsIsFuncs
};