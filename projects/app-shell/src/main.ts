import { environment } from './environments/environment';
import { loadManifest } from '@angular-architects/module-federation';

loadManifest(`/assets/${environment.production ? 'mf.manifest.prod.json' : 'mf.manifest.json'}`)
	.catch((err) => console.error(err))
	.then(() => import('./bootstrap'))
	.catch((err) => console.error(err));
