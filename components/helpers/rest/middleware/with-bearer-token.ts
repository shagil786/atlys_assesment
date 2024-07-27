// import _ from 'lodash';

// import { parse } from 'cookie';
// import {
//   ApiRequest,
//   ApiResponse,
// } from '../../../interfaces';

// const getTokenFromCookie = async (req) => {
//   const cookieHeader = req.headers.cookie;
//   const cookies = parse(cookieHeader || '');
//   const authToken = cookies.auth;

//   if (_.isEmpty(authToken) === true) {
//     throw new Error('Failed to get auth token');
//   }

//   return authToken;
// };

// const withBearerToken = (handler: any) => async (req: ApiRequest, res: ApiResponse) => {
//   const tokenCookie = await getTokenFromCookie(req);

//   const newHeaders = {
//     authorization: `Bearer ${tokenCookie}`,
//   };

//   req.customHeaders = newHeaders;

//   return handler(req, res);
// };

// export default withBearerToken;


export {}