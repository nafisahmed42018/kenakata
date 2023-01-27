import axios from 'axios';

const BASE_URL = 'https://locakhost:3001/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzVmZmQ0OGE3OGU1NWEwOTM2YjEwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDc2MzU0MSwiZXhwIjoxNjc1MzY4MzQxfQ.QOmPMgkgHoaADfqQA7Chbmm-g8SChftpxZKheoWOFbQ';

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

export const userReq = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
