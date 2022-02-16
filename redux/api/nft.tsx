import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetNftReportsRequest {
    page: number;
}

interface GetNftReportsResponse {
    reports: NftInterface[];
}

export interface TokenURIInterface {
    title: string;
    description: string;
    image: string;
    hashtags: string[];
}

export interface NftInterface {
    tokenId: number;
    recipient: string;
    address: string;
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    blockNumber: number;
    tokenURI: TokenURIInterface;
    price: string;
    ownerName?: string;
    isLiked?: boolean;
    likesCount: number;
    viewsCount: number;
}

export const nftApi = createApi({
    reducerPath: "nftApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getNftReports: builder.query<GetNftReportsResponse, GetNftReportsRequest>({
            query: ({ page }) => ({
                url: `nft/admin/reports?page=${page}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
        })
    })
});

export const {
    useGetNftReportsQuery,
} = nftApi;