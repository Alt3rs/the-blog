'use server';

import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';

type UploadImageActionType = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionType> {
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos' });
  }

  const file = formData.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido' });
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: 'Arquivo muito grande' });
  }

  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida' });
  }

  return makeResult({ url: 'URL' });
}
