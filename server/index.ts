import { ProductionServer } from './production-server';

const MAX_SERVER_UPTIME =
	(process.argv.at(process.argv.length - 2) === '--sessionTime' &&
		+(process.argv.at(process.argv.length - 1) || '')) ||
	1000 * 60 * 60;

const productionServer = new ProductionServer();
productionServer.runServers();

setTimeout(async () => {
	const session = new Date(MAX_SERVER_UPTIME);

	productionServer.killServers();

	console.log(
		`All servers are terminated due to maximum time of session duration: ${session.getMinutes()} minutes ${session.getSeconds()} seconds`,
	);
}, MAX_SERVER_UPTIME);
