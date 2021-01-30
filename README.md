# parking-lot-system
A basic parking lot system based on node with bunch of querying features like:
1. Creating a parking lot with n slots.
2. Allocate the nearest slot from entry gate.
3. Vacate  a make .
4. Display cars and their slot details.
5. Display available slot numbers.
6. Display occupied slot numbers.
7. Display the registration number of the cars of x color.
8. Display the slot number for the car with registration number y.
9. free the slot occupied by car with registration number z

Steps to run:
1. npm install
2. npm start
Custom CLI will open
Enter the following commands to perform range of operations:

-create_new_parking_lot <Number>: e.g. create_new_parking_lot 8 will create a parking lot with 8 slots.

-park < REGISTRATION NUMBER > < COLOR >: e.g. park KA-04-AS-2222 Red will allocate the nearest slot from entry gate.

-vacate <Position>: e.g. vacate 4 will make slot number 4 free.

-get_parking_status: e.g. get_parking_status will display cars and their slot details

-reg_num_for_cars_with_colour < COLOR >: e.g. reg_num_for_cars_with_colour White will display the registration number of the cars of white color e.g. MH-02-HH-1234, TS-01-JB-9878

-slot_num_for_cars_with_colour < COLOR >: e.g.  slot_num_for_cars_with_colour White will display slot numbers of the cars of white color e.g. 1, 3

-slot_num_for_reg_num < REGISTRATION NUMBER >: e.g. slot_num_for_reg_num BR-04-AS-2222 will display the slot number for the car with registration number MH-04-AY-1111.

-vacate_car_by_reg_num < REGISTRATION NUMBER > : e.g. vacate_car_by_reg_num BR-04-AS-2222 will free the slot occupied by car with registration number BR-04-AS-2222.

-available_slots : e.g. available_slots will display available slot numbers e.g. 2, 6, 8.

-occupied_slot_num : e.g. occupied_slot_num will display occupied slot numbers e.g. 1, 3, 4, 5, 7.
