const DEV_MODE = (() => {
    try {
        return process.env.MODE === 'dev';
    } catch (e) {
        return false;
    }
})();

export class GlobalConfig {
    static readonly DEV_MODE = DEV_MODE;
    static readonly PROD_MODE = !DEV_MODE;
    static readonly IS_PLATFORM_AVAILABLE = true;
    static readonly IS_LOCAL = DEV_MODE || false;
    static readonly DEBUG_MODE = DEV_MODE || false;
    static readonly TEST_COM_STUDENT_ID = 110121;
    static readonly NEED_CACHE = !GlobalConfig.DEBUG_MODE;
}
