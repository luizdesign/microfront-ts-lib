import Debug from 'debug';
import { CacheStrategy } from './interfaces/cache';
import { Options, Parameters } from './interfaces/microfront';
import { Renderer } from './renderer/template';
import { validateTemplateParameter } from './validators/template';

const DebugLifecycle = Debug('Micro:Lyfecycle');

export default class Microfront {
  private options: Options;

  constructor(parameters: Parameters) {
    const defaultValues = {
      cache: {
        strategy: CacheStrategy.MEMORY,
        data: {},
      },
    };

    this.options = Object.assign({}, defaultValues, parameters);
  }

  async render(template: string): Promise<string> {
    DebugLifecycle('Start template analisys');
    
    validateTemplateParameter(template);
    
    const response = Renderer(template, this.options);
  
    DebugLifecycle('Finish template analisys');

    return response;
  }
}
