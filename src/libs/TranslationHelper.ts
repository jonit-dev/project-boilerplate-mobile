import { appEnv } from '../constants/env';
import { Entities } from '../types/translation.types';

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

    const jsonFile = require(`../translations/${entity}.lang.json`);

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
