function PublicService() {
    this.services = [];

    this.tariffs = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6
    };
}

PublicService.prototype.addMeterReadings = function (amount, serviceName) {

    if (!Object.keys(this.tariffs).includes(serviceName)) {
        throw new Error(`Service "${serviceName}" is already included`);
    }

    if (this.services.some(({ key }) => key === serviceName)) {
        throw new Error(`Service "${serviceName}" is already included`);
    }

    this.services.push({ key: serviceName, amount });
};

PublicService.prototype.deleteMeterReadings = function (serviceName) {
    this.services = this.services.filter(({ key }) => key !== serviceName);
};

PublicService.prototype.getSum = function () {
    return this.services.reduce((sum, { key, amount }) => {
        sum += this.tariffs[key] * amount;
        return sum;
    }, 0);
};

const service = new PublicService();

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(300, "electricity");

const res = service.getSum();
console.log(`res`, res);