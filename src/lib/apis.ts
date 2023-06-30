import {PUBLIC_FILE_API_URL} from '$env/static/public';
import type { fileUploadData, filePasswordUploadData } from '@components/FileUploaders/types';

export const fetchUnlocks = async (data: filePasswordUploadData) =>  await filePassword(`${PUBLIC_FILE_API_URL}/pdf/decrypt`, data)
export const fetchLocks = async (data: filePasswordUploadData) =>  await filePassword(`${PUBLIC_FILE_API_URL}/pdf/encrypt`, data)

export const fetchPdfToDoc = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/pdf-to-doc`, data)
export const fetchPdfToDocx = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/pdf-to-docx`, data)

export const fetchEpubToDoc = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/epub-to-doc`, data)
export const fetchXpsToDoc = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/xps-to-doc`, data)
export const fetchEpubToDocx = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/epub-to-docx`, data)
export const fetchXpsToDocx = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/xps-to-docx`, data)

export const fetchEpubToPdf = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/epub-to-pdf`, data)
export const fetchXpsToPdf = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/xps-to-pdf`, data)
export const fetchOxpsToPdf = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/oxps-to-pdf`, data)
export const fetchCbzToPdf = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/cbz-to-pdf`, data)
export const fetchFb2ToPdf = async (data: fileUploadData) =>  await base(`${PUBLIC_FILE_API_URL}/fb2-to-pdf`, data)


async function base(url: string, data: fileUploadData) {
  return Promise.all(
    data.map(([file]) => {
      const formData = new FormData();
      formData.append('file', file);

      return fetch(url, {
        method: 'POST',
        headers: {
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        body: formData
      });
    })
  );
}


async function filePassword(url: string, data: filePasswordUploadData) {
  return Promise.all(
    data.map(([file, password]) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', password);

      return fetch(url, {
        method: 'POST',
        headers: {
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        body: formData
      });
    })
  );
}
