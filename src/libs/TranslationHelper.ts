import { Entities } from '@little-sentinel/shared';

import { appEnv } from '../constants/env';

interface IInterpolationObjs {
  [key: string]: string;
}

export class TranslationHelper {
  public static get(
    entity: Entities,
    key: string,
    interpolationObjs?: IInterpolationObjs
  ) {
    const envLang = appEnv.language!;

    const jsonFile = require(`../../node_modules/@little-sentinel/shared/translations/${entity}.lang.json`);

    let translatedString: string = jsonFile[key][envLang];

    if (interpolationObjs) {
      for (const key of Object.keys(interpolationObjs)) {
        translatedString = translatedString.replace(
          `{{${key}}}`,
          interpolationObjs[key]
        );
      }
    }

    return translatedString;
  }
}
