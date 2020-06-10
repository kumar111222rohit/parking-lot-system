const readLine = require('readline'),
    chalk = require('chalk');


var Parking = require('./components/parkingLot.js'),
	parkingLot = new Parking();

    (openTerminalCommandLine)();

function openTerminalCommandLine () {

    var prompts = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
        prompts.question('Input Command: ', function (data) {
            handleUserCommands(data);
        });

}

function handleUserCommands (input) {
	var userCommand = input.split(' ')[0],
		totalParkingSlots,
		parkingSlotNumber,
		parkingSlotNumbers;
    switch (userCommand) {
        case 'create_new_parking_lot':
            try {
                totalParkingSlots = parkingLot.createNewParkingLot(input);
                console.log(chalk.yellow.bold('New Parking lot created with ' + totalParkingSlots + ' slots.'));
            }
            catch (err) {
                console.log(chalk.red.bold(err.message));
            }

            break;
        case 'park':
            try {
                parkingSlotNumber = parkingLot.parkACar(input);
                console.log(chalk.green('Allocated slot number: ' + parkingSlotNumber));
            }
            catch (err) {
                console.log(chalk.red.bold(err.message));
            }
            break;
        case 'vacate':
            try {
                parkingSlotNumber = parkingLot.vacateACar(input);
                console.log(chalk.blue('Slot number ' + parkingSlotNumber + ' is free.'));
            }
            catch (err) {
                console.log(chalk.red(err.message)); // handling exceptions
            }
            break;
        case 'get_parking_status':
            try {
                var parkingSlotStatus = parkingLot.getParkingLotStatus();
                if (parkingSlotStatus.length > 1) {
                    console.log(parkingSlotStatus.join('\n'));
                }
                else {
                    console.log(chalk.yellow('Parking lot is empty')); // what if it's empty
                }
            }
            catch (err) {
                console.log(chalk.red.bold(err.message));
            }
            break;
        case 'reg_num_for_cars_with_colour':
            var registrationNumbers = parkingLot.getCarsHavingColor(input);
            if (registrationNumbers) {
                console.log(registrationNumbers);
			}
			else {
                console.log(chalk.red('Car with given color  not found'));
            }
            break;
        case 'slot_num_for_cars_with_colour':
            parkingSlotNumbers = parkingLot.getSlotsWithSameCarColor(input);
            if (parkingSlotNumbers) {
                console.log(parkingSlotNumbers);
            }
            else {
                console.log(chalk.red.bold('Car with given color  not found'));
            }
            break;
        case 'slot_num_for_reg_num':
            parkingSlotNumber = parkingLot.getSlotByCarRegistrationNumber(input);
            if (parkingSlotNumber) {
                console.log(parkingSlotNumber);
			}
			else {
                console.log(chalk.red.bold('Car with given registration number  not found'));
            }
            break;
        case 'vacate_car_by_reg_num':
            try {
                parkingSlotNumber = parkingLot.vacateACarByCarNumber(input);
                console.log(chalk.blue('Slot number ' + parkingSlotNumber + ' is available.'));
            }
            catch (err) {
                console.log(chalk.red('Car with given registration  not found'));
            }
            break;
        case 'available_slots':
            var availableSlotNumbers = parkingLot.findAllAvailableSlots(input);
            if (availableSlotNumbers) {
                console.log(availableSlotNumbers);
			}
			else {
                console.log(chalk.red.bold('No Parking Lot created'));
            }
            break;
        case 'occupied_slot_num':
            var allocatedSlotNumbers = parkingLot.findAllAllocatedSlots(input);
            if (allocatedSlotNumbers) {
                console.log(allocatedSlotNumbers);
			}
			else {
                console.log(chalk.red.bold('No Parking Lot created'));
            }
            break;
        default:
            console.log(chalk.red.bold(input, '- invalid command'));
            break;
    }
    openTerminalCommandLine();
}
