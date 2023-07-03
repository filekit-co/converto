import { fileNameFromHeaders } from "$lib/utils";
import JSZip from 'jszip';
export interface DownloadItem {
  fileName: string;
  fileSize: number;
  downloadUrl: string;
}

export async function buildDownloadListAndZipLink(responses: Response[]) {
  const downloadList: DownloadItem[] = [];
  const blobs: Blob[] = [];
  let zipDownloadLink: HTMLAnchorElement;

  await Promise.all(
    responses
      .filter(response => response.ok)
      .map(async response => {
        const {blob, ...downloadItem} = await buildDownloadItem(response);
        blobs.push(blob);
        downloadList.push(downloadItem as DownloadItem);
      })
  );

  const zip = new JSZip();
  downloadList.forEach(({fileName}, i) => {
    zip.file(fileName, blobs[i]);
  });

  const zipContent = await zip.generateAsync({
    type: 'blob'
  });
  zipDownloadLink = document.createElement('a');
  zipDownloadLink.href = URL.createObjectURL(zipContent);
  zipDownloadLink.download = 'download.zip';


  return {downloadList, zipDownloadLink}
}

async function buildDownloadItem(response: Response) {
  const blob = await response.blob();

  return {
    fileName: fileNameFromHeaders(response.headers),
    fileSize: blob.size,
    downloadUrl: URL.createObjectURL(blob),
    blob
  };
}
