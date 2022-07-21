import { Body } from "./Body";
import { Drivetrain } from "./Drivetrain";
import { Engine } from "./Engine";
import { Exterior } from "./Exterior";
import { Grade } from "./Grade";
import { Wheels } from "./Wheels";

export interface CustomCar {
    id? : number;

    body: Body;

    grade: Grade;

    driveTrain: Drivetrain;

    transmission: string;

    engine: Engine;

    exteriro: Exterior;

    interior: string;

    wheels: Wheels;

}