import {ServerZone} from 'nika-server-zone';

export class PlatformDbConfig {
    static readonly COURSES_TABLE = 'courses';

    static connectionParams(serverZone:ServerZone) {
        const connectionsParams = this.connectionsParams();

        const connectionParams = connectionsParams[serverZone];

        if (!connectionParams)
            throw new Error(`Failed to look for platform DB connection params. Server zone: ${serverZone}.`);

        return connectionParams;
    }

    static connectionsParams() {
        return Object.freeze({
            [ServerZone.RU]: {
                host: '188.225.16.202',
                user: 'amakids_platru',
                password: 'qH7mpMzT',
                database: 'amakids_platru'
            },
            [ServerZone.EU]: {
                host: '127.0.0.1',
                user: 'smartum',
                password: 'smartum',
                database: 'smartum'
            },
            [ServerZone.COM]: {
                password: 'zm3f975k',
                user: 'amakids_platform',
                database: 'amakids_platform',
                host: 'amakids.mysql.tools'
            },
            [ServerZone.LOC]: {
                host: '127.0.0.1',
                user: 'smartum',
                password: 'smartum',
                database: 'smartum'
            }
        });
    }
}