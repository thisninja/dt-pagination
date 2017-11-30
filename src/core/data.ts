import * as v from "./utils";

export default function (this: uibPaginationData) {

    let currentPage = v.isDefined(this.value.currentPage) ? this.value.currentPage : 1;
    let data = {
        currentPage,
        base: location.origin + location.pathname
    };

    return data;
};