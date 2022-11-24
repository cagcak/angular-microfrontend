import * as cors from 'cors';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as logger from 'morgan';
import * as path from 'path';
import * as request from 'supertest';

import { Express } from 'express';
import { ProductionServer } from './production-server';
import { Schema } from '@angular/cli/lib/config/workspace-schema';
import { createHttpTerminator } from 'http-terminator';

describe('Production Server', () => {
	let app: ProductionServer;
	let servers: { [key: string]: Express } = {};
	const MockPorts = {
		'app-shell': 3000,
		'mf-header': 3001,
		'mf-content': 3002,
		'mf-footer': 3003,
	};
	const setServer = (project: keyof typeof MockPorts): Express => {
		const port = MockPorts[project];
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

	beforeAll(() => {
		app = new ProductionServer();
	});

	beforeEach(() => {
		jest.resetModules();
	});

	it('should get the project names', () => {
		const staticPath = path.join(__dirname, '..', 'angular.json');
		const config: Schema = JSON.parse(fs.readFileSync(staticPath, { encoding: 'utf-8' }));
		const projectKeys = ['app-shell', 'mf-header', 'mf-content', 'mf-footer'];

		expect(config).not.toBeUndefined();
		expect(Object.keys(config)).not.toHaveLength(0);
		expect(config.projects).not.toBeUndefined();
		expect(Object.keys(config.projects || {})).not.toHaveLength(0);
		expect(Object.keys(config.projects || {})).toMatchObject(projectKeys);
		expect(app.projects).toMatchObject(projectKeys);
	});

	it('should run the local production servers', async () => {
		const projects = app.projects;

		for (const project of projects) {
			const server = setServer(project);
			const port = MockPorts[project];

			expect(server).toBeInstanceOf(Function);
			expect(server.listen).toBeInstanceOf(Function);
			expect((server.locals as express.Application).settings.port).toBe(port);

			const httpServer = server.listen(port, () => {
				console.log(
					`Project ${project} is up and running on port ${port}: http://localhost:${port}`,
				);
			});

			const httpTerminator = createHttpTerminator({ server: httpServer });

			expect(httpServer).toBeInstanceOf(http.Server);

			await httpTerminator.terminate();
		}
	});

	describe('Serving production apps', () => {
		const spec = (project: keyof typeof MockPorts, selectorsToBeContain: string[] = []) => {
			const server = setServer(project);
			const staticPath = path.join(__dirname, '..', 'dist', project);
			const context = fs.readFileSync(`${staticPath}/index.html`, 'utf-8');

			request(server)
				.get('/')
				.expect(context)
				.expect('Content-Type', 'text/html; charset=UTF-8')
				.expect(200)
				.end((err, res) => {
					if (err) throw err;

					(selectorsToBeContain || []).forEach((selector) => {
						expect(res.text).toContain(`<${selector}></${selector}>`);
					});
				});
		};

		it(`should serve app-shell application on port: ${MockPorts['app-shell']}`, () => {
			spec('app-shell', ['app-root', 'mf-header-root', 'mf-content-root', 'mf-footer-root']);
		});

		it(`should serve mf-header application on port: ${MockPorts['mf-header']}`, () => {
			spec('mf-header', ['mf-header-root']);
		});

		it(`should serve mf-content application on port: ${MockPorts['mf-content']}`, () => {
			spec('mf-content', ['mf-content-root']);
		});

		it(`should serve mf-footer application on port: ${MockPorts['mf-footer']}`, () => {
			spec('mf-footer', ['mf-footer-root']);
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
		jest.clearAllTimers();

		servers = {};
	});
});
