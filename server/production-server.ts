import * as cors from 'cors';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

import { Express } from 'express';
import { Ports } from './ports.enum';
import { Schema } from '@angular/cli/lib/config/workspace-schema';
import { Server } from 'http';
import { createHttpTerminator } from 'http-terminator';

export class ProductionServer {
	private httpServers: { [key: string]: Server } = {};

	get projects() {
		const config: Schema = require('../angular.json');

		if (!config || !Object.keys(config).length) {
			throw new Error('Not an angular workspace!');
		} else if (!config.projects || !Object.keys(config.projects).length) {
			throw new Error('Not found any project!');
		}

		return Object.keys(config.projects || {}) as (keyof typeof Ports)[];
	}

	runServers() {
		const setServer = (project: keyof typeof Ports): Express => {
			const port = Ports[project];
			const servers: { [key: string]: Express } = {};
			const staticPath = path.join(__dirname, '..', 'dist', project);

			servers[project] = express();

			servers[project].use(cors());
			servers[project].use(logger('dev'));
			servers[project].use(express.json());
			servers[project].use(express.urlencoded({ extended: false }));
			servers[project].use('/', express.static(staticPath));
			servers[project].set('port', port);

			return servers[project];
		};

		for (const project of this.projects) {
			const server = setServer(project);
			const port = (server.locals as express.Application).settings.port as number;

			this.httpServers[project] = server.listen(port, () => {
				console.log(
					`Project ${project} is up and running on port ${port}: http://localhost:${port}`,
				);
			});
		}
	}

	async killServers() {
		for (const server of this.projects) {
			await createHttpTerminator({ server: this.httpServers[server] }).terminate();
		}
	}
}
