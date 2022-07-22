import { Body } from "./Body";
import { Drivetrain } from "./Drivetrain";
import { Engine } from "./Engine";
import { Exterior } from "./Exterior";
import { Grade } from "./Grade";
import { Wheels } from "./Wheels";
import { Interior } from "./Interior";
import { Transmission } from "./Transmission";

export interface CustomCar {
    id? : number;

    body: Body;

    grade: Grade;

    driveTrain: Drivetrain;

    transmission: Transmission;

    engine: Engine;

    exteriro: Exterior;

    interior: Interior;

    wheels: Wheels;

}