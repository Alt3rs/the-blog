import { styleText } from 'util';

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map(message =>
      styleText('whiteBright', styleText('bgGreen', `${message}`)),
    )
    .join(' ');
  console.log(styleText('green', messages));
}
