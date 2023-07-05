import {PUBLIC_FILE_API_URL} from '$env/static/public';
import { toFristCapital } from '$lib/utils';
import type { fileUploadData } from "@components/FileUploaders/types";

const fetchJpgToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchJpgToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchJpgToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchJpgToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchJpgToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchJpgToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchJpgToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchJpgToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchJpegToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchJpegToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchJpegToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchJpegToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchJpegToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchJpegToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchJpegToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchJpegToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPngToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPngToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchPngToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchPngToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchPngToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchPngToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchPngToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchPngToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchPnmToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPnmToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchPnmToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchPnmToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchPnmToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchPnmToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchPnmToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchPnmToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchPgmToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPgmToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchPgmToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchPgmToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchPgmToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchPgmToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchPgmToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchPgmToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchPpmToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPpmToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchPpmToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchPpmToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchPpmToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchPpmToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchPpmToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchPpmToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchPbmToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPbmToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchPbmToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchPbmToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchPbmToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchPbmToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchPbmToPam = async (data: fileUploadData) => await fetchToY(data, 'pam');
const fetchPbmToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');
const fetchPamToJpg = async (data: fileUploadData) => await fetchToY(data, 'jpg');
const fetchPamToJpeg = async (data: fileUploadData) => await fetchToY(data, 'jpeg');
const fetchPamToPng = async (data: fileUploadData) => await fetchToY(data, 'png');
const fetchPamToPnm = async (data: fileUploadData) => await fetchToY(data, 'pnm');
const fetchPamToPgm = async (data: fileUploadData) => await fetchToY(data, 'pgm');
const fetchPamToPpm = async (data: fileUploadData) => await fetchToY(data, 'ppm');
const fetchPamToPbm = async (data: fileUploadData) => await fetchToY(data, 'pbm');
const fetchPamToPs = async (data: fileUploadData) => await fetchToY(data, 'ps');


async function fetchToY(data: fileUploadData, outType: string) {
  return Promise.all(
    data.map(([file]) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('out_type', outType)

      return fetch(`${PUBLIC_FILE_API_URL}/images/convert`, {
        method: 'POST',
        headers: {
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        body: formData
      });
    })
  );
}

const apis = [
  fetchJpgToPng,
  fetchJpgToPnm,
  fetchJpgToPgm,
  fetchJpgToPpm,
  fetchJpgToPbm,
  fetchJpgToPam,
  fetchJpgToPs,
  fetchJpgToJpeg,
  fetchJpegToPng,
  fetchJpegToPnm,
  fetchJpegToPgm,
  fetchJpegToPpm,
  fetchJpegToPbm,
  fetchJpegToPam,
  fetchJpegToPs,
  fetchJpegToJpg,
  fetchPngToJpg,
  fetchPngToJpeg,
  fetchPngToPnm,
  fetchPngToPgm,
  fetchPngToPpm,
  fetchPngToPbm,
  fetchPngToPam,
  fetchPngToPs,
  fetchPnmToJpg,
  fetchPnmToJpeg,
  fetchPnmToPng,
  fetchPnmToPgm,
  fetchPnmToPpm,
  fetchPnmToPbm,
  fetchPnmToPam,
  fetchPnmToPs,
  fetchPgmToJpg,
  fetchPgmToJpeg,
  fetchPgmToPng,
  fetchPgmToPnm,
  fetchPgmToPpm,
  fetchPgmToPbm,
  fetchPgmToPam,
  fetchPgmToPs,
  fetchPpmToJpg,
  fetchPpmToJpeg,
  fetchPpmToPng,
  fetchPpmToPnm,
  fetchPpmToPgm,
  fetchPpmToPbm,
  fetchPpmToPam,
  fetchPpmToPs,
  fetchPbmToJpg,
  fetchPbmToJpeg,
  fetchPbmToPng,
  fetchPbmToPnm,
  fetchPbmToPgm,
  fetchPbmToPpm,
  fetchPbmToPam,
  fetchPbmToPs,
  fetchPamToJpg,
  fetchPamToJpeg,
  fetchPamToPng,
  fetchPamToPnm,
  fetchPamToPgm,
  fetchPamToPpm,
  fetchPamToPbm,
  fetchPamToPs,
]

export const getImgFetchApi = (fromExt: string, toExt: string) => {
  const apiName = `fetch${toFristCapital(fromExt)}To${toFristCapital(toExt)}`;
  return apis.find(api => api.name === apiName);
};


