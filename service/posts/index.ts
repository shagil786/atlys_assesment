import { requestGet } from "@/components/helpers";
import { REQUEST_POSTS } from "@/contants/api/posts"
import { APIResultType } from "@/src/interfaces/types/api-result-params";
import { APIReqParamsType } from "@/src/interfaces/types/api-reuest-params";

const getPostsData = async (params: any) => {
    const url = `${REQUEST_POSTS}`;

    const getParams: APIReqParamsType = {
        url,
        reqParams: params,
    }

    const result: APIResultType = await requestGet(getParams);

    return result;
}

export const PostData = {
    getPostsData,
}