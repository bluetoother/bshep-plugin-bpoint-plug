module.exports = {
    methods: {
        on: function (periph) {
            var value = new Buffer([0x41, 0x54, 0x43, 0x50, 0x00, 0x01, 0x29, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x87, 0x12, 0x8d, 0x01, 0x00, 0x00, 0x00]);

            periph.write('0xf110', '0xf111', value);
        },
        off: function (periph) {
            var value = new Buffer([0x41, 0x54, 0x43, 0x50, 0x00, 0x00, 0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x87, 0x12, 0x8d, 0x01, 0x00, 0x00, 0x00]);

            periph.write('0xf110', '0xf111', value);
        }
    },
    examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'reIDEA' &&
            basicInfo.devName === 'bPoint_Plug' &&
            basicInfo.model === 'bPoint001' &&
            basicInfo.fwRev === 'bPointFW V1503.04' && 
            basicInfo.hwRev === 'Hardware Revision' &&
            basicInfo.swRev === 'Software Revision')
            isMine = true;

        return isMine;
    }
};