import { Body } from "./Body";
import { Drivetrain } from "./Drivetrain";
import { Engine } from "./Engine";
import { Grade } from "./Grade";
import { Wheels } from "./Wheels";
import { Exterior } from "./Exterior";
import { Transmission } from "./Transmission";
import { Interior } from "./Interior";
import { Extra } from "./Extra";

export interface FormData {

    details: {
        model: string,
        country: string
    }

    body: Body[];

    grade: Grade[];

    drivetrain: Drivetrain[];

    transmission: Transmission[];

    engine: Engine[];

    exterior: Exterior[];

    interior: Interior[];

    wheels: Wheels[];

    extras: Extra[];
}










