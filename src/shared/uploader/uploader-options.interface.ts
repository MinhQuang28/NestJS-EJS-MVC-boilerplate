import { Request } from 'express';

import { FileTypes } from '@shared';

type cbFileName = (file: Express.Multer.File, req?: Request) => string;

export interface UploaderOptions {
    destination?: string;
    allowedFileTypes?: FileTypes[];
    allowedFileExtensions?: Array<string | string[]>;
    originalName?: boolean;
    maxFileSize?: number | string;

    /**
     * @param fileName: optional, if not provided, the file name will be generated by default
     * @description fileName will be ignored if `originalName = true`
     * @example: 'file', 'file.jpg' # Allow missing extension filename
     * @example: (file) => `prefix-${file.originalname}`
     */
    fileName?: string | cbFileName;

    /**
     * @param fileName: optional, default `true`
     * Overwrite file if exists or throw error
     */
    overwrite?: boolean;

    /**
     * @param multiple: optional, default `false`
     */
    multiple?: boolean;

    /**
     * @param maxCount: optional number defining the maximum number of files to accept, default `Infinity`
     */
    maxCount?: number;

    /**
     * To be sure about files types, we need to use magic number (for more security). If checkMagicNumber equals to `true`, an interceptor will be added after the multer middleware.
     *
     * If the file name extension of the uploaded file(s) is different from the extension and mimetype detected by the detector. The request will be blocked, that means an HttpException with status code 409 will be fired.
     *
     * The detector will be failed in some cases https://github.com/sindresorhus/file-type/issues
     * @param magicNumber: optional, default `false`
     */
    checkMagicNumber?: boolean;
}
