import {GlobalConfig} from './GlobalConfig';

const local = {
    port: 6379,
    host: '127.0.0.1',

    user: '',
    password: ''
};

const remote = {
    user: 'h',
    port: 17539,
    host: 'ec2-99-81-80-27.eu-west-1.compute.amazonaws.com',
    password: 'p5bbf93390566b3ad016555581d45a0ed1091483d64ccaf93df80fb0be55fd7f9'
};

export default GlobalConfig.IS_LOCAL
    ? local
    : remote;
