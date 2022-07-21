import { Body } from "./Body";
import { Drivetrain } from "./Drivetrain";
import { Engine } from "./Engine";
import { Grade } from "./Grade";
import { Wheels } from "./Wheels";
import { Exterior } from "./Exterior";

export interface FormData {

    details: {
        model: string,
        country: string
    }

    body: Body[];

    grade: Grade[];

    drivetrain: Drivetrain[];

    transmission: string[];

    engine: Engine[];

    exterior: Exterior[];

    interior: string[];

    wheels: Wheels[];
}










