import { ConfigService } from '../services/config.service';

export function configurationServiceInitializerFactory(configurationService: ConfigService): () => Promise<any> {
  return () => configurationService.load();
}
