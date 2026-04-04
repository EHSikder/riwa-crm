import { Dropbox, DropboxAuth } from 'dropbox'

const dropbox = new Dropbox({
  auth: new DropboxAuth({ clientId: process.env.DROPBOX_API_KEY || '' }),
} as any)

export const uploadFileToDropbox = async (
  filePath: string,
  fileContent: Buffer,
  fileName: string
): Promise<{ path: string; url: string }> => {
  try {
    const dropboxPath = `/RIWA CRM${filePath}/${fileName}`

    // Upload file
    const uploadResponse = await dropbox.filesUpload({
      path: dropboxPath,
      contents: fileContent,
      autorename: true,
    })

    // Create shared link
    const sharedLinkResponse = await dropbox.sharingCreateSharedLinkWithSettings({
      path: uploadResponse.result.path_display || dropboxPath,
      settings: {
        requested_visibility: 'public' as any,
      },
    })

    return {
      path: uploadResponse.result.path_display || dropboxPath,
      url: sharedLinkResponse.result.url,
    }
  } catch (error) {
    console.error('Dropbox upload error:', error)
    throw error
  }
}

export const listFilesInDropbox = async (folderPath: string): Promise<any[]> => {
  try {
    const response = await dropbox.filesListFolder({
      path: `/RIWA CRM${folderPath}`,
    })

    return response.result.entries
  } catch (error) {
    console.error('Dropbox list error:', error)
    throw error
  }
}

export const deleteFileFromDropbox = async (filePath: string): Promise<void> => {
  try {
    await dropbox.filesDeleteV2({
      path: filePath,
    })
  } catch (error) {
    console.error('Dropbox delete error:', error)
    throw error
  }
}

export const getFilePreview = async (filePath: string): Promise<Buffer> => {
  try {
    const response = await dropbox.filesGetPreview({
      path: filePath,
    })

    return response.result as unknown as Buffer
  } catch (error) {
    console.error('Dropbox preview error:', error)
    throw error
  }
}
